package handler

import (
    "encoding/json"
    "net/http"
    "sortviz-backend/internal/sorter"
)

// SortRequest represents the structure of the incoming JSON request
type SortRequest struct {
    Array     []int  `json:"array"`
    Algorithm string `json:"algorithm"`
}

// SortHandler processes the sorting request and returns the sorting steps
func SortHandler(w http.ResponseWriter, r *http.Request) {
    var req SortRequest

    // Decode the JSON request
    err := json.NewDecoder(r.Body).Decode(&req)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    var steps []sorter.SortStep

    // Apply the appropriate sorting algorithm
    switch req.Algorithm {
    case "quick_sort":
        steps = sorter.QuickSortWithSteps(req.Array)
    case "bubble_sort":
        steps = sorter.BubbleSortWithSteps(req.Array)
    default:
        http.Error(w, "Unknown sorting algorithm", http.StatusBadRequest)
        return
    }

    // Send the sorting steps back as a JSON response
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(steps)
}
