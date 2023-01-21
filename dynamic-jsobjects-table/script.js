
// task 7 and task 8:  Javascript Objects
// object is a collection of named values
// It is a common practice to declare objects with the const keyword.
// Create an object using Object.create().
// Objects are mutable: They are addressed by reference, not by value.
function mytaskeightfunction(){
  const seniorBatch = [];
  const studentOneDetails = {
    name : "sam",
    "last name": "joe",
    age : 20,
    gender : "male"
  };
  const studentTwoDetails = new Object();// Create an object using Object.create().
  studentTwoDetails.name = "nik";
  studentTwoDetails['last name'] = "gut";
  studentTwoDetails.age = 22;
  studentTwoDetails.gender = "male";

  const studentThreeDetails = {
    name : "kate",
    "last name": "herman",
    age : 19,
    gender : "female"
  };
  const studentFourDetails = {
    name : "mat",
    "last name": "damon",
    age : 30,
    gender : "male"
  };
  const studentFiveDetails = {
    name : "maria",
    "last name": "hunt",
    age : 22,
    gender : "female"
  };
  
  const copystudentOneDetails = studentOneDetails; // shallow copy of objects.
  copystudentOneDetails.age = 30; // update shallow copy of object
  console.log(studentOneDetails, "old copy");
  console.log(copystudentOneDetails, "shallow copy");

  const {age} = studentFiveDetails;
  console.log(age);

  const deepCopy = {...studentOneDetails}; // ... is an operator rest operator , there are two types rest and spread operator
  deepCopy.age = 55;
  console.log(deepCopy, studentOneDetails); 
  const copyOfStudentOneDetails = JSON.parse(JSON.stringify(studentOneDetails));// deep copy of objects.
  // console.log(copyOfStudentOneDetails, "deep copy");
  copyOfStudentOneDetails.name = "haroon";// deep copy update objects.
  copyOfStudentOneDetails['last name'] = "rashid";// deep copy update objects.
  copyOfStudentOneDetails.age = 45;// deep copy update objects.
  copyOfStudentOneDetails.gender = "male";// deep copy update objects.
  console.log(copyOfStudentOneDetails, "deep copy");

  seniorBatch.push(studentOneDetails, studentTwoDetails, studentThreeDetails, studentFourDetails, studentFiveDetails, copyOfStudentOneDetails);
  document.getElementById("myTableMale").innerHTML += `<tr><th>name</th><th>last name</th><th>age</th><th>gender</th></tr>`; // table title for male
  document.getElementById("myTableFemale").innerHTML += `<tr><th>name</th><th>last name</th><th>age</th><th>gender</th></tr>`; // table title for female
  console.log(seniorBatch);
  for(let i = 0; i < seniorBatch.length; i++ ){
    if (seniorBatch[i].gender == "male"){
      document.getElementById("myTableMale").innerHTML += `<tr><td> ${seniorBatch[i].name} </td><td> ${seniorBatch[i]['last name']} </td><td> ${seniorBatch[i].age} </td><td> ${seniorBatch[i].gender} </td></tr>`;
    }
    else if(seniorBatch[i].gender == "female"){
      document.getElementById("myTableFemale").innerHTML += `<tr><td> ${seniorBatch[i].name} </td><td> ${seniorBatch[i]['last name']} </td><td> ${seniorBatch[i].age} </td><td> ${seniorBatch[i].gender} </td></tr>`;
    }
    console.log("Name:", seniorBatch[i].name);
    console.log("Last Name:", seniorBatch[i]['last name']);
    console.log("Age:", seniorBatch[i].age);
    console.log("Gender:", seniorBatch[i].gender);
  }
  
}

