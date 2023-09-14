function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log("Reversed string is : " + reverseString('hello'));

function count_vovels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count += 1;
        }
    }
    return count;
}
console.log("Number of Vovels is : " + count_vovels("Shiva Ganesh"));

function palindromechecker(str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
        return true;
    }
}

console.log("malayalam palindrome check : " + palindromechecker("malayalam"))
console.log("shiva palindrome check : " + palindromechecker("shiva"))

function titlecase(str) {
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
console.log(titlecase("hi my name is shiva"))

function arrsum(arr){
    sum=0;
    for (var i=0; i< arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

console.log("Sum of array : " +arrsum([1,2,3,4,5]))

function maxmin(arr){
    max_element = arr[0];
    min_element = arr[0];
    for (let ele of arr){
        if (ele >max_element){
            max_element = ele;
        }

        if (ele <min_element){
            min_element = ele;
        }
    }

    console.log(`minimum value is ${min_element} and maximum value is ${max_element}.`)
}

maxmin([1,2,3,4,5]);

function removeDuplicates(arr) {
    const uniqueNum = [];
    
    for (let ele of arr) {
      if (!uniqueNum.includes(ele)) {
        uniqueNum.push(ele);
      }
    }
    
    return uniqueNum;


  }

  console.log(removeDuplicates([1,1,2,2,2,3,3,3,3,4,5,6,6,6])); 

function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
    }
  
    return chunkedArray;
  }
  
  console.log("Chunked Array" + chunkArray([1,2,3,4,5],2));
  

  
  