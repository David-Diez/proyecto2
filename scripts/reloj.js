function Cero(i){
	if( i < 10){
	i= "0" + i;
	}
	return i;
				
}
function hora(){	
	var hoy = new Date();
	var h = Cero(hoy.getHours());
	var m = Cero(hoy.getMinutes());
	var s = Cero(hoy.getSeconds());
	document.getElementById('contenedor_hora').innerHTML = h+":"+m+":"+s;
	setInterval ( hora , 1000);
}
function fecha(){
	var mes = new Date();
	document.getElementById('fechames').innerHTML = mes;
	setInterval ( fecha, 1000);
}