// 9. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива выведите ее в консоль

const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
alert(sum);