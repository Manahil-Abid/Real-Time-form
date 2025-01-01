preview = () => {
    let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let message = document.getElementById("message").value;

    document.getElementById("previewFirstName").textContent = firstName;
    document.getElementById("previewLastName").textContent = lastName;
    document.getElementById("previewEmail").textContent = email;
    document.getElementById("previewPhone").textContent = phone;
    document.getElementById("previewMessage").textContent = message;


    document.getElementById("previews").style.display = "block";
}
submit = () => {

    document.getElementById("firstName").value = "";
   document.getElementById("lastName").value  = "";
   document.getElementById("email").value  = "";
   document.getElementById("phone").value  = "";
   document.getElementById("message").value  = "";

   document.getElementById("previews").style.display = "none";

   
}
