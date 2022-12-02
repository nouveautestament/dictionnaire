


fs = require("fs")
texte = fs.readFileSync("./baillyok5.htm","utf8").split("\n")


ar = []

for(x = 0 ; x!= texte.length ; x++)
{
	line = x+1
	if (texte[x] != "")
	{
		
		mot = texte[x].split(/	/)[0]
		ar[line] = mot
		
		
		//console.log(texte[x])
		texte[x] = texte[x].replace(mot+"	","")
		//console.log(texte[x])
		//console.log()
		fs.writeFileSync(line+".js","lar["+line+"]=`"+texte[x]+"`","UTF8")
		
	}
	
}
 ar2 = JSON.stringify(ar)

 
 
fs.writeFileSync("array.js",ar2,"UTF8")
 
//console.log(texte)

//aa = lzw_encode(texte)
//console.log(aa)
//console.log(lzw_decode(aa))
