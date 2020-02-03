function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let next = i + 1;
    let current = i

    while (arr[current] > arr[next]) {
      const nextval = arr[next]
      const ival = arr[current]
      arr[current] = nextval
      arr[next] = ival
      current--
      next--
    }
  }
}
