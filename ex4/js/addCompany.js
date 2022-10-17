// Add New company

var companyName = document.getElementById('newCompany');
var companyAdress = document.getElementById('compAdress');
var companyEmail = document.getElementById('companyEmail')
var errorForm = true;

// Create a Companies array from localStoarge
var Companies = JSON.parse(localStorage.getItem('company')) || [];

// button.addEventListener('click',function AddCompany) add new Company
function AddCompany(){

    //Validation of Company Name
    if (companyName.value == "") {
        companyName.classList.add('is-invalid');
        companyName.classList.remove('is-valid');
        errorForm = false;
    }else{
        companyName.classList.remove('is-invalid');
        companyName.classList.add('is-valid');
    }
    
    //Validation of Company Adress
    if (companyAdress.value == "") {
        companyAdress.classList.add('is-invalid');
        companyAdress.classList.remove('is-valid');
        errorForm = false;
    }else{
        companyAdress.classList.remove('is-invalid');
        companyAdress.classList.add('is-valid');
    }

    //Validation Company Email
    if (companyEmail.value =="") {
        companyEmail.classList.add('is-invalid');
        companyEmail.classList.remove('is-valid');
        errorEmail.innerHTML = 'Email adress required'
        errorForm = false; 
    } else if(companyEmail.value !="" && ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(companyEmail.value)){
        companyEmail.classList.add('is-invalid');
        companyEmail.classList.remove('is-valid');
        errorEmail.innerHTML = 'Invalid Email'
        errorForm = false;
    }else{
        companyEmail.classList.remove('is-invalid');
        companyEmail.classList.add('is-valid');
    }

// generate an object from input Data
    var data = {
        companyName : companyName.value,
        companyAdress : companyAdress.value,
        companyEmail : companyEmail.value,
        Employees : JSON.parse(localStorage.getItem('employee')) || []
    }

// if form is valid push data to Companies array
    if (errorForm) {
        Companies.push(data);
        localStorage.setItem('company', JSON.stringify(Companies));
    
       // window.location.href = "companies.html"
    }
    console.log(data)

}