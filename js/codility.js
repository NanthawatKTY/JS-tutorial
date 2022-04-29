// let A = [1, 2, 3, 4, 6,10]

// let sortedA = A.sort()
// // let delDuplicate = [...new Set(sortedA)]

// console.log(solution(sortedA))

// function solution(array) {
//     const set = new Set(array);
//     let i = 1
  
//     while (set.has(i)) {
//       i++
//     }
//     return i
// }

// function solution(array) {
//     for (i = 1; i < 1000000; i++) {
//         if(!array.includes(i)) return i;
//     }
// }

// let reduceForLostNum = delDuplicate.map((acculator, currentNum) => {
//     if (acc) {
        
//     } else {
        
//     }
// })

// console.log(delDuplicate)


// function numberRange (start, end) {
//     return new Array((end - start)+1).fill().map((d, i) => i + start);
   
// }


// input
// 1 เชคความยาวจำนวนหลัก นับหลักทั้งหมด แต่ไม่นับ 0 เช่น 0081 = 4 หลัก เลขคือ 81
// 2 เอาตัวเลขตั้งแต่ 0 - จำนวนหลัก / 3 ลงตัว เช่น 4 หลัก ก็หารไปสุด 9999
// 3 เอาเฉพาะเลขที่ตรง กับ Input เท่านั้นที่หาร 3 ลงตัว เช่น 0023 ก็ 0021 0029 3313 2193
// 4 แสดงผลตามจำนวนหลัก เช่น หลัก 4 ตัว 3/3 = 0 ต้องแสดง 0003 
// 5 นับจำนวนรวมทั้งหมด พร้อมแสดงผลทั้งหมด

// [3, 4, 3, 0, 2, 2, 3, 0, 0]
// function solution(ranks) {
//   const set = new Set(ranks)
//   let num = 0

//   //Check each number in ranks
//   ranks.map((x) => {
//       if(set.has(x + 1)){
//           num++
//           // console.log(x)
//       }
//   })
  
//   //Return last num in map func
//   return num

// }

// let files = [ "my.song.mp3 11b",
// "greatSong.flac 1000b",
// "not3.txt 5b",
// "video.mp4 200b",
// "game.exe 100b",
// "mov!e.mkv 10000b"]

// let splitFile = files.join(" ");
// // function solution(S) {
  
// //   return console.log(S)
// // }

// console.log(splitFile.split(" "))

// function solution(A) {
//     const set = new Set(A)
//     let num = 0

//     A.map((x) => {
//         if(set.has(x+1)){
//             num++
//         }
//     })

//     return num
// }

// function solution(A) {
//     var arraySum, smallest, A_size = A.length;
//     arraySum = 0;
//     smallest = A[0];
//     for (i = 0; i < A_size; i++)
//     {
//         if (A[i] < smallest)
//             smallest = A[i];
//             console.log(smallest)
//             /* find array sum */
//         arraySum += A[i];
//     }
 
//     var minOperation = arraySum - A_size * smallest;
//     console.log(arraySum, A_size, smallest )
//     return minOperation    
// }

function solution(A) {

    A.sort((a,b) => a - b)
    let ans = 0, median = A[~~(A.length/2)] //~~  = ปัดทศนิยมขึ้น
    for (let i = 0; i < A.length; i++) ans += Math.abs(median - A[i])
    return median
}

A = [3,2,1,1,2,3,1]
console.log(solution(A));

// javascript program to find min operationclass minOeration{
    /*
     * Function to print minimum operation
     required to make all elements of an array
     * equal
     */
// function printMinOp(arr)
//     {
//          var arraySum, smallest, arr_size = arr.length;
//          arraySum = 0;
//          smallest = arr[0];
//          for (i = 0; i < arr_size; i++)
//          {
          
//              /*
//               * If current element is smaller than update smallest
//               */
//              if (arr[i] < smallest)
//                  smallest = arr[i];
  
//              /* find array sum */
//              arraySum += arr[i];
//          }
  
//          var minOperation = arraySum - arr_size * smallest;
  
//          /* Print min operation required */
//          console.log("Min Operation: "+ minOperation);
  
//     }
  
//      /* Driver program to test above functions */
// var arr = [3,2,1,1,2,3,1];
// printMinOp(arr);
  


// function solution(S) {
//     // Calculate the sum
//     let sum = 0;
//     for (let i = 0; i < S.length; ++i) {
//         sum += S[i];
//     }
    
//     // Store the answer
//     let count = 0;
    
//     // Iterate over the range
//     for (let i = 0; i < S.length; ++i) {
//         // Decreasing the sum
//         let remaining_sum = sum - (S[i]);
    
//         // Iterate over the range
//         for (let j = 0; j <= 9; ++j) {

//         // Checking if the new sum
//         // is divisible by 3 or not
//             if ((remaining_sum + j) % 3 == 0 && j != S[i]) {
//                 // If yes increment
//                 // the value of the count
//                 ++count;
//             }
//         }
//     }
//     return count
// }

// aList = '0081'
// // console.log(solution(aList))
// console.log(solution(aList))