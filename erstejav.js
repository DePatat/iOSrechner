// Rechner Programm

const bildschirm = document.getElementById("bildschirm");

function appendToDisplay(input){
    bildschirm.value += input;
}

function BildschirmLeer(){
    bildschirm.value = "";
}

function ausRechnen(){
    try{
        bildschirm.value = eval(bildschirm.value);
    }
    catch(error){
        bildschirm.value = "Nein!!";
    }
}