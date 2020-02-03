function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (min !== i) {
      const minval = arr[min]
      const ival = arr[i]
      arr[i] = minval
      arr[min] = ival
    }
  }
}
