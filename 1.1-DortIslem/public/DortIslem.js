/**
 * Örnek 1.1 Toplama, Çıkarma, Çarpma, Bölme Javascript işlemleri burada tutulur.
 */
function topla(){
	
	var firstNum = +document.getElementById("input-1").value;
	var secondNum = +document.getElementById("input-2").value;
	var sum = firstNum+secondNum;
	document.getElementById("id-1").innerHTML =sum;
	
}
function cikar(){
	
	var firstNum = +document.getElementById("input-1").value;
	var secondNum = +document.getElementById("input-2").value;
	var result = firstNum-secondNum;
	document.getElementById("id-1").innerHTML =result;
	}
function carp(){
	
	var firstNum = +document.getElementById("input-1").value;
	var secondNum = +document.getElementById("input-2").value;
	var result = firstNum*secondNum;
	document.getElementById("id-1").innerHTML =result;
}
function bol(){
	
	var firstNum = +document.getElementById("input-1").value;
	var secondNum = +document.getElementById("input-2").value;
	var result = firstNum/secondNum;
	document.getElementById("id-1").innerHTML =result;
}
function temizle(){
	
	document.getElementById("input-1").innerText = "";
	document.getElementById("input-2").innerText = "";
	document.getElementById("id-1").innerHTML ="sonuçlar burada tutulur";
}
