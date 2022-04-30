// var arr1 = [1, 2, 3, 4, 5];
        
        //迭代器创建函数
        // function createIterator(arr) {
        //     let i = 0;
        //     return {
        //         next() {
        //             var result = {
        //                 value: arr[i],
        //                 done: i > arr.length
        //             }
        //             i++;
        //             return result;
        //         }
        //     }
        // }

        // const iter1 = createIterator(arr1);

        // console.log(iter1.next().value);
        // var data = iter1.next();
        // while(!data.done) {
        //     console.log(data.value);
        //     data = iter1.next();
        // }


        //fiber 迭代器

        function createFiberIter() {
            let prev1 = 1,
                prev2 = 1,
                n = 1;      //当前是第几位

            return {
                next() {
                    let value;
                    if(n <= 2) {
                        value = 1;
                    } else {
                        value = prev1 + prev2;
                    }

                    const result = {
                        value,
                        done: false
                    };
                    prev1 = prev2;
                    prev2 = result.value;
                    n++;
                    return result;
                }
            }
        }

        const iterFiber = createFiberIter(5); 

        console.log(iterFiber.next());