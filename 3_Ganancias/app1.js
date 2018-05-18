var income = parseInt(prompt("Igrese cantidad de Ingresos"));
var cost = parseInt(prompt("Ingrese cantidad de Costo"));
var taxPercent=parseInt(prompt("Ingrese % de Impuesto"));

var gross = (income-cost)-((income-cost)*taxPercent/100);
document.write("La ganacia total es $" + gross);
