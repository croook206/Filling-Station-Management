			/* ----------------------------- login start script ----------------------------- */
		function checkl(){
                var email=document.getElementById('eml');
                var pass=document.getElementById('passl');


                if(email.value==''){
                    document.getElementById('a').innerHTML='>>Please enter your email';
                    email.focus()
                    return false;
                }
                else{
                document.getElementById('a').innerHTML='';
                }

                if(pass.value==''){
                    document.getElementById('b').innerHTML='>>Please enter your Password';
                    pass.focus();
                    return false;
                }
                else{
                document.getElementById('b').innerHTML='';
                }
            }
		function my_pass(){
				var y = document.getElementById("passl");
				if (y.type === "password") {
					y.type = "text";
				} else {
					y.type = "password";
				}
			}
			
		function refreshl(){
				document.getElementById('eml').value = '';
				document.getElementById('passl').value = '';
			}
			
			/* ----------------------------- login End script ----------------------------- */
			
			
				/* ----------------------------- admin login start script ----------------------------- */
		function checkla(){
                var emaila=document.getElementById('emla');
                var passa=document.getElementById('passla');


                if(emaila.value==''){
                    document.getElementById('p1').innerHTML='>>Please enter your email';
                    emaila.focus()
                    return false;
                }
                else{
                document.getElementById('p1').innerHTML='';
                }

                if(passa.value==''){
                    document.getElementById('p2').innerHTML='>>Please enter your Password';
                    passa.focus();
                    return false;
                }
                else{
                document.getElementById('p2').innerHTML='';
                }
            }
		function my_passadmin(){
				var admi = document.getElementById("passla");
				if (admi.type === "password") {
					admi.type = "text";
				} else {
					admi.type = "password";
				}
			}
			
		function refreshlaa(){
				document.getElementById('emla').value = '';
				document.getElementById('passla').value = '';
			}
			
			/* ----------------------------- admin login End script ----------------------------- */
			
			
			
			/* ----------------------------- forget_pass start script ----------------------------- */
		function checkforget(){
				var forget=document.getElementById('emforget');
				if(forget.value==''){
                    document.getElementById('a3').innerHTML='>>Please enter your email';
                    forget.focus()
                    return false;
                }
                else{
                document.getElementById('a3').innerHTML='';
                }
			}	
			
			
			
			/* ----------------------------- forget_pass end script ----------------------------- */
			
			/* ----------------------------- registration start script ----------------------------- */
		function checkr(){
				var namee=document.getElementById('fnr');
				var emaill=document.getElementById('emr');
				var password=document.getElementById('passr');
                var repassword=document.getElementById('repassr');
                var Address=document.getElementById('Addressr');
				var number=document.getElementById('numberr');


                if(namee.value==''){ /* namee start */
                    document.getElementById('aa').innerHTML='>>Please enter your Name';
                    namee.focus()
                    return false;
                }
                else{
                document.getElementById('aa').innerHTML='';
                }
				if((namee.value.length < 4) || (namee.value.length > 60)){
					document.getElementById('aa').innerHTML='>>Name length start from 4 to 60 characters';
                    namee.focus()
                    return false;
				}
				if(!isNaN(namee.value)){
                    document.getElementById('aa').innerHTML='>>Without characters are not allowed';
                    namee.focus()
                    return false;
                }
				
				if(emaill.value==''){ /* emaill start */
                    document.getElementById('bb').innerHTML='>>Please enter your Email';
                    emaill.focus()
                    return false;
                }
                else{
                document.getElementById('bb').innerHTML='';
                }
				if(emaill.value.indexOf('@') <= 0){ 
                    document.getElementById('bb').innerHTML='>> " @ " of position invalid';
                    emaill.focus()
                    return false;
                }
				if((emaill.value.charAt(emaill.value.length-4)!= '.') && (emaill.value.charAt(emaill.value.length-3)!= '.')){
					document.getElementById('bb').innerHTML='>>Provide valid email address';
                    emaill.focus()
                    return false;
				}
				if(number.value==''){ /* number start */
                    document.getElementById('cc').innerHTML='>>Please enter your phone number digits';
                    number.focus()
                    return false;
                }
				/* if(isNaN(number.value)){ 
                    document.getElementById('cc').innerHTML='>>Please enter digits only, no characters';
                    number.focus()
                    return false;
                } */
				if((number.value.length < 11) ||(number.value.length > 20)){ 
                    document.getElementById('cc').innerHTML='>>Number length within 11 to 20 digits';
                    number.focus()
                    return false;
                }
                else{
                document.getElementById('cc').innerHTML='';
                }	
				
                if(password.value==''){ /* password start */
                    document.getElementById('c').innerHTML='>>Please enter your Password';
                    password.focus()
                    return false;
                }
                else{
                document.getElementById('c').innerHTML='';
                }
				
				
				if(password.value.length < 5){
					document.getElementById('c').innerHTML='>>Password must at least 5 characters';
                    password.focus();
                    return false;
                }
                
				if(repassword.value==''){ /* repassword start */
                    document.getElementById('d').innerHTML='>>Please enter your Password';
                    repassword.focus()
                    return false;
                }
                else{
                document.getElementById('d').innerHTML='';
                }
				
				if(password.value != repassword.value){
                document.getElementById('d').innerHTML='>>Not match password';
                repassword.focus()
                return false;
                }
                else{
                document.getElementById('d').innerHTML='';
                }
				
				if(Address.value==''){ /* Address start */
                    document.getElementById('e').innerHTML='>>Please enter your Address';
                    Address.focus()
                    return false;
                }
                else{
                document.getElementById('e').innerHTML='';
                }
				if((Address.value.length < 10) || (Address.value.length > 100)){ 
                    document.getElementById('e').innerHTML='>>Address length within 10 to 100 characters';
                    Address.focus()
                    return false;
                }
				
            }
			
			function myview_pass() {
					var x = document.getElementById("passr");
					if (x.type === "password") {
						x.type = "text";
					} else {
						x.type = "password";
					}
				}
			
			function refreshr(){
				document.getElementById('fnr').value = '';
				document.getElementById('emr').value = '';
				document.getElementById('passr').value = '';
				document.getElementById('repassr').value = '';
				document.getElementById('Addressr').value = '';
				document.getElementById('numberr').value = '';
			}
			/* ----------------------------- registration End script ----------------------------- */
			
			
			
			
			
			
			
			
			
			