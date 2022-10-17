
var tbody = document.getElementById('tbody');


// create  Companies array from localStorage
var Companies= JSON.parse(localStorage.getItem('company')) || [];

console.log(Companies[0].Employees)

// Window.onload (Create a List of Companies from Companies array )

window.addEventListener('load',function() {
    Companies.map((item,index)=>{
        tbody.innerHTML+= `
        <tr> 
            <td>${item.companyName}</td>
            <td>${item.companyAdress}</td>
            <td>${item.companyEmail}</td>
            <td class="align-middle">
                <button data-toggle='modal' class='btn btn-success' data-target='#editCompany' onClick='(showData(${index}))' data-mdb-toggle="tooltip" title="Done">
                    <i class="fas fa-pencil-alt text-white"></i></button>
                <button title="Remove" class='btn btn-danger' onClick='Supprimer(${index})'>
                    <i class="fas fa-trash-alt text-white"></i></button>
            </td>
        </tr>`
    })
})


// get index
var index = null;

function saveIndex(i) {
   index = i;
}
// Display data in Modal Popup
function showData(i) {
    let companyName = document.getElementById('companyName');
    let companyAdress = document.getElementById('companyAdress');
    let companyEmail = document.getElementById('companyEmail');
    
    companyName.value = Companies[i].companyName;
    companyAdress.value = Companies[i].companyAdress;
    companyEmail.value = Companies[i].companyEmail; 
   
   saveIndex(i);
}

// Delete slected company from the companies List
function Supprimer(i) {
    confirm("Are you sure you want to delete?");
    Companies.splice(i,1);
    localStorage.setItem('company', JSON.stringify(Companies))
    window.location.reload()
}


// Click #update buton to save changes
var update = document.getElementById('update');
update.addEventListener('click',  function () {
    let companyName = document.getElementById('companyName');
    let companyAdress = document.getElementById('companyAdress');
    let companyEmail = document.getElementById('companyEmail');

 
   let data = {
    companyName : companyName.value,
    companyAdress : companyAdress.value,
    companyEmail : companyEmail.value,
   
   }
   
   // replace selected item from Companies array with data
   Companies.splice(index,1,data);
localStorage.setItem('company', JSON.stringify(Companies));
window.location.reload();

})