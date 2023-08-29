//reverse a string
function reverseString(str) {

    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;
}

reverseString("hello");

// check if a string is palindrome or not
function isPalindrome(str) {
    if (str == str.split("").reverse().join("")){
        console.log("str is palindrome")
    } else {
        console.log("str is not palindrome")
    }
}

//prints every combinations of a word
function dog(str){
    let combinations = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length + 1; j++) {
        combinations.push(str.slice(i,j));
        }
    }
    return combinations;
}


//capitalize the first letter of each word
const str = 'the quick brown fox';

const arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {

    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

const str2 = arr.join(" ");
console.log(str2);