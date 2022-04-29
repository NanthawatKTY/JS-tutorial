// let passInput = document.querySelector("#pass-input")
// let btnCal = document.querySelector("#btn-cal")
// let showResult = document.querySelector("#show-result")
// let outPut = document.querySelector("#show-result")

// btnCal.addEventListener('click', () => {
//     // let splitPass = passInput.split('')
//     // console.log(splitPass[1]);
//     console.log(passInput);
// })


// Debit Serial //

let pass = '45ERT32WESD15sdw642THG262WQEE0000'
let pattern = /[^0-9]+/g
let pattern2 = /[0-9]+/g
let splitPass = pass.replace(pattern, "-")
let checkPass = splitPass.match(pattern2).map(num => Number(num))

let sumPass = checkPass.reduce((sum, numPass) => {
    return sum + numPass
 
})

console.log(checkPass)

// let stringSumpass = String(sumPass)

// if (stringSumpass.length < 4) {
//     console.log('0' + stringSumpass);
// }else{
//     console.log(stringSumpass);
// }


// let num = 3
// // let stars = ''
// let sumStar = ''
// let space = ' '

//Input Example
// var rl = require("readline").createInterface(process.stdin);
// let stars = ''

// rl.on("Enter number: ", (line) => {
//   for(let row = 1; row <= line; row++){
//     stars += '*' 
//     console.log(stars)
// 	}
//   rl.close()
// })


// for (let level = 1; level <= num; level++) {	
// 	for (let space = 1; space <= (num - level - 1); space++) {
// 		console.log(" ");
// 		for (let star = 1; star <= ((2*space) + 1); star++){
// 			sumStar += '*'
// 			console.log(sumStar)
// 		}
// 	}
// }


// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	//Code Here
// 	console.log("input:")
// 	//Output of Input Example
// 	console.log(inputList)

// });

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// // Grade Calculator //
// 	rl.question( "Enter score:", (score) => {
// 		if (score >= 80 && score <= 100 ) {
// 			console.log('A');
// 		}
// 		else if (score >= 70 && score <= 79) {
// 			console.log('B');
// 		}
// 		else if (score >= 60 && score <= 69) {
// 			console.log('C');
// 		}
// 		else if (score >= 50 && score <= 59) {
// 			console.log('D');
// 		}
// 		else if (score >= 0 && score < 49) {
// 			console.log('F');
// 		}
// 		else{
// 			console.log("ใส่จำนวนเต็มบวก");
// 		}
// 		rl.close()
// 	})


// 	var rl = require("readline").createInterface(process.stdin);
// 	var inputList = [];

// 	rl.on("line", (score) => {
// 		inputList.push(score);
// 	}).on("close", () => {

// 		if (inputList >= 80 && inputList <= 100 ) {
// 			console.log('A');
// 		}
// 		else if (inputList >= 70 && inputList <= 79) {
// 			console.log('B');
// 		}
// 		else if (inputList >= 60 && inputList <= 69) {
// 			console.log('C');
// 		}
// 		else if (inputList >= 50 && inputList <= 59) {
// 			console.log('D');
// 		}
// 		else if (inputList >= 0 && inputList < 49) {
// 			console.log('F');
// 		}
// 		else{
// 			console.log("ใส่จำนวนเต็มบวก");
// 		}
// });


// ETH Stars //
// let sumStar = ''

// rl.question("Star number: ", (num) => {

// 	for (let level = 1; level <= num; level++) {	
// 		for (let space = 1; space <= (num - level) ; space++) {
// 			sumStar += " "
// 		}
// 		for (let star = 1; star < (2*level); star++){	
// 			sumStar += '*'
// 		}
// 		console.log(sumStar);
// 		sumStar = ""
// 	}
	
// 	//Invert
// 	for (let level = 1; level < num; level++) {  //Level
// 		for (let space = 1; space < (level + 1) ; space++) {    //Space
// 			sumStar += " "
// 		}
// 		for (let star = level; star <= (num - 1)*2-level; star++){
// 			sumStar += '*'  
// 		}
// 		console.log(sumStar);
// 		sumStar = ""
// 	}
//     rl.close();
// });




