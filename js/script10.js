// 10. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

const arr = [1, 2, 3, 4, 5];
let result = 0;
for (i = 0; i < arr.length; i++) {
    result += arr[i] * arr[i];
}
console.log(result);