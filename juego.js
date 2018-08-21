var jugador=1;
var tablero=new Array(3);

tablero[0]=new Array(3);
tablero[1]=new Array(3);
tablero[2]=new Array(3);

function clic(x,y) {
    if(jugador==1) {
		document.getElementById("cuadro-"+x+"."+y).innerHTML="X";
		document.getElementById("cuadro-"+x+"."+y).style.color="blue";
		document.getElementById("cuadro-"+x+"."+y).disabled = true;
		tablero[x][y]="X";
		validar();
		jugador=2;
    } else {
		document.getElementById("cuadro-"+x+"."+y).innerHTML="O";
		document.getElementById("cuadro-"+x+"."+y).style.color="red";
		document.getElementById("cuadro-"+x+"."+y).disabled = true;
		tablero[x][y]="O";
		validar();
		jugador=1;
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
