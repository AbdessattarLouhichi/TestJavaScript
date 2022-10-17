// Add New Employee

var FirstName = document.getElementById('FirstName');
var LastName = document.getElementById('LastName');
var employeeEmail = document.getElementById('employeeEmail');
var employeeAdress = document.getElementById('employeeAdress');
var companySelect = document.getElementById('companySelect');
var image = document.getElementById('photo');
var errorForm = true;

// Function to converte image to Base 64
    const toBase64 = file  => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    });

//Create Companies select options 
var Companies= JSON.parse(localStorage.getItem('company')) || [];
    Companies.map((company,index)=>{
        companySelect.innerHTML+= `
        <option value="${company.companyName}">${company.companyName}</option>`
    })

// Create a Products array from localStoarge
var Employees = JSON.parse(localStorage.getItem('employee')) || [];

// Async-Await Function 
async function addEmployee() {
    //Validation of Employee  FirstName
    if (FirstName.value == "") {
        FirstName.classList.add('is-invalid');
        FirstName.classList.remove('is-valid');
        errorForm = false;
    }else{
        FirstName.classList.remove('is-invalid');
        FirstName.classList.add('is-valid');
    }
    
    //Validation of Employee  LastName
    if (LastName.value == "") {
        LastName.classList.add('is-invalid');
        LastName.classList.remove('is-valid');
        errorForm = false;
    }else{
        LastName.classList.remove('is-invalid');
        LastName.classList.add('is-valid');
    }
    
    //Validation of Employee Adress
    if (employeeAdress.value == "") {
        employeeAdress.classList.add('is-invalid');
        employeeAdress.classList.remove('is-valid');
        errorForm = false;
    }else{
        employeeAdress.classList.remove('is-invalid');
        employeeAdress.classList.add('is-valid');
    }

    //Validation Employee Email
    if (employeeEmail.value =="") {
        employeeEmail.classList.add('is-invalid');
        employeeEmail.classList.remove('is-valid');
        errorEmail.innerHTML = 'Email adress required';
        errorForm = false; 
    } else if(employeeEmail.value !="" && ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employeeEmail.value)){
        employeeEmail.classList.add('is-invalid');
        employeeEmail.classList.remove('is-valid');
        errorEmail.innerHTML = 'Invalid Email';
        errorForm = false;
    }else{
        employeeEmail.classList.remove('is-invalid');
        employeeEmail.classList.add('is-valid');
    }

    let base64 = "";
    if(image.files.length>0){   
        base64 = await toBase64(image.files[0]);     
    } 

// generate object from input Data
    var data = {
        FirstName: FirstName.value,
        LastName: LastName.value,
        email : employeeEmail.value,
        adress : employeeAdress.value,
        company : companySelect.value,
        image: base64
    }

    if (errorForm) {
        Employees.push(data);
        localStorage.setItem('employee', JSON.stringify(Employees));
    
        window.location.href = "employees.html"
    }
   

}