///  A + B Problem  /////

// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	let sumAB = inputList.reduce((sum, score) => {
//       return Number(sum) + Number(score)
//     })
// 		console.log(sumAB)
// });

// rl.question("Enter", (line) => {
// 	inputList.push(line);

// 	rl.question("Enter second value: ", (line) => {
// 		inputList.push(line)
// 		let sumAB = inputList.reduce((sum, score) => {
// 			return Number(sum) + Number(score)
// 		})
// 		console.log(sumAB)
// 		rl.close()
// 	})
// })


// MIN or MAX
// rl.question("Enter", (line) => {
// 	inputList.push(Number(line));

// 	rl.question("Enter second value: ", (line) => {
// 		inputList.push(Number(line))

// 		for(let i = 0; i < inputList.length; i++){
// 			for(let k = i + 1; k < inputList.length; k++){
// 			  if(inputList[i] > inputList[k] ){
// 				console.log("A")
// 			  }
// 			  if(inputList[i] < inputList[k] ){
// 				console.log("B")
// 			  }
// 			  if(inputList[i] === inputList[k]){
// 				console.log("AB")
// 			  }
// 			}
// 		}
// 		rl.close()
// 	})
// })


//Dollar Sign Pyramid //
// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {
//   let sumStars = ""
// 	for(let level = 1; level <= 5; level++){
//     for(let space = 1; space <= (5-level); space++){
//       sumStars += " "
//     }
//     for(let star = 1; star <= level; star++){
//       sumStars += "$ "
//     }
//     console.log(sumStars)
//     sumStars = ""
//   }

// });


