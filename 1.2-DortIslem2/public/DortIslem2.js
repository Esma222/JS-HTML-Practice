/**
 * Örnek 1.1 Toplama, Çıkarma, Çarpma, Bölme Javascript işlemleri burada tutulur.
 */
const toplaSabit =1;
const cıkarSabit=2;
const carpSabit=3;
const bolSabit=4;

function islem(islemKodu){
	var firstNum = +document.getElementById("input-1").value;
	var secondNum = +document.getElementById("input-2").value;
	switch(islemKodu){
	   case toplaSabit:
	     document.getElementById("id-1").innerHTML =firstNum+secondNum;
	     break;
	   case cıkarSabit:
		document.getElementById("id-1").innerHTML =firstNum-secondNum;;
		break;
	   case carpSabit:
		document.getElementById("id-1").innerHTML =firstNum*secondNum;
		break;
	   case bolSabit:
		document.getElementById("id-1").innerHTML =firstNum/secondNum;
		break;
	   default:
			alert("henüz tamamlanmamış işlem");
		
	   }
}

function temizle(){
	
	document.getElementById("input-1").innerText = "";
	document.getElementById("input-2").innerText = "";
	document.getElementById("id-1").innerHTML ="sonuçlar burada tutulur";
}
