package sorter

// QuickSortWithSteps returns the sorted array and the steps involved in sorting
func QuickSortWithSteps(arr []int) []SortStep {
    steps := []SortStep{}
    quickSortHelper(arr, 0, len(arr)-1, &steps)
    return steps
}

func quickSortHelper(arr []int, low, high int, steps *[]SortStep) {
    if low < high {
        p := partition(arr, low, high, steps)
        quickSortHelper(arr, low, p-1, steps)
        quickSortHelper(arr, p+1, high, steps)
    }
}

func partition(arr []int, low, high int, steps *[]SortStep) int {
    pivot := arr[high]
    i := low
    for j := low; j < high; j++ {
        if arr[j] < pivot {
            arr[i], arr[j] = arr[j], arr[i]
            i++
        }
    }
    arr[i], arr[high] = arr[high], arr[i]

    // Record this step
    *steps = append(*steps, SortStep{Array: append([]int(nil), arr...)})
    return i
}
