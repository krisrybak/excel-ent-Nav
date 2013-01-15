$(document).ready(function(){
	var navFlag;
	addDock();
	addGroups();
	selectHomeNav();
	$('.navigation h2 a').click(function() {
		var parentLi = $(this).parents('li');
		resetNav();
		clearFirstLevelSelection();
		selectFirstLevelNav(parentLi);
		showSubNav(this);
		removeSpan();
	});
	$('.navigation h3 a').click(function(){
		hideSubSubNav(this);
		showSubSubNav(this);
		addHighlight(this);
	});
});

function resetNav() {
	$('li.selected ul li h6').show();
	$('li.selected ul li ul li').show();
	$('li.current h3').show();
	$('li.selected ul li.group').show();
	$('li.current').removeClass('current');
}

function selectFirstLevelNav(parentLi) {
	$(parentLi).addClass('selected');
}

function addHighlight(selected) {
	var itemText = $(selected).text();
	var headingText = $('li.selected h2 a').text(); 
	$('li.selected h2 a').append(" <span>"+ itemText+"</span>");
	$('li.selected h2 a').hide().fadeIn();
}

function hideSubSubNav(selected) {
	$('.selected ul li h6').hide();
	$(selected).parent('h3').parent('li').siblings().hide();
	$(selected).parent('h3').hide();
	$(selected).parent('h3').parent('li').addClass('current');
	$('.current h6').show();
	$(selected).parent('h3').parent('li').parent('ul').parent('li').siblings().hide();
}

function hideSubNav() {
	$('.selected ul').hide();
}

function removeSpan() {
	$('.navigation h2 a span').remove();
}

function showSubSubNav(selected) {
	$(selected).parent('h3').next('ul').show();
	$(selected).parent('h3').next('ul').children('li').children('ul').show();
}

function showSubNav(selected) {
	$(selected).parent('h2').next('ul').show();
	$(selected).parent('h2').next('ul').children('li').children('ul').show();
}

function selectHomeNav() {
	$('.navigation ul li:first-child').not('.navigation ul li ul li').addClass('selected');
	$('.selected').children('ul').show();
	$('.selected').children('ul').children('li').children('ul').show();
}
function clearFirstLevelSelection() {
	hideSubNav();
	$('.navigation ul li').removeClass('selected');
}
function addDock() {
	$('.navigation').append("<div class=\"dock\">Dock</div>");
}

function addGroups() {
	$('.navigation h6').parent('li').addClass('group');
}