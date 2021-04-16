var vreme=document.getElementById("vreme");
var slike=document.getElementsByClassName("box");
var divZaBodove=document.getElementById("divZaBodove");
divZaBodove.innerHTML="0";
bodovi=0;
var tiktak=setInterval(prikaziKrticu, 1000);
slike[Math.floor(Math.random() * 9)].src="mole.png";
var interval=setInterval(smanjiVreme, 1000);

vreme.innerHTML="60";
klik=0;
function provera(a)
{
	if (klik==1) return false;
	//alert(a.src);
	if(a.src.indexOf("mole.png")>0)bodovi++;
	else bodovi--;
	divZaBodove.innerHTML=bodovi;
	klik=1;
}
	
function smanjiVreme()
{
	var staroVreme=parseInt(vreme.innerHTML);
	if(staroVreme<=10)
	{
		vreme.style.color="red";
	}
	if(staroVreme==0)
	{
		clearInterval(tiktak);
		clearInterval(interval);
		document.write("<h1>Kraj<br>Broj bodova: "+bodovi+"</h1>");
	}
	var novoVreme=staroVreme-1;
	vreme.innerHTML=novoVreme;
}
function prikaziKrticu()
{
	
	for(var i=0;i<slike.length;i++)
		slike[i].src="noImage.png";
	slike[Math.floor(Math.random() * 9)].src="mole.png";
	klik=0;
}
