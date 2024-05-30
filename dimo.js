//(1) Given an array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].,
//for loop to iterate through the array the 
//difine a variable to save the value
// revrse the element
//print the new array
 
// let x= [2,1,6,4,-7]


// for(let i=0;i<x.length/2;i++){
//   let temp=x[i];
//    x[i]=x[x.length-1-i]
//   x[x.length-1-i]=temp
// }
// console.log(x) 

//another way
// x.reverse()
// console.log(x)


// (2) Given an array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1]
// difine a function to remove the Negative number and return the array
//for loop to iterate through the array
//condition to check if the number is nagative
//if true delete the number
//print the array
// let array=[1,-2,4,-3,1,0,-1]

// function removeNegative(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//         arr.splice(i,1)
//         i=i-1
//         }
//     }
// return arr;
// }

// console.log(removeNegative(array))


// (3)Given an array of integers IntAtt, for example, IntArr = [2,7,1,-2], implement a function to sort this array in ascending order (from lowest to largest) using the Selection Sort method.
//difine a function take an array as parameter
//define a variable to save the valeu
//for loop to iterate through the array 
// for loop to so the coparision and find the min number in the array 
//swetch places of the array elements
//return the sorted array
//  let IntArr = [2,7,1,-2]

// console.log(sort(IntArr))
// function sort(arr){
//     let save, len = arr.length;
//     for(let i = 0; i < len; i++){
//       for(let  j = i+1; j<len; j++){
//          if(arr[j]<arr[i]){
            
//             save = arr[i];
//             arr[i] = arr[j];
//             arr[j] = save;
//          }
//       }
    
//     }
//     return arr;
//   }


  // (4)Write a program that returns an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//difine a function take an array as parameter
//define a variable and empty array
//for loop to iterate through the array 
//for loop to iterate through each sup array
//if  condition to check wich number is bigger 
//true push it in the empty array
//return the new array

  // function largesInArrays(arr) {
 
  //   var newArray=[];
    
  //       for(let i=0;i<arr.length;i++){
  //           let max=[i][0]
  //           for(let j=0;j<arr[i].length;j++){
  //               if(arr[i][j]>max){
  //                   max=arr[i][j]
  //               }
              
  //           }
  //           newArray.push(max)
        
  //       }
  //       return newArray;
  //     }
  //     console.log(largesInArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])) ;
      //Returns [5,27,39,1001]



// (5)Declare a function titleCase(arr) that returns the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
//difine a function take an array as parameter
//define a variable contain th giving srting in low case and changed to array 
//for loop to iterate through the givin array
//change the first letter each element in array to capital letter using string methods
//return the array transformed to a string 
//
function titleCase(arr){
  let m=arr.toLocaleLowerCase().split(' ');
  console.log(m)
  for(let i=0;i<m.length;i++){
    m[i]=m[i][0].toUpperCase()+ m[i].slice(1)
  }
  return m.join(' ');
}
console.log(titleCase("haLLo i'm plAyIng")) 