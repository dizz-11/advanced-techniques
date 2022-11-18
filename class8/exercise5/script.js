var array = ["Banana", "Apples", "Oranges", "Blueberries"]
array.reverse();

var student = {
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};

function rollnoDelete() {
    var student = {
        name : "David Rayy", 
        sclass : "VI", 
        rollno : 12 
    };
    
    console.log(student);
    
    delete student.rollno;

    console.log(student);
}


function studentLength() {
    var student = {
        name : "David Rayy", 
        sclass : "VI", 
        rollno : 12 
    };
    
    var size = Object.keys(student).length;
    console.log(size);
}