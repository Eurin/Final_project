$(document).ready(function(){
	$("#box1").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
	
	var topicCount = topic.length;
	var dayUnit = 24 * 60 * 60 * 1000;
	
	for (var i = 0; i < topicCount; i++)
	{
		$("#box1").append("<tr>");
		$("#box1").append("<td>" + (i + 1) + "</td>");
		$("#box1").append("<td>" + (new Date(startDate.getTime()+7*i*dayUnit)).toLocaleDateString().slice(5) + "</td>");
		$("#box1").append("<td>" + topic[i] + "</td>");
		$("#box1").append("</tr>");
	}
});
//(new Date(startDate.getTime()+7*i*dayUnit)).toLocaleDateString().slice(5)