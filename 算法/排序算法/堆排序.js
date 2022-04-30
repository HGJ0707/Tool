/**
 * 堆排序：一个完全二叉树可以用一个一维数组表示
 * @param {*} arr 
 * @returns 
 * parent = (i - 1) / 2
 * children1 = 2i + 1
 * children2 = 2i + 2
 */
var len;   //把len设置成为全局变量

function heapSort(arr) {
    buildMaxHeap(arr);      //建立一个堆（建好后他是一个完全二叉树，每个parent都比子树大）

    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);        //第一个节点是最大值，与最后一个节点交换
        len--;
        heapify(arr, 0);        //因为交换了位置，打乱了堆，所以每次交换完再次进行heapify
    }
    return arr;
}

function buildMaxHeap(arr) {  // 建立大顶堆
    len = arr.length;
    //倒着heapify,从最后一个节点的父节点开始,后面的一般相当于叶子结点
    for (var i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {    // 堆调整,对i节点做heapify操作
    var left = 2 * i + 1,     // i的左子节点
        right = 2 * i + 2,    // i的右子节点
        max = i;          // 默认i,也就是父节点是最大的

    if (left < len && arr[left] > arr[max]) {
        max = left;
    }

    if (right < len && arr[right] > arr[max]) {
        max = right;
    }

    if (max != i) {
        swap(arr, i, max);
        heapify(arr, max);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}