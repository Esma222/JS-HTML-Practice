/**
 * Örnek 1 javascript işlevleri burada bulunur
 */

 function topla() {
	alert("evet şu an topla işleminin içindeyiz");
	var firstNum = ~~document.getElementById("input-1").value;
	var secondNum = ~~document.getElementById("input-2").value;
	var toplam;
	
	toplam = firstNum + secondNum;
	document.getElementById("p-1").innerHTML= toplam;
 }