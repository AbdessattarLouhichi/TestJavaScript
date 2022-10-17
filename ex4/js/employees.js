
var tbody = document.getElementById('tbody');

//create Companies arrya from localStorage
var Companies= JSON.parse(localStorage.getItem('company')) || [];

// create  Employees array from localStorage
var Employees= JSON.parse(localStorage.getItem('employee')) || [];

// create an array by Companies from Employees array
const arrayByCompany = Object.values(
    Employees.reduce((acc,curr)=>(
      (acc[curr.company] = acc[curr.company] || []).push(curr), acc
    ), {})
  );
 console.log(arrayByCompany);

// Window.onload (Create a List of Employees from Employees array )
function EmployeeList() {
    Employees.map((employee,index)=>{
        tbody.innerHTML+= `
        <tr> 
            <td><img src='${employee.image}'  class="rounded-circle" width ="50px"> ${employee.FirstName} ${employee.LastName}</td>
            <td>${employee.email}</td>
            <td>${employee.adress}</td>
            <td>${employee.company}</td>
            <td class="align-middle">
                <a data-toggle='modal'  data-target='#editEmployee' onClick='(showData(${index}))' data-mdb-toggle="tooltip" title="Done">
                    <i class="fas fa-pencil-alt text-success"></i></a>
                <a class="ml-3" title="Remove"  onClick='Supprimer(${index})'>
                    <i class="fas fa-trash-alt text-danger"></i></a>
            </td>
        </tr>`
    })
}

// get index
var index = null;

function saveIndex(i) {
   index = i;
}
// Display data in Modal Popup
function showData(i) {
    let FirstName = document.getElementById('FirstName');
    let LastName = document.getElementById('LastName');
    let employeeEmail = document.getElementById('employeeEmail');
    let employeeAdress = document.getElementById('employeeAdress');
    let companySelect = document.getElementById('companySelect');
    let image = document.getElementById('image');

     //Create companies select options 
    Companies.map((company,index)=>{
        companySelect.innerHTML+= `
        <option value="${company.companyName}">${company.companyName}</option>`
    })
    
   FirstName.value = Employees[i].FirstName;
   LastName.value = Employees[i].LastName;
   employeeEmail.value = Employees[i].email
   employeeAdress.value = Employees[i].adress
   companySelect.value = Employees[i].company
   image.src = Employees[i].image;
   
   saveIndex(i)
}

// Delete slected employee from Employees List
function Supprimer(i) {
    confirm("Are you sure you want to delete?");
    Employees.splice(i,1);
    localStorage.setItem('employee', JSON.stringify(Employees))
    window.location.reload()
}

// Function to converte image to Base 64
const toBase64 = file  => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    });

// Click #update buton to save changes
var update = document.getElementById('update');
update.addEventListener('click', async function () {
    let FirstName = document.getElementById('FirstName');
    let LastName = document.getElementById('LastName');
    let employeeEmail = document.getElementById('employeeEmail');
    let employeeAdress = document.getElementById('employeeAdress');
    let companySelect = document.getElementById('companySelect');
    let image = document.getElementById('photo');
    
    let base64 = "";
    if(image.files.length>0){   
        base64 = await toBase64(image.files[0]);     
    }else{
        base64 = Employees[index].image;
    }
 
   let data = {
    FirstName: FirstName.value,
    LastName : LastName.value,
    email : employeeEmail.value,
    adress : employeeAdress.value,
    company : companySelect.value,
    image : base64
   }
   
   // replace selected item from Employees array with data
   Employees.splice(index,1,data);
localStorage.setItem('employee', JSON.stringify(Employees));
window.location.reload();

})