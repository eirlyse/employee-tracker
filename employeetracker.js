$(document).ready(function(){

   
 // Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyAudXcAuZCRztKndz9ZHDMCDFZ6xyPxC6c",
   authDomain: "employee-tracker-fe6ab.firebaseapp.com",
   databaseURL: "https://employee-tracker-fe6ab.firebaseio.com",
   projectId: "employee-tracker-fe6ab",
   storageBucket: "",
   messagingSenderId: "241961832693",
   appId: "1:241961832693:web:b8490f4e1b8ced229275bc"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 let database = firebase.database();

 let name;
 let role;
 let dateStarted;
 let monthlyRate;

function addEmployee() {
    name = $("#nameInput").val();
    role = $("#roleInput").val();
    dateStarted = $("#dateInput").val();
    monthlyRate = $("#rateInput").val();

    //need to calculate months worked
    let monthsWorked;

    var firstDate = moment().format(dateStarted, "MM-DD-YYYY");
    var secondDate = moment().format("MM-DD-YYYY");
    console.log(firstDate);
    console.log(secondDate);
    
    // var difference =  


    //need to calculate total billed
    let totalBilled;

    let newEmployee = $("<tr>")
    newEmployee.html(`
    <th scope="row">${name}</th>
    <td>${role}</td>
    <td>${dateStarted}</td>
    <td>${monthsWorked}</td>
    <td>${monthlyRate}</td>
    <td>${totalBilled}</td>
    `);
    
    $("#employeeList").append(newEmployee);
};



$("#submitButton").on("click", function(event){
    event.preventDefault();
    addEmployee();

    database
    .ref()
    .push({
        name: name,
        role: role,
        dateStarted: dateStarted,
        monthlyRate: monthlyRate,
    })

    

});


// database
// .ref()
// .on("child_added", 
//     function (snapshot) {
//         let snapshotValue = snapshot.val();
//         let name = snapshotValue.val();
//         let role = snapshotValue.val();
//         let dateStarted = snapshotValue.val();
//         let monthlyRate = snapshotValue.val();
//         console.log(snapshotValue);
//         addEmployee();
//     }, 
//     function (error) {
//         console.error(error)
//     });

});

