var ingresos=parseInt (prompt("Ingrese la cantidad de Ingresos"));
var costos =parseInt (prompt("Ingrese la cantidad de costos"));  //igual a gastos
var impuestos=parseInt (prompt("Ingrese el % de impuestos"));
var ganancia = (ingresos - costos) - ((ingresos - costos)*impuestos/100);
document.write("La ganancia obtenida es $"  +ganancia);
