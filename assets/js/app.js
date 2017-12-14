$(document).ready(function(){

/*LOGO PRINCIPAL*/
$('#container1').fadeOut(1000);


/*PAGINA PRINCIPAL*/
$('#singUp').click(cambio);

function cambio() {
	$('#container2').fadeOut(900);
}

/*SING UP*/
	$('#bandera').click(function(){
		$('.dropdown-menu').change();
	});

/*DESHABILITAR EL BOTON*/
	$('#input').keypress(function() {
		console.log("press");

		var cantNum = $(this).val();
		var lengthNum = cantNum.length + 1;

		if (lengthNum ==  10) {
			$('#next1').removeAttr('disabled');
		} else {
			$('#next1').attr('disabled', 'disabled');
		}
  });

	$('#container4').hide();
	$('#container5').hide();
	$('#container6').hide();

	$('#next').click(function(next){
		alert('Tú código: LAB-551');

	$('#container3').fadeOut(700);
	})

		$(next).click(function(){
			$('#container4').fadeIn(700);
		})

/*
*CONTAINER 4
*VERIFICANDO
*/

	$('#codigo1').keypress(function() {
		console.log("press");

		var cantNum = $(this).val();
		var lengthNum = cantNum.length + 1;

		if (lengthNum ==  3) {
			$('#boton').removeAttr('disabled');
		} else {
			$('#boton').attr('disabled', 'disabled');
		}
  });

/*
*CAMBIANDO PAGINA
*/

	$('#boton').click(function(next){
		$('#container4').fadeOut(700);
	})

 	$(next).click(function(){
 			$('#container6').hide();
			$('#container5').show();
		})


	/*CONTAINER 5*/


/*
*HABILITANDO EL BOTON CON EL CHECKBOX
*/

	$('#check').click(function() {
		if ($(this).is(':checked')) {
			$('#btn3').removeAttr('disabled');
		} else {
			$('#btn3').attr('disabled', 'disabled');
		}
  });

/*
* ULTIMA PAGINA
*/

	$('#btn3').click(function(next){
		$('#container5').fadeOut(700);
	})

	$(next).click(function(){
		$('#container6').fadeIn(700);
	})





})