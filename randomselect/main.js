$(document).ready(function() {
	$("input").click(function(){
		var MAX_LENGTH = $("#choices li").length;
		var randomnumber = Math.floor(Math.random() * MAX_LENGTH);
		$("H1").text($("#choices li").eq(randomnumber).text());
        $("#choices_src").attr("src", "randomselect/" + randomnumber + ".jpg");
	});
});