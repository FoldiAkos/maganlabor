function belépés1(){

  var nev= document.getElementById("nev").value;

  var tajszam= document.getElementById("tajszam").value;
  var email= document.getElementById("email").value;
  var Jelszó= document.getElementById("Jelszó").value;
  var Jelszómrepeat= document.getElementById("Jelszómrepeat").value;

  

  if (nev.trim() !== "" && tajszam.trim() !== "" &&  email.trim() !== "" && Jelszó.trim() !== "" && Jelszómrepeat.trim() !== "" ) {
    alert("Sikeres belépés");

    window.open("file:///Z:/Mag%C3%A1nlabor/Index.html");

} else {
    alert("Töltse ki a mezőket");

}
  

   
   
}
function belépés2(){
  

 

  var username = document.getElementById("Felhasználónév").value;
  var password = document.getElementById("psw").value;

  if (username.trim() !== "" && password.trim() !== "") {
      alert("Sikeres belépés");

      window.open("file:///Z:/Mag%C3%A1nlabor/Index.html");


  } else {
      alert("Töltse ki a mezőket");



  }
}
   
   
   
    

function feliratkozas(){
 
  var email = document.getElementById("email").value;

 
    alert("Sikeresen feliratkozott hírlevelünkre!")
  

  
}
function foglal(){

 
        var name = document.getElementById("name").value;
        var mobile = document.getElementById("mobile").value;
        var email = document.getElementById("email").value;

        var mobile = document.getElementById("message").value;

  
        if (name === "" || mobile === "" || email === ""|| message === "") {
          alert("A név és telefonszám mezők kitöltése kötelező!");
          return false;
        }else {
            alert("Sikeres foglalás! "+name);

          }
  
        return true;
      

  
     
  
}