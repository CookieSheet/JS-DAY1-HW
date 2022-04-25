//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(givenString, givenArr){
    for(let i in givenArr){
        if (givenString.toLowerCase().includes(givenArr[i].toLowerCase())) {
            console.log("Matched dog_name");
        } else {
            console.log("No Matches");
        }
    }
}
console.log(findWords(dog_string, dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i in arr){
        if (i % 2 == 0){
            arr.splice(i,1, "even index")
        }
    }
    return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//============Exercise #3 ============//
// Complete the solution so that it reverses the string passed into it.

givenString= "Negative, I am a meat popsicle"

function reverseString(thread){
    return thread.split("").reverse().join("")
}

console.log(reverseString(givenString))

//============Exercise #4 ============//
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

function smallestInteger(arr){
    return Math.min.apply(Math,arr)
}
console.log(smallestInteger([34, -345, -1, 100]))




