var students = ["Juan", "David", "Brayan", "Felipe", "Diego", "Alejandro"];

for(let i = 0; i < students.length; i++){ //It gets executed students.length times, changing the position on students[] that gets printed every time
    console.log(students[i]);
}

for(let student of students){ //It searches for every element inside students[] in order and prints them
    console.log(student);
}

while(students.length > 0){ 
    let student = students.pop(); //Students are removed from the list from the bottom of the list to the top.
    console.log("Student " + student + " removed from the list.");  
}   //students.shift(); would remove them in the regular order of the list.