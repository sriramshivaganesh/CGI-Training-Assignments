function factorial(n) {
    let ans = 1;
    for (var i = 2; i <= n; i++) {
        ans = ans * i;
    }
    return ans;
}

console.log("Factorial of 5: " + factorial(5))

function fibbonacci(n) {
    let n1 = 0;
    let n2 = 1;
    let nextterm;


    for (let i = 1; i <= n; i++) {
        console.log(n1);
        nextterm = n1 + n2;
        n1 = n2;
        n2 = nextterm;
    }
}
console.log("Fibbonacci 9 digits")
fibbonacci(9)

function prime_number(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log("prime number check 25 : " + prime_number(25));
console.log("prime number check 67 : " + prime_number(67));

function array_filtering(arr){
    const even_arr=[];
    const odd_arr=[];

    for (let i=0;i<arr.length;i++){
        if (arr[i]%2===0){
            even_arr.push(arr[i]);
        }
        else{
            odd_arr.push(arr[i]);
        }
    }
        console.log("even array : " + even_arr)
        console.log("odd array : " + odd_arr)
    


}


