let Lan_Eskaerak;

function gordeEskaerak() {
  let num3;
  if ("CV_Kopurua" in localStorage) {
    num3 = parseInt(localStorage.getItem("CV_Kopurua"));
    num3++;
  } else {
    num3 = 0;
  }

  let Izena3 = document.getElementById('izena3').value,
      Abz3 = document.getElementById('abizena3').value,
      LMail3 = document.getElementById('email3').value,

  CV = {
    Izena: Izena3,
    Abizena: Abz3,
    Email : LMail3
  };

  localStorage.setItem("CV_Kopurua", num3)
  localStorage.setItem("CV" + num3, JSON.stringify(CV));


}


function JSON_Eskaerak() {

  let ult3 = parseInt(localStorage.getItem("CV_Kopurua"));
  ult3 = ult3 + 1;

  var Leihoa3 = window.open("", "LeihoCV", "width=400,height=500");
  Leihoa3.document.write("<p>CV: [")

  for (num3 = 0; num3 < ult3; num3++) {
    if(num3 == 0){
      let UltIritzi3 = localStorage.getItem("CV" + num3)
      Leihoa3.document.write(UltIritzi3);
    }else{
      let UltIritzi3 = localStorage.getItem("CV" + num3)
      Leihoa3.document.write("," + UltIritzi3);
    }
    
  }
  Leihoa3.document.write("]  ")



}