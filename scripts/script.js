// JavaScript Document
console.log("Howdy!");

//dit zijn alle objecten die moeten veranderen
var dichteDoos = document.getElementById("pizza");
var sterren = document.getElementById("sterren");
var h2 = document.querySelector("h2")
var p = document.querySelector("p")

//de knop en audio voor achtergrond muziek
var ninjaSong = document.querySelector("audio")
var ninjaTurtleSong = document.querySelector("button")

//klik op muziekknop
ninjaTurtleSong.onclick = speelmuziek;

//functie om muziek af te spelen
function speelmuziek() {
    if (ninjaSong.paused) {
    ninjaSong.play() 
    console.log("speel af")
    ninjaTurtleSong.textContent = "PAUZEREN";
    } else {
    ninjaSong.pause()
    console.log("stop")
    ninjaTurtleSong.textContent = "NINJA TURTLE THEME SONG";
    }
};

//dit zijn de knoppen
var pizzaDoos1 = document.getElementById("pizza1");
var pizzaDoos2 = document.getElementById("pizza2");
var pizzaDoos3 = document.getElementById("pizza3");
var pizzaDoos4 = document.getElementById("pizza4");
var pizzaDoos5 = document.getElementById("pizza5");
var pizzaDoos6 = document.getElementById("pizza6");



//dit is de klick functie
pizzaDoos1.onclick = imageNaarPizza1;
pizzaDoos2.onclick = imageNaarPizza2;
pizzaDoos3.onclick = imageNaarPizza3;
pizzaDoos4.onclick = imageNaarPizza4;
pizzaDoos5.onclick = imageNaarPizza5;
pizzaDoos6.onclick = imageNaarPizza6;

//functie 1


function imageNaarPizza1() {
    console.log ("hoi");
    document.getElementById("pizza").src = "./images/pizza1.png";
} 

function imageNaarPizza1() {
    dichteDoos.innerHTML = src="<img src='./images/pizza1.png'>";
    h2.innerHTML = "PIZZA OCTOPUS & MARSMELLO - EPISODE 29; APRIL FOOL"
    p.innerHTML = "In de Teenage Mutant Ninja Turtles-animatieserie uit 1987, aflevering 29, getiteld April Fool, In deze aflevering besluiten de vier Turtles, met name Raphael, om April een lesje te leren voor haar neiging om anderen voor de gek te houden met grappen en moppen. Ze bedenken een uitgebreide valstrik waarbij April wordt overtuigd dat ze in een gevaarlijke situatie verkeert en hulp nodig heeft. De Turtles spelen allemaal een rol in de grap, waarbij Splinter en de Turtles zich vermommen om April te overtuigen dat ze een groep slechteriken moeten bestrijden. Uiteindelijk wordt de grap onthuld en wordt April zich bewust van de April Fools-dagviering. Ze kan de humor van de situatie waarderen, en de Turtles en April vieren dan samen April Fools Day met deze pizza!"
    document.getElementById("pizza").src = "./images/pizza1.png";  
    document.getElementById("sterren").src = "./images/1ster.png"; 
} 

function imageNaarPizza2() {
    dichteDoos.innerHTML = src="<img src='./images/pizza2.png'>";
    h2.innerHTML = "PIZZA AVOCADO & PICKLES - EPISODE 44; PIZZA BY THE SHRED"
    p.innerHTML = "Pizza by the Shred staat de Turtle pizzabezorgingsservice centraal. De Turtles zijn begonnen met het bezorgen van pizza's als bijbaantje om hun levensstijl te bekostigen. In deze aflevering worden ze echter geconfronteerd met concurrentie van een nieuwe pizzabezorgservice genaamd Pizza by the Shred, die snel populair wordt bij de inwoners van New York City Wat de Turtles niet weten, is dat de eigenaar van Pizza by the Shred niemand minder is dan de Shredder, hun aartsvijand. Shredder heeft het plan om de stad te veroveren door de pizza's te besmetten met een geheim ingrediënt dat iedereen in zombies zal veranderen. De Turtles ontdekken al snel het snode plan en moeten Shredder stoppen voordat het te laat is."
    document.getElementById("pizza").src = "./images/pizza2.png";  
    document.getElementById("sterren").src = "./images/2sterren.png"; 
} 

