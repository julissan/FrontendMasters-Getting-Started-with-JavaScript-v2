var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

console.log(studentName1 == studentName2);                  //true
console.log(studentName1 === studentName2);                 //true

console.log(workshopEnrollment1 == workshopEnrollment2);    //true
console.log(workshopEnrollment1 === workshopEnrollment2);   //true

var workshop1 = { topic: null };
var workshop2 = {};


console.log((workshop1.topic === null || workshop1.topic === undefined) && (workshop2.topic === null || workshop2.topic === undefined));
//true


console.log(workshop1.topic == null && workshop2.topic == null);  //Coercive Equality: null == undefined 
//true

//Both comparisons make the exact same checks, but the comparison with the "==" is a lot shorter in code.