// unos
let ime = prompt("unesi ime: ");
let cijenaUl = parseFloat(prompt("unesi cijenu ulaznice: "));
let brojUl = parseInt(prompt("unesi broj ulaznica: "));
let budzet = parseFloat(prompt("unesi budzet: "));
let nastavakPlaniranja = confirm("zelite li nastaviti planirati izlet? ");


// izracun i usporedbe
let ukTrosak = cijenaUl * brojUl;
let preostalo = budzet - ukTrosak;
let budzetDovoljan = (budzet >= ukTrosak);
let budzetJednak = (budzet === ukTrosak);


// ispis rezultata
alert("Ime: " + ime + 
    "\nUkupan trosak: " + ukTrosak.toString() + " EUR" + 
    "\nPreostali iznos: " + preostalo.toString() + " EUR" + 
    "\nDovoljno novca: " + budzetDovoljan.toString() + 
    "\nTocan iznos: " + budzetJednak.toString() + 
    "\nNastavak planiranja: " + nastavakPlaniranja.toString());