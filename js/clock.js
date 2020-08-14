//accessing all the elements in js
	var hour=document.querySelector('.hour'),
	minute=document.querySelector('.minute'),
	second=document.querySelector('.second'),
	time=document.querySelector('.timezone');	
	//date function to get date value	
	setInterval(function() {
		var d=new Date();
		hour.innerText=d.getHours();
		minute.innerText=d.getMinutes();
		second.innerText=d.getSeconds();		
		if(hour.innerText>=12) {
			time.innerText="PM";
		}
	},1000);	