mytaskeightfunction();
// Task 9 : According to dataset:
// Show name as h1 heading
// Show all the skills  below the heading by using list ( ul, li ).
// Each record should cover 6 columns e.g 2 records in one row
// Note: you can add more records in data if you want.
function mytaskNinefunction(){
  // object data set
  let dataSet = {
    "data": [
      {
        id: 1, 
        name: "Furqan", 
        age: 10, 
        skills: ["HTML", "CSS", "JS"]
      }, 
      {
        id: 2, 
        name: "Hammad", 
        age: 20, 
        skills: ["Bootstrap", "react", "JS"]
      }
    ],
    
  };
  let mainData = dataSet.data // push the data in main data array
  console.log(mainData, 'this is main data');
  // loop for main data
  for(i=0; i < mainData.length; i++){
    const {name} = mainData[i];// varaible as key name
    let userSkills = mainData[i]["skills"];  // varaible for skills array
    // console.log(userSkills, 'these are user skills');
    let myinnerlist = ``; // empty variable for list items
    for(j=0; j < userSkills.length; j++){
      myList = userSkills[j];
      console.log(myList) ;
      myinnerlist += `<li>${myList}</li>`; // assign the variable with list items
    }
    
    // populating the main row div with the item columns
    let item = `<div class="item col-6" id="mainItem"><h1>${name}</h1><ul>${myinnerlist}</ul></div>`;
    document.getElementById("mainRow").innerHTML += item
  }
 
}
mytaskNinefunction();
// task ten: create objects with form submission
const myFormDataArray = []; // empty array
document.getElementById("myTableResult").innerHTML += `<tr><th>name</th><th>last name</th><th>age</th><th>companyName</th></tr>`; // populate HTML Table
// function with parameters for converting form data in key value pair
function dataObjs(data){
  document.getElementById("myTableResult").innerHTML += `<tr><td> ${data.name} </td><td> ${data.lastname} </td><td> ${data.age} </td><td> ${data.companyName} </td></tr>`;
  return data
}
// function for passing values in parameters of dataObjs and pushing objects in array
function formDatafunction(event){
  let data ={
    name : document.getElementById("firstName").value,
    lastname : document.getElementById("lastName").value,
    age: document.getElementById("userAge").value,
    companyName: document.getElementById("companyName").value
  }
  let formData =  dataObjs(data);
  myFormDataArray.push(formData);
  console.log(myFormDataArray, "updated array"); 
  console.log(myFormDataArray.length, "length of updated array");
  event.preventDefault();
}
const form = document.getElementById('form');
form.addEventListener('submit', formDatafunction); //HTML Form Event Listner

// Task 11 use for In / for of loop : According to dataset:
// Show name as h1 heading
// Show all the skills  below the heading by using list ( ul, li ).
// Each record should cover 6 columns e.g 2 records in one row
// Note: you can add more records in data if you want.
function mytaskElevenfunction(){
  // object data set
  let dataSetv2 = {
    "data": [
      {
        id: 1, 
        name: "Furqan", 
        age: 10, 
        skills: ["HTML", "CSS", "JS"]
      }, 
      {
        id: 2, 
        name: "Hammad", 
        age: 20, 
        skills: ["Bootstrap", "react", "JS"]
      }
    ],
    
  };
  let mainDatav2 = dataSetv2.data // push the data in main data array
  console.log(mainDatav2, 'this is main data');
  // loop for main data
  for(let item of mainDatav2){
    const objName = item.name;// varaible as key name
    let userSkillsv2 = item["skills"];  // varaible for skills array
    console.log(objName, 'these are names');
    console.log(userSkillsv2, 'these are user skills');
    let myinnerlistv2 = ``; // empty variable for list items
    // for(let item2 of userSkillsv2){
    //   myListv2 = item2;
    //   console.log(myListv2) ;
    //   myinnerlistv2 += `<li>${myListv2}</li>`; // assign the variable with list items
    // }
    for(let item2 in userSkillsv2){
      myListv2 = userSkillsv2[item2];
      console.log(myListv2) ;
      myinnerlistv2 += `<li>${myListv2}</li>`; // assign the variable with list items
    }
    
    // populating the main row div with the item columns
    let itemv2 = `<div class="item col-6" id="mainItem"><h1>${objName}</h1><ul>${myinnerlistv2}</ul></div>`;
    document.getElementById("mainRowv2").innerHTML += itemv2
  }
 
}
mytaskElevenfunction();
