$(function () {
	
	// フロートベッダーメニュー
	var targetHeight = $('.js-float-menu-target').height();
	$(window).on('scroll', function() {
		$('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
	});
	
	// SPメニュー
	$('.js-toggle-sp-menu').on('click', function () {
		$(this).toggleClass('active');
		$('.js-toggle-sp-menu-target').toggleClass('active');
	});
	
	// SPメニュー　項目をクリックしたら自動的に閉じる
	$('.js-toggle-sp-menu-item').on('click', function () {
		$('.js-toggle-sp-menu').toggleClass('active');
		$('.js-toggle-sp-menu-target').toggleClass('active');
	});
});

/*<nav class="nav-menu js-toggle-sp-menu-target">
		<ul class="menu">
			<li class="menu-item"><a href="" class="menu-link">TOP</a></li>
			<li class="menu-item"><a href="#news" class="menu-link">NEWS</a></li>
			<li class="menu-item"><a href="#about" class="menu-link">ABOUT</a></li>
			<li class="menu-item"><a href="#staff" class="menu-link">STAFF</a></li>
			<li class="menu-item"><a href="#cource" class="menu-link">COURCE</a></li>
			<li class="menu-item"><a href="#contact" class="menu-link">CONTACT</a></li>
		</ul>
	</nav>*/