function imageNaarPizza3() {
    dichteDoos.innerHTML = src="<img src='./images/pizza3.png'>";
    h2.innerHTML = "PIZZA ICECREAM - EPISODE 58; THE GANG IS ALL HERE"
    p.innerHTML = "In The Gang's All Here draait het verhaal om de terugkeer van enkele van de belangrijkste schurken uit eerdere seizoenen. Krang, Bebop en Rocksteady weten te ontsnappen uit Dimension X en keren terug naar de aarde. Ze smeden een plan om de Turtles te confronteren en wraak te nemen voor eerdere nederlagen. Om hun kansen te vergroten, sluiten Krang, Bebop en Rocksteady een tijdelijke alliantie met andere schurken die de Turtles eerder hebben bevochten, zoals Shredder en de Rat King. Dit leidt tot een grootschalige aanval op de Turtles in de riolen van New York City. In deze aflevering wordt de nadruk gelegd op de actie en spanning, en de Turtles moeten al hun vaardigheden en teamwork inzetten om de gevaarlijke alliantie van schurken te verslaan. "
    document.getElementById("pizza").src = "./images/pizza3.png";
    document.getElementById("sterren").src = "./images/5sterren.png"; 
} 

function imageNaarPizza4() {
    dichteDoos.innerHTML = src="<img src='./images/pizza4.png'>";
    h2.innerHTML = "PIZZA JELLY BEAN & CHOCOLATE CHIP - EPISODE 83; SLASH THE EVIL TURTLE FROM DIMENSION X"
    p.innerHTML = "In deze aflevering introduceert de serie de personages van Lord Dregg en Mung, twee nieuwe schurken die de Turtles bevechten. Lord Dregg is een kwaadaardige intergalactische heerser, terwijl Mung zijn loyale handlanger is. Samen plannen ze om de aarde te veroveren en de Turtles te vernietigen. Tijdens een confrontatie met de Turtles, gebruikt Lord Dregg geavanceerde technologie om de persoonlijkheden van de Turtles te veranderen, waardoor ze in evil en gewelddadige versies van zichzelf veranderen. Dit zorgt voor een complexe en verwarrende situatie, aangezien de Turtles nu tegen hun eigen kwaadaardige tegenhangers moeten vechten. Het is aan April en Splinter om een manier te vinden om de Turtles terug te veranderen en Lord Dregg te verslaan."
    document.getElementById("pizza").src = "./images/pizza4.png";
    document.getElementById("sterren").src = "./images/4sterren.png"; 
} 

function imageNaarPizza5() {
    dichteDoos.innerHTML = src="<img src='./images/pizza5.png'>";
    h2.innerHTML = "PIZZA ANCHOVY & HOT FUDGE - EPISODE 131; SWORD OF YURIKAWA"
    p.innerHTML = "In deze aflevering ontdekken de Turtles een oude Japanse zwaard dat bekend staat als de sword of Yurikawa. Dit zwaard is zeer krachtig en wordt gezocht door verschillende partijen vanwege zijn legendarische eigenschappen. Het wordt gezegd dat degene die het zwaard in zijn bezit heeft, onoverwinnelijk wordt. De Turtles besluiten om het zwaard te beschermen om te voorkomen dat het in de verkeerde handen valt. Ze krijgen te maken met een groep criminelen, waaronder de beruchte schurk Oroku Saki (Shredder) en zijn handlangers Bebop en Rocksteady. De strijd om de sword of Yurikawa wordt hevig en gevaarlijk, en de Turtles moeten alles op alles zetten om het zwaard te beschermen en te voorkomen dat het in verkeerde handen valt."
    document.getElementById("pizza").src = "./images/pizza5.png";
    document.getElementById("sterren").src = "./images/1ster.png"; 
} 

function imageNaarPizza6() {
    dichteDoos.innerHTML = src="<img src='./images/pizza6.png'>";
    h2.innerHTML = "PIZZA SAUSAGE & BANANA - EPISODE 139; SNAKES ALIVE"
    p.innerHTML = "In deze aflevering richten de Turtles hun aandacht op een groep gangsters die betrokken zijn bij illegale dierenhandel. Deze gangsters stelen zeldzame slangen uit de dierentuin en vormen een gevaar voor zowel de dieren als de stad. De Turtles nemen het op zich om de dieren te bevrijden en de gangsters te stoppen. Wat deze aflevering bijzonder maakt, is de introductie van Venus de Milo, een vrouwelijke mutant met een achtergrond in Shinobi en mystieke krachten. Ze wordt lid van het team van de Turtles en helpt hen in hun strijd tegen de gangsters en om de gestolen slangen te redden."
    document.getElementById("pizza").src = "./images/pizza6.png";
    document.getElementById("sterren").src = "./images/1ster.png"; 
} 
