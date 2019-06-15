var count;
$(document).ready(function(){
    count = 0;
    $("#button").click(function(){
        count++;
        $("#counter").text(count);
    });
});