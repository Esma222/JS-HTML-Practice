/**
 * 
 */

const bilgiDizgesi= "Faktoriyel bilgisi burada gösterilir...";

 /** */
 function faktoriyel(){
	
	var deger = ~~document.getElementById("input-1").value;
	var faktoriyelSonucu=0;
	var degerSakla = deger;
	if(deger<0){
		alert("hatalı değer abicim🤷‍♀️🤦‍");
	}
	else if((deger == 0) || (deger == 1)){
		faktoriyelSonucu=1;
	}
	else{
		faktoriyelSonucu=deger;
		while(deger>2){
			deger =deger-1;
			faktoriyelSonucu = faktoriyelSonucu*deger;
		}
	}
	
	document.getElementById("input-2").value=degerSakla + " değerinin  faktoriyeli : "+faktoriyelSonucu;
	
 }
 function temizle(){
	document.getElementById("input-1").value= "";
	document.getElementById("input-2").value= bilgiDizgesi;
 }
 function sayfaYukle(){
	document.getElementById("input-2").value= bilgiDizgesi;
 }