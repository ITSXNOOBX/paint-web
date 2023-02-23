let iritzi;

function gordeIritzi() {
  let num2;
  if ("Iritzi_Kopurua" in localStorage) {
    num2 = parseInt(localStorage.getItem("Iritzi_Kopurua"));
    num2++;
  } else {
    num2 = 0;
  }

  let Iz = document.getElementById('izentext').value,
    Abz = document.getElementById('Abizentext').value,
    checked = "";
    if(document.getElementById("Gizona2").checked){
    checked="Gizona"
    } else if(document.getElementById("Emakumea2").checked) {
    checked="Emakumea";
    }
    Lang_Iritzia = document.getElementById('Iritzia_Lang').value

  iritzi = {
    Izena: Iz,
    Abizena: Abz,
    Sexua : checked,
    Iritzia: Lang_Iritzia,

  };

  localStorage.setItem("Iritzi_Kopurua", num2)
  localStorage.setItem("Iritzia" + num2, JSON.stringify(iritzi));


}


function JSON_Iritziak() {

  let ult2 = parseInt(localStorage.getItem("Iritzi_Kopurua"));
  ult2 = ult2 + 1;

  var Leihoa2 = window.open("", "LeihoIritzia", "width=400,height=500");
  Leihoa2.document.write("<p>Iritziak: [")

  for (num2 = 0; num2 < ult2; num2++) {
    if(num2 == 0){
      let UltIritzi2 = localStorage.getItem("Iritzia" + num2)
      Leihoa2.document.write(UltIritzi2);
    }else{
      let UltIritzi2 = localStorage.getItem("Iritzia" + num2)
      Leihoa2.document.write("," + UltIritzi2);
    }
    
  }
  Leihoa2.document.write("]  ")



}