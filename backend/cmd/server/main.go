package main

import (
    "log"
    "net/http"
    "sortviz-backend/internal/handler"
    "github.com/rs/cors"
)

func main() {
    // Set up the API endpoint
    http.HandleFunc("/sort", handler.SortHandler)

    // Enable CORS for frontend-backend communication during development
    handler := cors.Default().Handler(http.DefaultServeMux)

    // Start the server
    log.Println("Server started at :8080")
    log.Fatal(http.ListenAndServe(":8080", handler))
}
