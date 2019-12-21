$(document).ready(function() {

		// alert("hello");
		var text = '';
		var BPA = ["BPA/01011/GHBGN0148222","BPA/01011/GHBGN0724222",
					"BPA/01011/GJAVT2303222","BPA/01011/GJAVT2858222",
					"BPA/01011/GJAVT3205222","BPA/01011/GJAWJ3611222",
					"BPA/01011/GJAWJ4209222","BPA/01011/GJAWJ4626222",
					"BPA/01011/GJAWJ5035222","BPA/01011/GJAWJ5539222",
					"BPA/01011/GJAWJ5816222","BPA/01011/GJAWK0056222",
					"BPA/01011/GJAWK0330222","BPA/01011/GJAWK0942222",
					"BPA/01011/GJAWM1633222",];
		var name = ["MAMUN AL","ISLAM MD RASHIDUL","HASAN JOWEL","HOQUE AMDADUL",
					"RAJU MD SAIPUL ISLAM", "ALAM SHAHIN", "SIKDER NAZRUL",
					"BEPARI SUJON", "SARDAR MASUM", "RAHMAN MD HAFIZUR", "ZAMAN MONIROS",
					"AKON MAHABUB", "BEPARY RAJIB", "RANA SOHEL", "AHMED RAJU"];

		var ppno = ["BM0499966","BL0263975","BM0072462", "BJ0649114",
					"BJ0456549","BC0802661","BK0731276","BM0079854",
					"BM0072706", "BA0708265","BJ0753912","BL0260666",
					"BJ0860655","BL0260670","AG2494407"];

		for (var i = 0; i < BPA.length; i++) {
			text += '<div class="rowhover rowsec1"><div id="serial" class="commonrow one"><p class="one">'+ 
			(i+1)+'</p></div><div id="bpano"  class="commonrow two"><p class="two">'+BPA[i]
			+'</p></div><div id="ttno" class="commonrow three"><p class="three">'+'1117171-T'
			+'</p></div><div id="name" class="commonrow four"><p class="four">'+name[i]
			+'</p></div><div id="ppno" class="commonrow five"><p class="five">'+ppno[i]
			+'</p></div><div id="status" class="commonrow six"><p id="status" class="six">'+'CETAK'
			+'</p></div>';
		}
		document.getElementById("push").innerHTML = text;

});

/*

<div class="rowhover rowsec1">
    				<div id="serial" class="commonrow one">
    					<p class="one">1</p>
    				</div>
    				<div id="bpano"  class="commonrow two">
    					<p class="two">BPA/01011/GHBGN0148222</p>
    				</div>
    				<div id="ttno" class="commonrow three">
    					<p class="three">1117171-T</p>
    				</div>
    				<div id="name" class="commonrow four">
    					<p class="four">MAMUN AL</p>
    				</div>
    				<div id="ppno" class="commonrow five">
    					<p class="five">BM0499966</p>
    				</div>
    				<div id="status" class="commonrow six">
    					<p id="status" class="six">CETAK</p>
    				</div>
    			</div>
*/