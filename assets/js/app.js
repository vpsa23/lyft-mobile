$(document).ready(function(){

/*LOGO PRINCIPAL*/
$('#container1').fadeOut(1000);


/*PAGINA PRINCIPAL*/
$('#singUp').click(cambio);

function cambio() {
	$('#container2').fadeOut(900);
	$('#container3').show();
}

/*SING UP*/
	$('#bandera').click(function(){
		$('.dropdown-menu').change();
	});

/*DESHABILITAR EL BOTON*/
	$('#next').click(function(){
		alert('Tú código: LAB-551');

		$('#container3').fadeOut(800);
	})









})