// let btn = document.querySelector("#h1-text")
// let inputNumber = document.querySelector("#number-multi-input")

// let btn = document.getElementById("run-btn")
// let inputNumber = document.getElementById("number-multi-input")
// let output = document.getElementById('output-multi')



// btn.addEventListener('click', () => {
//     let number = Number(inputNumber.value)
//     let outputHTML = ''

//     if (number === 0) {
//         output.innerHTML = 'Everything is 0'
//         return
//     }else
//     {

//         for (var i = 1; i <= 12; i++) {
//             let sumOutput = number * i
//             outputHTML += '<p>'
//             outputHTML += number + 'x' + i + '=' + sumOutput
//             outputHTML += '</p>'
//         }

//         output.innerHTML = outputHTML
//     }
// })



// สร้าง Array
let fruits = ['Apple', 'Banana', 'Carrot'];

// เข้าถึงข้อมูลใน Array ด้วยเลข Index
console.log('- เข้าถึงข้อมูล - ' + fruits)
console.log('First fruit = ' + fruits[0]);
console.log('Second fruit = ' + fruits[1]);

// แก้ไขข้อมูลใน Array
// fruits[1] = 'Watermelon';
// console.log('- แก้ไขข้อมูล -')
// console.log(fruits);

// // เพิ่มข้อมูลที่ตำแหน่งสุดท้ายใน Array
// fruits.push('Mango');
// console.log('- เพิ่มข้อมูลที่ตำแหน่งสุดท้าย -');
// console.log(fruits);

// // เพิ่มข้อมูลที่ตำแหน่งแรกใน Array
// fruits.unshift('Tomato');
// console.log('- เพิ่มข้อมูลที่ตำแหน่งแรก -');
// console.log(fruits);

// // ลบข้อมูลที่ตำแหน่งสุดท้ายใน Array
// fruits.pop();
// console.log('- ลบข้อมูลที่ตำแหน่งสุดท้าย -');
// console.log(fruits);

// // ลบข้อมูลที่ตำแหน่งแรกใน Array
// fruits.shift();
// console.log('- ลบข้อมูลที่ตำแหน่งแรก -');
// console.log(fruits);

// Add and Del at position
// fruits.splice(0, 1)
// console.log(fruits);

// let citrus = fruits.slice(1, 2)
// console.log(fruits);



// Array x loop
// let scoreOutput = document.querySelector("#score-output")

// let scores = [50, 85, 100, 45, 20, 0];
// let scoreOutputHtml = ''
// let passCount = 0

// scores.forEach(score => {
//     if (score >= 50) {
//         passCount++
//     }

//     scoreOutput.innerHTML = "Amount of passed testing = " + passCount
    
// });




/////////////////  MAP ///////////////////
// let scores = [82, 75, 51, 36, 68, 59];
// console.log('- Original -');
// console.log(scores);


// - แปลงคะแนนเป็นข้อความ 'สอบผ่าน' หรือ 'สอบตก'
// let resultScores = scores.map((score) => {
//   if (score >= 50) {
//     return 'สอบผ่าน';
//   }
//   return 'สอบตก';
// });
// console.log('- Results -');
// console.log(resultScores);

// // - แปลงคะแนนเป็นเกรด
// let grades = scores.map((score) => {
//   if (score >= 80) {
//     return 'A';
//   }
//   else if (score >= 70) {
//     return 'B';
//   }
//   else if (score >= 60) {
//     return 'C';
//   }
//   else if (score >= 50) {
//     return 'D';
//   }
//   return 'F';
// });
// console.log('- Grades -');
// console.log(grades);
/////////////////  MAP ///////////////////



/////////////////  Filter ///////////////////

// - คัดเฉพาะคะแนนที่สอบผ่าน
// let passedScores = scores.filter((score) => {
//     return score >= 50;
//   });
//   console.log('- Passed -');
//   console.log(passedScores);
  
//   // - คัดเฉพาะคะแนนที่สอบผ่าน แต่ไม่ได้เกรด A
//   let passedButNotGradeAScores = scores.filter((score) => {
//     return score >= 50 && score < 80;
//   });
//   console.log('- Passed but not grade A -');
//   console.log(passedButNotGradeAScores);
  
//   // - คัดเฉพาะคะแนนที่ขออีกแค่ 1-2 คะแนน เกรดจะเพิ่มขึ้น
//   let whyNotBetterScores = scores.filter((score) => {
//     let needOneMore = (score + 1) % 10 === 0;
//     let needTwoMore = (score + 2) % 10 === 0;
//     return needOneMore || needTwoMore;
//   });
//   console.log('- Need 1-2 more scores for better grade -');
//   console.log(whyNotBetterScores);

/////////////////  Filter ///////////////////





/////////////////  Reduce ///////////////////
// บวกกันเป็นทอด ๆ ///
// let sumScores = scores.reduce((sum, score) => {

//     return sum + score
// })

// console.log(scores);`
// console.log(sumScores);


////////////////// every and some ////////////////////
// Return True or False
// - สอบผ่านกันหมดทุกคนมั้ย ?
// let everyonePassed = scores.every((score) => {
//     return score >= 50;
//   });
//   console.log('- Everyone passed -');
//   console.log(everyonePassed);
  
//   // - มีใครซักคนสอบผ่านมั้ย ?
//   let someonePassed = scores.some((score) => {
//     return score >= 50;
//   });
//   console.log('- Everyone passed -');
//   console.log(someonePassed);

  /////////////////////////////////////////////////////

  ///////////////// Array find findIndex ///////////////
//   let failedScore = scores.find((score) => {
//     return score < 50;
//   });
//   console.log('- Failed score -');
//   console.log(failedScore);
  
//   // - ค้นหาคะแนนที่ได้ตำกว่า 10 (หาไม่เจอสิถามได้)
//   let lessThanTenScore = scores.find((score) => {
//     return score < 10;
//   });
//   console.log('- Less than ten score -');
//   console.log(lessThanTenScore);
  
//   // - ค้นหาตำแหน่งของคะแนนที่สอบตก
//   let failedScoreIndex = scores.findIndex((score) => {
//     return score < 50;
//   });
//   console.log('- Failed score index -');
//   console.log(failedScoreIndex);
  
//   // - ค้นหาตำแหน่งของคะแนนที่ได้ตำกว่า 10 (หาไม่เจอสิถามได้)
//   let lessThanTenScoreIndex = scores.findIndex((score) => {
//     return score < 10;
//   });
//   console.log('- Less than ten score index -');
//   console.log(lessThanTenScoreIndex);

///////////////////////////////////////////////////////////


// prompt("What is your name ?");

