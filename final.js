//Comme vous voulez qu'on commente nos lignes de JS pour prouvez qu'on a bien compris ;)

//C'est ma variable qui permet de créer un boutton supprimer et qui s'ajoute automatiquement à chaque fois qu'on crée une nouvelle tache, là c'est seulement le boutton en lui-même
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//Deuxième variable qui permet de supprimer et donc faire disparaitre la tache quand elle est terminer
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Grosse fonction qui permet d'ajouter une nouvelle tache à chaque fois qu'on remplis le formulaire de saisie et qu'on clique sur le bouton ajouter
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Erreur : Aucune tache ajouté");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//Petite fonction qui permet de remettre à zero les taches
function clear(){
    document.getElementById("result").value.reset();}

//Calendrier    
        var days	= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months	= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        var monthInput	= document.getElementById('month');
        var yearInput	= document.getElementById('year');
        
        for (var month in months) {
            monthInput.innerHTML += '<option value="' + month + '">' + months[month] + '</select>';
        }
        
        Date.prototype.isLeapYear = function() {
            return new Date(this.getFullYear(), 1, 29).getMonth() == 1;
        };
        
        Date.prototype.lastDayOfMonth = function () {
            return new Date(this.getFullYear(), this.getMonth() + 2, 0).getDate();
        }
        
        function refresh(date, buffer, today) {
            console.log(date);
            var table = document.getElementById('table');
            table.innerHTML = '<div class="row" id="row-days"></row>';
            days.forEach(function(v,i) {
                document.getElementById('row-days').innerHTML += '<div class="cell"><span class="day day-name">' + v + '</span></div>'
            });
            
            var counter = 0;
            var counter2 = 0;
            var sixthRow = ((buffer == 4 || buffer == 5) && date.lastDayOfMonth() == 31) || buffer == 5 && date.lastDayOfMonth() == 30;
            for (var i = 0; i < (sixthRow ? 6 : 5); i++) {
                table.innerHTML += '<div class="row row-' + i + (i % 2 == 1 ? ' odd' : ' even') + '"></div>';
                for (var j = 0; j < 7; j++) {
                    ++counter;
                    if (counter > (buffer + 1) % 7) {
                        ++counter2;
                    }
                    document.querySelector('.row.row-'+i).innerHTML += '<div class="cell"><span class="day' + (counter2 == today ? ' today' : '') + '">' + (counter2 > date.lastDayOfMonth() ? '' : (counter2 == 0 ? '' : counter2)) + '</span></div>';
                }
            }
        }
        
      
        
       
        
        
        
       