function countingSort(arr, maxValue) {
    let bucket = new Array(maxValue + 1);
    let sortedIndex = 0;
    let len = arr.length;
    let bucketLen = maxValue + 1;

    for (let i = 0; i < len; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
    for (let j = 0; j < bucketLen; j++) {
        while (bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
    return arr;
}