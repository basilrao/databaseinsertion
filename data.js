

const database=firebase.database();

function addItem(){
    const name=document.getElementById("name");
    const clase=document.getElementById("class");
    const section=document.getElementById("section");
    const rollno=document.getElementById("rollno");
    const studentinfo={
        studentrollno:rollno.value,
        studentname:name.value,
        studentclase:clase.value,
        studentsection:section.value
        
    }
    database.ref('school/studentinfo').push(studentinfo);
    
}
