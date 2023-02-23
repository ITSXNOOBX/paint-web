function Validar(){
      Izena= document.getElementById('Izena').value,
      Abizena= document.getElementById('Abizena').value,
      Email= document.getElementById('Email').value,
      Telfonoa= document.getElementById('Telf').value,
      Mezua= document.getElementById('Mezua').value;
      var expReg4 = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      var esValidomail2 = expReg4.test(Email);
      
        var boolean = true;
     
    if (Izena == "") {
        document.getElementById("par1").innerHTML = "*Izena hutsik*";
        boolean = false;

    }

    if (Abizena == "") {
        document.getElementById("par2").innerHTML = "*Abizena hutsik*";
        boolean= false;
    }

    if (Email == "") {
        document.getElementById("par3").innerHTML = "*Email hutsik*";
        boolean= false;
    }

    if (Telfonoa == "") {
        document.getElementById("par4").innerHTML = "*Telefonoa hutsik*";
        boolean = false;
    }

    
    if (Telfonoa.length > 9) {
        document.getElementById("par4").innerHTML = "*Telefonoaren formatua okerra*";
        boolean = false;
    }


    if (Mezua == "") {
        document.getElementById("par5").innerHTML = "*Mezua hutsik*";
        boolean = false;
    }
    
    if (esValidomail2 == false) {
        document.getElementById("par6").innerHTML = "*Email-aren Formatu okerra*";
        return false;
    }
    return boolean;

}

function Ezabatu(){
    document.getElementById("par1").innerHTML="";
    document.getElementById("par2").innerHTML="";
    document.getElementById("par3").innerHTML="";
    document.getElementById("par4").innerHTML="";
    document.getElementById("par5").innerHTML="";
    document.getElementById("par6").innerHTML="";
}



/*BIDALI BOTOIA*/


/*FORMULARIO1*/
function onmousedown1(){
    var Gorde =document.getElementById('btnGorde');
    Gorde.style.backgroundColor="green";
    Gorde.style.borderColor="white";
    Gorde.style.border="10px";
}

function onmouseup1(){
    var Gorde =document.getElementById('btnGorde');
    Gorde.style.backgroundColor="#065410";
    Gorde.style.border="2px solid white";
}

function onmouseover1(){
    var Gorde =document.getElementById('btnGorde');
    Gorde.style.backgroundColor="#065410";
    Gorde.style.borderColor="white";
    Gorde.style.border="10px";
}

function onmouseout1(){
    var Gorde =document.getElementById('btnGorde');
    Gorde.style.backgroundColor="#065410";
    Gorde.style.borderColor="white";
    Gorde.style.border="10px";
}

/*FORMULARIO3*/

function onmousedown13(){
    var Gorde2 =document.getElementById('btnGorde2');
    Gorde2.style.backgroundColor="green";
    Gorde2.style.borderColor="white";
    Gorde2.style.border="10px";
}


function onmouseup13(){
    var Gorde2 =document.getElementById('btnGorde2');
    Gorde2.style.backgroundColor="#065410";
    Gorde2.style.border="2px solid white";
}

function onmouseover12(){
    var Gorde2 =document.getElementById('btnGorde2');
    Gorde2.style.backgroundColor="#065410";
    Gorde2.style.borderColor="white";
    Gorde2.style.border="10px";
}

function onmouseout12(){
    var Gorde2 =document.getElementById('btnGorde2');
    Gorde2.style.backgroundColor="#065410";
    Gorde2.style.borderColor="white";
    Gorde2.style.border="10px";
}


/*IMPRIMATU BOTOIA*/


/*FORMULARIO1*/
function onmousedown2(){
    var Ikusi =document.getElementById('btnIkusi');
    Ikusi.style.backgroundColor="green";
    
}

function onmouseup2(){
    var Gorde =document.getElementById('btnIkusi');
    Gorde.style.backgroundColor="#065410";
    Gorde.style.border="2px solid white";
}

function onmouseover2(){
    var Ikusi =document.getElementById('btnIkusi');
    Ikusi.style.backgroundColor="#065410";
    Ikusi.style.borderColor="white";
    Ikusi.style.border="10px";
}
function onmouseout2(){
    var Ikusi =document.getElementById('btnIkusi');
    Ikusi.style.backgroundColor="#065410";
    Ikusi.style.borderColor="white";
}


function onmouseover22(){
    var Gorde2 =document.getElementById('btnIkusi2');
    Gorde2.style.backgroundColor="#065410";
    Gorde2.style.borderColor="white";
    Gorde2.style.border="10px";
}

function onmouseout22(){
    var Gorde2 =document.getElementById('btnIkusi2');
    Gorde2.style.backgroundColor="#065410";
    Gorde2.style.borderColor="white";
    Gorde2.style.border="10px";
}


/*DATUAK GARBITU BOTOIA*/

function onmousedown3(){
    var Garbitu =document.getElementById('btnGarbitu');
    Garbitu.style.backgroundColor="green";
    
}

function onmouseup3(){
    var Garbitu =document.getElementById('btnGarbitu');
    Garbitu.style.backgroundColor="#065410";
    Garbitu.style.border="2px solid white";
}

function onmouseover3(){
    var Garbitu =document.getElementById('btnGarbitu');
    Garbitu.style.backgroundColor="#065410";
    Garbitu.style.borderColor="white";

}
function onmouseout3(){
    var Garbitu =document.getElementById('btnGarbitu');
    Garbitu.style.backgroundColor="#065410";
 
}




/*EZABATU BOTOIA*/

/*FORMULARIO1*/
function onmousedown4(){
    var Ezaba1 =document.getElementById('Ezabatu1');
    Ezaba1.style.backgroundColor="green";
    Ezaba1.style.border="2px solid white";
}


function onmouseup4(){
    var Ezaba1 =document.getElementById('Ezabatu1');
    Ezaba1.style.backgroundColor="#065410";
    Ezaba1.style.border="2px solid white";
}

function onmouseover4(){
    var Ezaba1 =document.getElementById('Ezabatu1');
    Ezaba1.style.backgroundColor="#065410";
    Ezaba1.style.borderColor="white";

}
function onmouseout4(){
    var Ezaba1 =document.getElementById('Ezabatu1');
    Ezaba1.style.backgroundColor="#065410";
 
}


/*FORMULARIO3*/
function onmousedown43(){
    var Ezaba2 =document.getElementById('Ezabatu2');
    Ezaba2.style.backgroundColor="green";
    Ezaba2.style.border="2px solid white";
}

function onmouseup43(){
    var Ezaba2 =document.getElementById('Ezabatu2');
    Ezaba2.style.backgroundColor="#289dd2";
    Ezaba2.style.border="2px solid white";
}

function onmouseover43(){
    var Ezaba2 =document.getElementById('Ezabatu2');
    Ezaba2.style.backgroundColor="#047ab0";
    Ezaba2.style.borderColor="white";

}

function onmouseout43(){
    var Ezaba2 =document.getElementById('Ezabatu2');
    Ezaba2.style.backgroundColor="#289dd2";
 
}