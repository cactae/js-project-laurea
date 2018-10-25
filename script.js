
//Klikatessa tuotetta listasta annetaan luokka "valittu" elementille <li>
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('valittu');
  }
}, false);


//Funktio lisää tuotteen listaan text input elementistä Lisää listaan napista
function lisaaTuote() {

  var item = document.createElement('li');
/* en ehtinyt keksiä käyttötarkoitusta
  var checkBox = document.createElement("input");
  checkBox.type="checkbox"; */

  var tuote = document.getElementById('tuotteet').value;
  var text = document.createTextNode(tuote);

  item.appendChild(text);
  //tämä osa lisää tuotteen listaan ja tyhjentää syöttökentän
// aiheuttaa hälytyksen jos teksti kenttä tyhjä tai oletusviesti.

  if (tuote === '' || tuote === "anna tuote")  {
    alert("Kirjoita jotain");
  } else {
    document.getElementById('lista').appendChild(item);
  }
  document.getElementById('tuotteet').value ="";
}



//tyhjentää koko tuotteiden listan

function emptyList() {
  document.getElementById("lista").innerHTML = "";


}
