/////////////  OBJECT //////////////////
// สร้าง Object
// rabbit = {
//     name: 'Mook',
//     breed: 'Lion Head',
//     color: 'White',
//     weight: 50,
//     weightDetail(){
//         if (this.weight < 1) {
//             return "Too LOW"
//         }
//         else if (this.weight > 2) {
//             return "Too HEAVY"
//         }
//         return "AVERAGE"
//     },
//     talk(){
//         console.log(this.name + ', Oughhh Oughhh');
//     }
//   };

// /// Method and This ////
// rabbit.talk()

// console.log(rabbit.weightDetail())

/////////////////////////


/////// Object Constructor /////////

function Rabbit(name, breed, color, weight) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.weight = weight;

    //Method in function Constructor should be like this
    this.talk = () => {
      console.log(this.name + ', oung oung');
    }
  }
  
  let rabbit1 = new Rabbit('Mimi', 'Lion Head', 'White', 1.5);
  let rabbit2 = new Rabbit('Momo', 'Netherland Dwarf', 'Brown', 1.2);
  
  rabbit1.talk();
  rabbit2.talk();

//////////////////////////////////////////

  // เข้าถึงข้อมูลใน Object
//   console.log('- เข้าถึงข้อมูล -')
//   console.log('Name = ' + rabbit.name);
//   console.log('Breed = ' + rabbit.breed);
  
  // แก้ไขข้อมูลใน Object
//   rabbit.name = 'JOJO';
//   console.log('- แก้ไขข้อมูล -')
//   console.log(rabbit);
  
  // เพิ่มข้อมูลใน Object
//   rabbit.age = 2
//   console.log('- เพิ่มข้อมูล -');
//   console.log(rabbit);

//   rabbit.ear = 'Short'
//   console.log(rabbit);


//Object in Array//
// rabbits = [
//     {
//         name: 'Mook',
//         breed: 'Lion Head',
//         color: 'White',
//         weight: 1.2 
//     },
//     {
//         name: 'Max',
//         breed: 'Dick Head',
//         color: 'White',
//         weight: 1.2 
//     },
//     {
//         name: 'Mix',
//         breed: 'Cat Head',
//         color: 'White',
//         weight: 1.2 
//     }
// ]

// rabbits.forEach(rabbit => {
//     console.log('Name: ' + rabbit.name);
//     console.log('Breed: ' + rabbit.breed); 
// });






