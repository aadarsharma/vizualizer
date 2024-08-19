package sorter

// BubbleSortWithSteps returns the steps of the bubble sort process
func BubbleSortWithSteps(arr []int) []SortStep {
    steps := []SortStep{}
    n := len(arr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
                // Record this step
                steps = append(steps, SortStep{Array: append([]int(nil), arr...)})
            }
        }
    }
    return steps
}
