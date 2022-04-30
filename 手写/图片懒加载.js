//图片懒加载、滚动加载


/**
 * 1.选取所有img标签，拿到img数量
 * 
 * 2.添加scroll事件，触发时运行懒加载函数
 * 3.遍历每一个img，如果在视口内，把src设置成真正的src，并把加载完成的添加到删除数组，记录已加载img数量
 * 4.判断时候已全部加载完成，全部加载后移除scroll事件
 * 5.把遍历完的从imgList数组中去除
 */
let imgList = [...document.querySelectorAll('img')]
let length = imgList.length

const imgLazyLoad = function () {
    let count = 0
    return (function () {
        let deleteIndexList = []
        imgList.forEach((img, index) => {
            let rect = img.getBoundingClientRect()
            if (rect.top < window.innerHeight) {
                img.src = img.dataset.src
                deleteIndexList.push(index)
                count++
                if (count === length) {
                    document.removeEventListener('scroll', imgLazyLoad)
                }
            }
        })
        imgList = imgList.filter((img, index) => !deleteIndexList.includes(index))
    })()
}

// 这里最好加上防抖处理
document.addEventListener('scroll', imgLazyLoad)
