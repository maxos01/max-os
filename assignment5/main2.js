
var num = 0;
function postFunction() { 
  if(num==0){
  var text = document.getElementById("text1");
  var post = document.getElementById("post1");
  post.innerHTML = text.value;
  num++;
}
  else if(num ==1){
    var text = document.getElementById("text1");
  var post = document.getElementById("reply1");
  post.innerHTML = text.value;
  num++;
  }
  else if(num ==2){
    var text = document.getElementById("text1");
  var post = document.getElementById("reply2");
  post.innerHTML = text.value;
  }
}

function clearFunction(){
  var post = document.getElementById("post1");
  post.innerHTML = null;
  var post = document.getElementById("reply1");
  post.innerHTML = null;
  var post = document.getElementById("reply2");
  post.innerHTML = null;
  num=0;
}
