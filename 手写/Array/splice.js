/**
 * splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,
 * 并以数组形式返回被修改的内容。此方法会改变原数组。
 * @param {*} start 开始的下标
 * @param {*} length 要删除的长度
 * @param  {...any} values 要添加的元素
 * @returns 
 */
Array.prototype.MySplice = function (start, length, ...values) {
    length = start + length > this.length - 1 ? this.length - start : length       //最多删除start到数组最后的元素长度 
    const res = [], tempArr = [...this]                                 //拷贝数据
    for (let i = start; i < start + values.length; i++) {               //直接把要添加的元素在原数组进行覆盖
        this[i] = values[i - start]
    }
    this.length = start + values.length;
    if (values.length < length) {                                       //情况1：要删除的元素比我要添加的元素多
        const cha = length - values.length
        for (let i = start + values.length; i < tempArr.length; i++) {    //把后面的元素往前面移动，填满中间的空隙
            this[i] = tempArr[i + cha]
        }
        this.length = this.length - cha;
    }
    if (values.length > length) {                                       //情况2：要填加的元素比要删除的多
        for (let i = start + length; i < tempArr.length; i++) {           //从添加完的数据后（start+删除的长度后面的元素）往后补充
            this.push(tempArr[i])
        }
    }
    for (let i = start; i < start + length; i++) {                      //取出删除的元素
        res.push(tempArr[i])
    }
    return res
}


const arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
arr.MySplice(1, 0, 11, 22, 33, 44, 55);
console.log(arr);



//[12, 11, 22, 33, 44, 55, 56, 67, 78, 89, 90]
//[12, 11, 22, 33, 44, 55, 78, 89, 90, 56, 67, 78, 89, 90]
//[12, 11, 22, 33, 44, 55, 56, 67, 78, 89, 90]