
var name=prompt ("Ingresa tu primer Nombre y apellido");

var firstInitial= name.slice(0,1);
var secondPosition=name.indexOf(" ") +1;
var secondInitial=name.slice(secondPosition,secondPosition+1);

/*
var firsMayus=firtsInitial.ToUpperCase();
var secondMayus=secondInitial.ToUpperCase();
document.write("Tus Iniciales son: "+ firsMayus+secondMayus );
*/

//var iniciales = firtsInitial.toUpperCase() + secondPosicion.toUpperCase();

document.write("Tus Iniciales son: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());
