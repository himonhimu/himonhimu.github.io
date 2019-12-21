$(document).ready(function() {

	function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
var nextclick = document.getElementById("nextpage");

nextclick.addEventListener('click', () => {
	var getText = document.getElementById("maintext").value;
			//getText.value.toUpperCase();

		if (getText == "") {
			alert("Sila isikan maklumat berikut.");
		}else if (getText == "1117171-T") {
			//alert(getText);
			location.href = "secondpage.html";
		}else{
			//alert("no match found");
			
			$("#caution").css("display", "block");

			//Rekod Tidak Dijumpai
		}
     
   
  });

$('#maintext').keyup(function(){
        $(this).val($(this).val().toUpperCase());
    });


startTime();
});