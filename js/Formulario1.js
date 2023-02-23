function gordeBezero() {
  let num;
  if ("Bezero_Kopurua" in localStorage) {
    num = parseInt(localStorage.getItem("Bezero_Kopurua"));
    num++;
  } else {
    num = 0;
  }
  let gIz= document.getElementById('Izena').value,
  gAbz= document.getElementById('Abizena').value,
  gEmail= document.getElementById('Email').value,
  gTelf= document.getElementById('Telf').value,
  gMez= document.getElementById('Mezua').value

  Bezero = {
  Nombre : gIz,
  Apellido : gAbz,
  Mail : gEmail,
  Telefono : gTelf,
  Mezua : gMez 
};

  localStorage.setItem("Bezero_Kopurua", num)
  localStorage.setItem("Bezeroa" + num, JSON.stringify(Bezero));

}


function JSON_Bezero() {

  let ult = parseInt(localStorage.getItem("Bezero_Kopurua"));
  ult = ult + 1;

  var Leihoa = window.open("", "LeihoBezero", "width=400,height=500");
  Leihoa.document.write("<p>Bezeroak: [")

  for (num = 0; num < ult; num++) {
    if(num == 0){
      let UltBezero = localStorage.getItem("Bezeroa" + num)
      Leihoa.document.write(UltBezero);
    }else{
      let UltBezero = localStorage.getItem("Bezeroa" + num)
      Leihoa.document.write("," + UltBezero);
    }
  }
  Leihoa.document.write("]");
}



/*let usuario = document.getElementById("usuario").value;
        let jaiotzeurtea = document.getElementById("jaiotzeurtea").value;
        let iritzia1 = document.getElementById("iritzia").value;
        let checked="";
        if(document.getElementById("gizona").checked){
            checked="Gizona"
        } else if(document.getElementById("emakumea").checked) {
            checked="emakumea";
        }window.alert("sdf")
    iri = {
        usuario:usuario,
        jaiotzeurtea:jaiotzeurtea,
        iritzia:iritzia1,
        sex:checked, */

function LocalEzabatu() {

  localStorage.clear();


} 


