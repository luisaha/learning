//Zuerst den Satz mit dem ersten Leerzeichen entfernt ausgeben und dann alle Leerzeichen in einem Satz entfernt ausgeben
let str = "Hallo ich bin ein Satz";

str = str.replace(" ","");
console.log(str);
str = str.replaceAll(" ","");
console.log(str);

console.log("--------------------------------");
//Was wenn wieder nur das erste Leerzeichen fehlen soll?

//Problem oben str als einzige Variable deklariert, die immer wieder verändert wird. 
//Aber nun brauchen wir wieder den String im Ausgangszustand.
// Daher string als Konstante deklarieren und leeren Behälter in dem immer wieder Neue Variante geschrieben wird.
const str2 = "Hallo ich bin der zweite Satz";
let varStr;
varStr = str2.replace(" ","");
console.log(varStr);
