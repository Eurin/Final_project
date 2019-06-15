var topic = [
	"介紹",
	"連假",
	"不上課",
	"上課",
	"校慶",
	"上課ˊˋ"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
	startDate.setMonth(startMonth-1, startDay);
	startDate.setHours(0);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
}
/*
var mon = prompt("Month", "");
var day = prompt("day", "");
setMonthAndDay(mon, day);
*/
setMonthAndDay(4, 1);