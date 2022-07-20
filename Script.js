// JavaScript source code
function validateForm(){
	var Name= document.getElementById('fname').value
	var email= document.getElementById('email').value
	var dob= document.getElementById('dob').value
	var interest= document.getElementById('interest').value
	var interest= interest.options[interest.selectedIndex].value
	var individual= document.getElementById('individual').checked
	var organization= document.getElementById('organization').checked
	var aboutinfo= document.getElementById('aboutinfo').value
	console.log(Name)
	try{
		if(!Name) throw "Empty Name field"
		if(!email) throw "Empty email field"
		if(!dob) throw "Empty dob field"
		if(!interest||interest=='') throw "Empty interest field"
		if(!individual) throw "Empty individual field"
		if(!aboutinfo) throw "Empty aboutinfo field"
		var qs="java.html?fname="+Name+"&email="+email+"&dob="+dob+"&interest="+interest+"&individual="+individual+"&organization="+organization+"&aboutinfo="+aboutinfo
		window.open(qs)
	}
	catch(err){
		window.alert(error)
	}
	
}