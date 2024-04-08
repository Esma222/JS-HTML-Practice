/**
 * 
 */

 function karsilastir(){
	
	var firstN= +document.getElementById("input-1").value;
	var secondN= +document.getElementById("input-2").value;
	var gecici;
	
	/**Karşılaştırma Fonksiyonu ilk hali */
	/*if(firstN>secondN){
		document.getElementById("p-1").innerHTML = "sonuç: "+firstN+">"+secondN;
	}
	else {
		if(firstN<secondN){
		document.getElementById("p-1").innerHTML = "sonuç: "+secondN+">"+firstN;
	    }
	     else{
			document.getElementById("p-1").innerHTML = "sonuç: "+secondN+"="+firstN;
			}
	     
	}*/
	
	/**İkinci karşılaştırma yöntemi */
	/*if(firstN>secondN){
		gecici = "sonuç: "+firstN+">"+secondN;
	}
	else 
	   gecici = (firstN<secondN) ? "sonuç: "+secondN+">"+firstN : "sonuç: "+secondN+"="+firstN;**/
	   
	   gecici = (firstN>secondN)?"sonuç: "+firstN+">"+secondN : (firstN<secondN)?"sonuç: "+secondN+">"+firstN : "sonuç: "+secondN+"="+firstN;
	
	document.getElementById("p-1").innerHTML = gecici;
	
 }
 function temizle(){
	document.getElementById("input-1").value = "";
	document.getElementById("input-2").value = "";
	document.getElementById("p-1").innerHTML = "sonuç";
	
 }