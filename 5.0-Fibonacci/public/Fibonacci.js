/**
 * 
 */
const bilgiSatırı = "bilgi Satırı Burada Gözlenir..";

 /** */
function fibonacci(){
	var birOnce, ikiOnce, Fibonacci;
	var print="1, 1";
	var donguDenetim;
	var fibSayıAdedi = +document.getElementById("input-1").value;
	//alert("önce içini doldur");
	birOnce=1;ikiOnce=1;Fibonacci=0;
	if(fibSayıAdedi<2){
		alert("değeriniz 2'den büyük olmalıdır. İlk iki eleman aşağıdaki gibidir.");
	}else{
		for(donguDenetim=0; donguDenetim< fibSayıAdedi-2; donguDenetim++){
			Fibonacci = birOnce+ikiOnce;
			ikiOnce=birOnce;
			birOnce=Fibonacci;
			print = print+", "+ Fibonacci;
		}
	}
	
	document.getElementById("p-1").innerHTML=print;
	
	
} 

/** */
function temizle(){
	document.getElementById("input-1").value ="";
	document.getElementById("p-1").innerHTML = bilgiSatırı;
	document.getElementById("button-2").disabled = true;
	
}

/** */
function veriGirisi(){
	if(document.getElementById("button-2").disabled)
	   document.getElementById("button-2").disabled = false;
	
}

/** */
function sayfaYukle(){
	
	document.getElementById("p-1").innerHTML = bilgiSatırı;
	document.getElementById("button-2").disabled = true;
}
