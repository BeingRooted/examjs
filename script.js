function login() {
  //set our username in localstorage
  let username = document.getElementById("username").value
  console.log(username)

  localStorage.setItem("USERNAME", username);


  //redirect to login page(home)
  window.location = "./product.html"
}

function register(){
  reg={
    myname:name1.value,
    username:username.value,
    password:password.value

  }

  if(reg.myname==''||reg.username==''||reg.password==''){
    alert("Enter data in all fields");

  }else{
    if(reg.username in localStorage){
      alert("Account already registered");
    }else{
      localStorage.setItem(reg.username,JSON.stringify(reg))
      alert("Account registered");
    }
  }

  window.location="./login.html"
}

function login(){
  let key = username.value;

  var userdata = JSON.parse(localStorage.getItem(key))

  if(userdata == null){
    alert("no such account");
  }else{
    if(userdata.username === username.value && userdata.password === password.value){
      alert('Login Successful');
      window.location="./product.html";
    }
  }
}






