// function tipCalculator(bill){
//     var tip = 0;
//   switch(true){
//     case bill < 50:
//        tip = (20/100)
//       break;
//       case bill <= 170: 
//       tip = (15/100)
//         break;
//         case bill > 200:
//           tip = (10/100);
//          break;
//   } return tip * bill
//   }
//   var bills = [124, 48, 268];
//   var tips =[tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])]
  
//   console.log(tips)
  
//   var finalpay = [bills[0] + tipCalculator(bills[0]), bills[1] +tipCalculator(bills[1]), bills[2] +tipCalculator(bills[2])]
//   console.log(finalpay) 
   

// (function(){
// var a = b = 3;
// })();

// console.log('a defined? ' + (typeof a !== 'undefined'));
// console.log('b defined? ' + (typeof b !== ' undefined'));


// var firstName = 'Eebru';
//   var age = 28;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy');
//         break;
//   case age >= 13 && age < 20:
//       console.log(firstName + ' is a teenager');
//       break;
//   case age >= 20 && age < 30:
//       console.log(firstName + ' is a young man');
//       break;
//   default:
//       console.log(firstName + ' is a man');
// }

// ______________________________
// var height = '';

// if (height) {
//   console.log('height is defined')
// } else {
//   console.log('height is undefined')
// }

// var eebru = {
//     firstName: 'Ibrahim',
//     lastName: 'Alao',
//     age: 28,
//     isMarried: false,
//     job: 'HR Assistant',
//     family: ['aminat', 'habbeb', 'ifeoluwanimi', 'jubril']
//   };
  
//   console.log(eebru.isMarried);
//   console.log(eebru['job']);
//   var p = 'age';
//   console.log(eebru[p]);
  
//   eebru.age = 25;
//   eebru['lastName'] = 'AAlaoa'
//   console.log(eebru);



// var eebru = {
//     firstName: 'Ibrahim',
//     lastName: 'Alao',
//     birthyear: 1991,
//     isMarried: false,
//     yearNow: 2019,
//     job: 'HR Assistant',
//     family: ['aminat', 'habbeb', 'ifeoluwanimi', 'jubril'],
//     calcAge: function(){
//       this.age = this.yearNow - this.birthyear;
//     }
//   };
//   eebru.calcAge()
//   console.log(eebru)

// var mark = {
//     fullName: 'markmark',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//       this.BMI = this.mass / (this.height * this.height);
//       return this.BMI;
//     } 
//   }
  
//   var john = new Object();
//   john.fullName = 'john';
//   john.mass = 92;
//   john.height = 1.95;
//   john.calcBMI = function(){
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
   
//   }
  
//   if (mark.calcBMI() < john.calcBMI()){
//     console.log(john.fullName + ' has a higher bmi of ' + john.BMI)
//   }else if(mark.BMI> john.BMI) {
//     console.log(mark.fullName + ' has a higher bmi of ' + mark.BMI)
//   }else{
//     console.log('They have the same BMI')
//   }


var john = {
    tips: [],
    finalpay: [],
    bills: [124, 48, 268, 180, 42],
    caltip: function(){
        for (var i =0; i < this.bills.length; i++){
            var j = this.bills[i];
            
        // creating the tip percentage
        var percentage;
        if (j < 50){
            percentage = .20
        }else if (j > 50 && j < 200){
            percentage = .15;
        }else {
            percentage= 0.1;
        }
        // adding tip and percent
        this.tips[i] = j * percentage;
    this.finalpay[i] = j + (j * percentage)
        }

    } 
    
}

var mark = new Object();
mark.tips = [];
mark.finalpay = [];
mark.bills = [77, 375, 110, 45]
mark.calcTip = function() {
    for (var i =0; i < this.bills.length; i++){
        var t = this.bills[i];


        //tip percentage
        var percent;
        if (t < 100){
            percent = .20
        }else if (t > 100 && t > 300){
            percent = .10
        }else {
            percent = .25
        }

        //calculating tips and final pay
        this.tips[i] = t * percent;
        this.finalpay[i] = t + (t * percent);
    }
}

function average(tips){
    var sumTips = 0;
    for(var i = 0; i < tips.length; i++){
        sumTips += tips[i];

    }return sumTips/tips.length
}
mark.calcTip();
john.caltip();
john.average = average(john.tips);
mark.average = average(mark.tips);

console.log(john, mark);





















































































    