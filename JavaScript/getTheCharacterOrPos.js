//Ausgabe des Zeichens, dass genau in der Mitte liegt.
const str = "Hallo ich bin ein Satz";

//Anzahl Zeichen in Satz nehmen und durch 2 teilen
//Achtung length ist keine Funktion, also ohne () schreiben
var position = str.length/2;

//string an Stelle des Ergebnisses ausgeben
console.log(str.charAt(position));
console.log("------------------------");

//Was wenn man wissen will an welcher Stelle ein bestimmtes Zeichen steht?
console.log(str.indexOf("S"));
//Achtung es wird zwischen groß und kleinschreibung unterschieden

//An welcher Position steht ein bestimmtes Wort?
console.log(str.indexOf("bin"));

//Letze Position eines Buchstabens
console.log(str.lastIndexOf("i"));
