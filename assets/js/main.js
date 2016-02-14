;(function(){

	var animation;

	$.fn.extend({
	    animateCss: function (animationName, clear) {
	    	clear = clear || false;
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        if(clear){
	        	$(this).removeClass('animated ' + animationName);
	        }else{
	        	$(this).addClass('animated ' + animationName).one(animationEnd, function() {
		            $(this).removeClass('animated ' + animationName);
		        });
	        }	        
	    }
	});

	animateButton();

	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
	
	$('#menuToggle').mouseenter(function(){
		clearButtonAnimation();
	}).mouseleave(function(){
		animateButton();
	})
	

	function animateButton(){
		animation = setInterval(function(){
			$('#menuToggle').animateCss('tada');
			console.log('animate');
		}, 5000)
	}
	function clearButtonAnimation(){
		clearInterval(animation);
		console.log('clear');
	}

})(jQuery)