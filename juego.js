var jugador=1;
var tablero=new Array(3);

tablero[0]=new Array(3);
tablero[1]=new Array(3);
tablero[2]=new Array(3);

function clic(x,y) {
	if(document.getElementById("cuadro-"+x+"."+y).disabled == false) {
		if(jugador==1) {
			document.getElementById("cuadro-"+x+"."+y).innerHTML="X";
			document.getElementById("cuadro-"+x+"."+y).style.color="blue";
			document.getElementById("cuadro-"+x+"."+y).disabled = true;
			tablero[x][y]="X";
			validar();
			jugador=2;
			document.getElementById("turno").innerHTML="Juega la O";
			document.getElementById("turno").style.color="red";
		} else {
			document.getElementById("cuadro-"+x+"."+y).innerHTML="O";
			document.getElementById("cuadro-"+x+"."+y).style.color="red";
			document.getElementById("cuadro-"+x+"."+y).disabled = true;
			tablero[x][y]="O";
			validar();
			jugador=1;
			document.getElementById("turno").innerHTML="Juega la X";
			document.getElementById("turno").style.color="blue";
		}
	}
}


function validar() {
	if(tablero[0][0] == 'X' && tablero[0][1] == 'X' && tablero[0][2] == 'X') alert("La X Gano");
	if(tablero[1][0] == 'X' && tablero[1][1] == 'X' && tablero[1][2] == 'X') alert("La X Gano");
	if(tablero[2][0] == 'X' && tablero[2][1] == 'X' && tablero[2][2] == 'X') alert("La X Gano");
	if(tablero[0][0] == 'O' && tablero[0][1] == 'O' && tablero[0][2] == 'O') alert("La O Gano");
	if(tablero[1][0] == 'O' && tablero[1][1] == 'O' && tablero[1][2] == 'O') alert("La O Gano");
	if(tablero[2][0] == 'O' && tablero[2][1] == 'O' && tablero[2][2] == 'O') alert("La O Gano");
	
	if(tablero[0][0] == 'X' && tablero[1][0] == 'X' && tablero[2][0] == 'X') alert("La X Gano");
	if(tablero[0][1] == 'X' && tablero[1][1] == 'X' && tablero[2][1] == 'X') alert("La X Gano");
	if(tablero[0][2] == 'X' && tablero[1][2] == 'X' && tablero[2][2] == 'X') alert("La X Gano");
	if(tablero[0][0] == 'O' && tablero[1][0] == 'O' && tablero[2][0] == 'O') alert("La O Gano");
	if(tablero[0][1] == 'O' && tablero[1][1] == 'O' && tablero[2][1] == 'O') alert("La O Gano");
	if(tablero[0][2] == 'O' && tablero[1][2] == 'O' && tablero[2][2] == 'O') alert("La O Gano");
	
	if(tablero[0][0] == 'X' && tablero[1][1] == 'X' && tablero[2][2] == 'X') alert("La X Gano");
	if(tablero[0][0] == 'O' && tablero[1][1] == 'O' && tablero[2][2] == 'O') alert("La O Gano");
	
	if(tablero[0][2] == 'X' && tablero[1][1] == 'X' && tablero[2][0] == 'X') alert("La X Gano");
	if(tablero[0][2] == 'O' && tablero[1][1] == 'O' && tablero[2][0] == 'O') alert("La O Gano");
}

function inicio() {
	for(let x=0;x<3;x++) {
		for(let y=0;y<3;y++) {
			document.getElementById("cuadro-"+x+"."+y).innerHTML="";
			document.getElementById("cuadro-"+x+"."+y).style.color="black";
			document.getElementById("cuadro-"+x+"."+y).disabled = false;
			tablero[x][y]="";
		}
	}
}