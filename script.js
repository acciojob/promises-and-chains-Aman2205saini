//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
	var name=document.getElementById("name").value
	var age=document.getElementById("age").value

	

	const ageValidation=()=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				if(parseInt(age)>=18){
				resolve(`Welcome, ${name} You can vote`)
			}else{
				reject(`Oh sorry ${name} You aren't old enough`)
			}
			},4000)
			
		}				   
	}
	ageValidation()
	    .then(messege=>(alert(messege)))
	    .catch(messege=>(alert(messege)))
})
