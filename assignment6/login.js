function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
   }
	return params;
}

window.onload = loginLoad;
function loginLoad(){
  var loginpage = document.getElementById("myLogin");
  loginpage.onsubmit = checkLogin; 
  // วิธีใช้ getParams()
  var parameter = getParams();
  console.log(parameter["username"]);
  console.log(parameter["password"]);


}

function checkLogin(){
  var parameter = getParams();
  var userName = document.forms["myLogin"]["username"]
  var passWord = document.forms["myLogin"]["password"]


  if(parameter["username"] == userName.value && parameter["password"] == passWord.value){
	  alert("Login Success!")
  }
  else{
	  alert("Wrong! Username or Password")
	  return false;
  }
  //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
  
}