//SOMMAI SHOP V2//
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (ownerName) => {
// 	inputList.push(ownerName);
// }).on("close", () => {

// 	console.log("Welcome " + inputList + " !")
//   console.log("Sommai 108 Eleven Shop")

// });

// // Calculator for Sommai Uncle //
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	let realPrice = inputList.reduce((sum, price) => {
//     return Number(sum) * Number(price)
//   })
//   console.log(realPrice)
  
// });

// /////// MODULUS ///////
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	let modulus = inputList.reduce((accumulator, currentValue) => {
//     return accumulator % currentValue
//   })
// 	console.log(modulus)
// });


// // MAX and MIN
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// // For Reduce Method  
//   let max = inputList.reduce((num1, num2) => {
//     let lastNum = Number(num1)
//     let currentNum = Number(num2)
//     return lastNum > currentNum ? lastNum : currentNum
//   })
//   let min = inputList.reduce((num1, num2) => {
//     let lastNum = Number(num1)
//     let currentNum = Number(num2)
//     return lastNum < currentNum ? lastNum : currentNum
//   }) 
//  console.log("MAX :", max)
//  console.log("MIN :", min)

// });



// ///// LEAP Year or not ? /////
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	let year = Number(inputList)

//   if(year%400 === 0){
//       console.log("Leap Year")
//   }
//   else if(year%4 === 0 && year%100 != 0){
//       console.log("Leap Year")
//   }
//   else if(year%4 === 0 && year%100 === 0){
//      console.log("Not a Leap Year")
//   }
//   else{
//     console.log("Not a Leap Year")
//   } 
 
// });


/// ReverseThe - The Reverse ////
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

//   const joinTexts = inputList.join()
  
//   const splitTexts = joinTexts.split(" ")
//  // const jTexts = splitTexts.join()
  
//   const reversedText = splitTexts.reverse()
//  	let deCodeText = reversedText.join(" ")
//   console.log(deCodeText)
// });



// // ตีกรอบ # //
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {
	
//   let num = Number(inputList)
//   let sumSqr = ""
  
//   CalSquare(num)
 
// 	function CalSquare(num){
//     //First Row
//     for(let sqr = 1; sqr <= num; sqr++){
//         sumSqr += "#"  
//     }
//     console.log(sumSqr)
//  		sumSqr = ""
    
//     //ROW sec to almost last
//   	for(let row = 1; row <= num-2; row++){
//       if(num != 1 && num != 2){
//         for(let sqr = 1; sqr <= 2; sqr++){
//          sumSqr += "#"   
//           //Space
//           if(sqr === 1){
//             for(let space = 1; space <= (num-2); space++ ){
//             	sumSqr += " "
//           	}
//           }
//         }
//         console.log(sumSqr)
//        	sumSqr = ""
//     	}
//     }
    
//     //Last Row
//     if(num != 1){
//       for(let sqr = 1; sqr <= num; sqr++){
//           sumSqr += "#"  
//       }
//       console.log(sumSqr)
//       sumSqr = ""
//       //sd
//     }
//   }
    
// });


// Sorting weight
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (weight) => {
// 	inputList.push(weight);
// }).on("close", () => {

// 	let sortPop = inputList.pop()

//   if(sortPop.toLowerCase() === "min" ){
//      inputList.pop()
//      let minToMax = inputList.sort(compareMinToMax)
//      let addSpace = minToMax.join(" ")
//      console.log(addSpace)
//   }
//   else if(sortPop.toLowerCase() === "max"){
//      inputList.pop()
//      let minToMax = inputList.sort(compareMinToMax)
//      let maxToMin = minToMax.reverse()
//      let addSpace = maxToMin.join(" ")
//      console.log(addSpace)
//   }

//   //Min to Max
//   function compareMinToMax(a, b){
//     return a - b
//   }

// });




////Grade is just a number ////
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

//   let subjects = ['THAI', 'MATH', 'ENGLISH', 'SCIENCE', 'SPORT']
// 	let grades = inputList
  
//   //GPA Calculation
//  	let gpaCalculator = grades.reduce((sum, grade) => {
//     let numGrade = Number(grade)
//     let numSum = Number(sum)
   
//     return numSum + numGrade
//   })
  
//   for(let i = 0; i < subjects.length; i++ ){
//     console.log(`${subjects[i]} = ${grades[i]}`)
//   }
  
//   let gpa = gpaCalculator/subjects.length
  
//   console.log("---")
//   console.log(`GPA = ${gpa.toFixed(1)}`)
  
// });




// Customer History of Sommai Department //
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

//   let details = inputList
//   let detailHead = ['Name', 'Address', 'Gender', 'Tel']
  
//   console.log(`--- Customer Detail ---`)
  
//   for(let step = 0; step < detailHead.length; step++){
//     if(step === 0){
//       console.log(`${detailHead[step]} : ${details[step]} ${details[step + 1]}`)
//     }
//     else if(step >= 1){
//       console.log(`${detailHead[step]} : ${details[step+1]}`)
//     }
//   }
// });


//Just sort max to min //

// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {
	
// 	let minToMax = inputList.sort(function CompareMinToMax(a,b){return a - b})
//   let maxToMin = minToMax.reverse()
  
//   for(let row = 0; row < maxToMin.length; row++){
//      console.log(maxToMin[row])
//   }
// });

//Just sort max to min with Input value//
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {
	
//   let counterNum = Number(inputList[0])
//   inputList.shift()
	
//     for(let row = 0; row < counterNum; row++){
//       let minToMax = inputList.sort(CompareMinToMax)
//       let maxToMin = minToMax.reverse()
//       console.log(maxToMin[row])
//     }
  
  
//   function CompareMinToMax(a,b){return a - b}
// });


// SOMMAI V.3 ///
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {
  
// 	let cusAmount = Number(inputList[0])
//   let newInfo = ""
  
//   console.log("--Customers Information--")
  
//   inputList.shift()
  
//   for(let cusName = 0; cusName < inputList.length; cusName += 3){
//        let age = 2017 - Number(inputList[cusName+1])   //Find age by get Name[index] + Birthyear so it's a next index
//        console.log(`${inputList[cusName]} (age : ${age})`)
//   }

// });


// หน้าไปหลัง หลังไปหน้า //
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	let count = inputList.shift()
  
//   for(let i=1; i <= count; i++){
//     console.log(inputList[count-i])
//   }
// });


// FACTORIAL //
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

//   let number = Number(inputList)
//   console.log(Factorialize(number))
//  // let acculator = []
  
//   function Factorialize(num){
//     if(num >= 0 && num <= 100){
//       if(num === 0 || num === 1){
// 					return 1
//       }
//       for(let count=num - 1; count >= 1; count--){
//         num *= count
//       }
//       return num

//       //---- For REduce() -----///
      
//       // for(let count=1; count <= num; count++){
//       //   acculator.push(count)
//       // }
//       // return acculator.reduce((accuNum, currentNum) => {
//       //   return accuNum * currentNum
//       // })
//     }    
//   }
// });


// Check Password //
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	let pwdJoin = inputList.join()
//   let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{3,20}$/
  
//   if(pwdJoin.match(pattern)){
//     console.log("Valid")
//   }
//   else{
//     console.log("Invalid")
//   }
  
// });



// Christmas Tree //

// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

// 	let num = Number(inputList[0])
//   let sumTree = ""
//   let sumTrunk = ""
  
//   // Outer level
//   for(let bigLevel=1; bigLevel <= num; bigLevel++){
//     // Inner level
//     for(let level = 1; level <= (bigLevel+1); level++){
//       for(let space = 1; space <= (num - level) + 1; space++){
//         sumTree += " "
//       }
//       for(let leaves = 1; leaves < (2*level); leaves++){
//         sumTree += "*"
//    		}
//       console.log(sumTree)
//       sumTree = ""
//   	}
//   }
  
//   //Trunk
//   for(let levelTrunk = 1; levelTrunk <= 2; levelTrunk++){
//     if(levelTrunk === 1){
//       for(let space = 1; space <= num; space++){
//         sumTrunk += " "
//       }
//       for(let trunk = 1; trunk <= 1; trunk++){
//         sumTrunk += "|"
//       }
//       console.log(sumTrunk)
//       sumTrunk = ""
//     }
//     else{
//       for(let space = 1; space <= num; space++){
//         sumTrunk += "="
//       }
//       for(let trunk = 1; trunk <= 1; trunk++){
//         sumTrunk += "V"
//       }
//       for(let space = 1; space <= num; space++){
//         sumTrunk += "="
//       }
//       console.log(sumTrunk)
//       sumTrunk = ""
//     }
//   }
// });


////// From 100K to 1 /////////
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

//   let joinNum = inputList.join()
//   let splitNum = joinNum.split("")
  
//   let sum = splitNum.reduce((acculator, currentValue) => {
//       return Number(acculator) + Number(currentValue)
//   })
  
//   let sumToInt = Array.from(sum.toString()).map(Number)
  
//   //Reduce in Array
//   let sumMoreOne = sumToInt.reduce((num1, num2) => {return num1 + num2})
//   if(sumMoreOne < 10 && sumMoreOne >= 0){
//     console.log(sumMoreOne) 
//   }
//   else{
//     console.log(CheckNumberUnit(sumMoreOne))
//   }
  
//   //Check หลักมากกว่า 1 หลัก
//   function CheckNumberUnit(overNum){
//      overNum = Acculator(overNum)
//      if(overNum >= 10){
//         let sumSplit = Array.from(overNum.toString()).map(Number)
//         return sumSplit.reduce((acculator, currentNum) => {return acculator + currentNum})
//      }   
//   }
  
//   //If number still >= 10
//   function Acculator(numSplit){
//     for(let i=0; i<numSplit.length; i++){
//       numSplit += numSplit[i] 
//     }
//     return numSplit
//   }F
// });



// var arr = [{range:[0,20],title:"First",data:["a","b"]},{range:[20,40],title:"Second",data:["d","f"]},{range:[40,60],title:"THird",data:["g","k"]}];

// function getRange( value ){
//     return arr.findIndex(v => value >= v.range[0] && value <= v.range[1]);
// }

// console.log(getRange(22));
// console.log(getRange(60));


// function test(number, ranges) {
//   for (var i = 0; i < ranges.length; ++i) {
//     if (number < ranges[i]) {
//       return i;
//     }
//   }
// }


// var ranges = [-100, 0, 10, 100, 1000, 2000, 999999];

// console.log(test(0.5, ranges));