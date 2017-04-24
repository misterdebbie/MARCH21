var today = new Date();
//var reality = today.toDateString();
var theNumber = today.getDate();
var reality = today.getDay();
var mmmonth = today.getMonth();
var theYear = today.getFullYear();
var dList = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var mList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var el = document.getElementById('ddate');
el.textContent = dList[reality-1] + ', '+
 mList[mmmonth] + ' ' + theNumber + ', ' + ' ' + theYear + '!';
