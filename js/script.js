$('.dropdown-menu>li>a').hover(
	function(){
		$(this).siblings('ul').show();
	},
	function(){
		$(this).siblings('ul').hide();
	}
);

$("#scroll_top").click(function(){
	$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
});

var topm = document.documentElement.clientHeight / 2 - $('.float-menu').height() / 2;
$('.float-menu').css('top', topm);

$('[popup-target]').click(function(e) {
	var el = $(this);
	var target = el.attr('popup-target');

	$('.overlay').fadeIn(200, function(){
		$('.popup.'+target).fadeIn(200);
		var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
		var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
		left = left - 51;
		$('.popup.'+target).css('top', top).css('left', left);
	})
	
	
	return false;
});

$('.overlay, .close1').click(function(e) {
	var popup = $('.popup:visible');
	popup.fadeOut(200, function(){
		$('.overlay').fadeOut(200);
	});
	return false;
});

function keyExit(e){
	if(e.keyCode == 27){

		var popup = $('.popup:visible');
		popup.fadeOut(200, function(){
			$('.overlay').fadeOut(200);
		});				
			
	}
}

addEventListener("keydown", keyExit);

$('.send_mess').click(function(){
	var name = $('.usagr-pp input[name = "name"]').val();
	var phone = $('.usagr-pp input[name = "phone"]').val();
	var mess = $('.usagr-pp textarea').val();
	var flag = 0;
	
	$('.usagr-pp input[name = "name"]').css({"border":"1px solid #e9e9ea"});
	$('.usagr-pp input[name = "phone"]').css({"border":"1px solid #e9e9ea"});
	
	if(name == ""){
		$('.usagr-pp input[name = "name"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(phone == ""){
		$('.usagr-pp input[name = "phone"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(flag == 0){
		$.post('/send.php', {NAME: name, PHONE: phone, MESS: mess}, function(data){
			alert('Спасибо за заявку! В ближайшее время мы вам перезвоним.');
			$('.usagr-pp input[name = "name"]').val("");
			$('.usagr-pp input[name = "phone"]').val("");
			$('.usagr-pp textarea').val("");
			var popup = $('.popup:visible');
			popup.fadeOut(200, function(){
				$('.overlay').fadeOut(200);
			});			
		});
	}
});

$('.float-menu__ul > li > a').click(function(){
	$('.float-menu__ul > li > a + ul').hide();
	$(this).siblings('ul').show();
});

$('#carousel-example-generic').on('slid.bs.carousel', function () {
	var top_cap = $(".slider").height() / 2 - $(".carousel-inner .active .carousel-caption").height() / 2;
	$(".carousel-inner .active .carousel-caption").css('top', top_cap);	
});

$(function(){
	var item = 1;
	$(".carousel-caption").each(function(e){
		if(item == 1){
			var top_cap = $(".slider").height() / 2 - $(this).height() / 2;
			$(this).css('top', top_cap);
		}
		item++;
	});
});

var topm = document.documentElement.clientHeight / 2 - $('.left-float-menu').height() / 2;
$('.left-float-menu').css('top', topm);
/*
var flag = 0;
$('.mobile__menu').click(function(){
	
	if(flag == 0){
		$('.top-menu_wrapper__index').show();
		flag = 1;
	}else if(flag == 1){
		$('.top-menu_wrapper__index').hide();
		flag = 0;		
	}
});
*/
$('.close__menu').click(function(){
    $('.top-menu_wrapper__index').animate({left: -310}, 300);
});

$('.mobile__menu').click(function(){
    $('.top-menu_wrapper__index').animate({left: 0}, 300);
});