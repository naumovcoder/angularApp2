onload = function ()
{
var d = new Date ();
var add0 = function (x) {return ((x < 10 ? '0': '') + x)}
document.input.myInput.value = d.toLocaleDateString() + ' ' + [add0 (d.getHours ()), add0 (d.getMinutes ()), add0 (d.getSeconds ())].join (':');
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



function newElement() {
  var li = document.createElement("li");
  var p = document.createElement("p");
  var h5 = document.createElement("h5");
  var inputValue = document.getElementById("myInput").value;
  var inputValue2 = document.getElementById("myInput2").value;
  var inputValueCost = document.getElementById("myInputCost").value;
  var t = document.createTextNode(inputValue);
  var c = document.createTextNode(inputValue2);
  var d = document.createTextNode(inputValueCost);
  li.appendChild(t);
  p.appendChild(c);
  h5.appendChild(d);


  if (inputValue === '') {
    alert("Вы должны что-то написать!");
  } else {
    document.getElementById("myUL").appendChild(li);
 }
  document.getElementById("myInput").value = "";

  if (inputValue2 === '') {
    alert("Добавьте описание!");
  } else {
    document.getElementById("LI").appendChild(p);

 }
  document.getElementById("myInput2").value = "";

  if (inputValueCost === '') {
    alert("Добавьте цену!");
  } else {
    document.getElementById("LI").appendChild(h5);

 }
  document.getElementById("myInputCost").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
 
  //var span2 = document.createElement("SPAN");
  //var txt2 = document.createTextNode("\u00D7");
  //span2.className = "close";
  //span2.appendChild(txt2);
  //p.appendChild(span2);

  //var span = document.createElement("SPAN");
  //var txt = document.createTextNode("\u00D7");
  //span.className = "close";
  //span.appendChild(txt);
  //h5.appendChild(span);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}