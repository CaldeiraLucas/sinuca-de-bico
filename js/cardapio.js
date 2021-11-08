$(function() {
	$('#bebi').hide()
	$('#drin').hide()
	$('#sobr').hide()
})

$('.sanduiches').on('click', function() {	
	$('.bebidas').removeClass('active')
	$('.drinks').removeClass('active')
	$('.sobremesas').removeClass('active')
	$('#sand').show()
	$('#bebi').hide()
	$('#drin').hide()
	$('#sobr').hide()
	$('.sanduiches').addClass('active')
})

$('.bebidas').on('click', function() {
	$('.sanduiches').removeClass('active')
	$('.drinks').removeClass('active')
	$('.sobremesas').removeClass('active')
	$('#bebi').show()
	$('#sand').hide()
	$('#drin').hide()
	$('#sobr').hide()
	$('.bebidas').addClass('active')
})

$('.drinks').on('click', function() {
	$('.sanduiches').removeClass('active')
	$('.bebidas').removeClass('active')
	$('.sobremesas').removeClass('active')
	$('#drin').show()
	$('#sand').hide()
	$('#bebi').hide()
	$('#sobr').hide()
	$('.drinks').addClass('active')
})

$('.sobremesas').on('click', function() {
	$('.sanduiches').removeClass('active')
	$('.bebidas').removeClass('active')
	$('.drinks').removeClass('active')
	$('#sobr').show()
	$('#sand').hide()
	$('#bebi').hide()
	$('#drin').hide()
	$('.sobremesas').addClass('active')
})