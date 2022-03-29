var autok = [
  {
    auto: "Opel",
    ar: 1234567,
  },
  {
    auto: "Skoda",
    ar: 3456789,
  },
  {
    auto: "Toyota",
    ar: 4567891,
  },
];

window.addEventListener("load", init);
/*rövidítőfüggvény */
function ID(elem) {
  return document.getElementById(elem);
}
function $(elem) {
  return document.querySelector(elem);
}

function init() {
  var txt = "<table>";
  txt += "<tr><th>Autó típusa</th><th>ár</th></tr>";
  for (let index = 0; index < autok.length; index++) {
    txt += "<tr>";
    txt += "<td>" + autok[index].auto + "</td>";
    txt += "<td>" + autok[index].ar + "</td>";
    txt += "</tr>";
  }
  txt += "</table>";
  ID("autok").innerHTML = txt;

  /* Formázás js-vel */
  /*inline stílusok használatával */
  ID("autok").style.color = "red";
  var tdTomb = document.querySelectorAll("td");
  for (let index = 0; index < tdTomb.length; index++) {
    tdTomb[index].style.backgroundColor = "yellow";
  }
  /*document.querySelector("#autok").style.backgroundColor="yellow";*/

  /*tdTomb[2].style.color="green";*/

  document.querySelector("td:nth-child(2)").style.color = "green";
  document.querySelector("table tr th").style.border = "1px dotted pink";
  document.querySelector("tr").addEventListener("mouseover", hattersinAllitas);
  document.querySelector("tr").addEventListener("mouseout", hattersinLeAllitas);

  /*Eseménykezelők */
  /*ha a hr tagek föl éviszem az egeret, akkor változzon meg a háttérszín */
  /*for (let index = 0; index < trTomb.length; index++) {
        trTomb[index].addEventListener("mouseover",functionhatterszinAllitas(index))
    }
}

function hatterszinAllitas(index){
    trTomb[index].style.backgroundColor="gray";
}
*/
}
function hattersinAllitas() {
  document.querySelector("tr").style.backgroundColor = "gray";
  document.querySelector("tr").className = "formazas";
}
function hattersinLeAllitas() {
  document.querySelector("tr").style.backgroundColor = "white";
  document.querySelector("tr").className = "";
}