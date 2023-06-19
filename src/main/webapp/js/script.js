function login() {
  const username = document.forms["loginForm"]["username"].value;
  const password = document.forms["loginForm"]["password"].value;
  const apiUrl = "http://localhost:8080/Ecommerce-Project/login?username=" + username + "&password=" + password;

 makeAPICall(apiUrl, function(error, response) {
  if (error) {
    console.log('Error:', error.message);
  } else {
	 sessionStorage.setItem('userData', JSON.stringify(response));
	 window.location.href = 'home.html';    
  }
});
}

function register() {
	
  const name = document.forms["signup"]["name"].value;
  const username = document.forms["signup"]["username"].value;
  const password = document.forms["signup"]["password"].value;
  const apiUrl = "http://localhost:8080/Ecommerce-Project/register?name="+name+"&username=" + username + "&password=" + password;

 makeAPICall(apiUrl, function(error, response) {
  if (error) {
    console.log('Error:', error.message);
  } else {
	 alert("Account Created Successfully");
	 sessionStorage.setItem('userData', JSON.stringify(response));
	 window.location.href = 'index.html';    
  }
});


}

function makeAPICall(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onreadystatechange = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);
        callback(null, response); // Call the callback with the response data
      } else {
        callback(new Error('API request failed with status ' + xhr.status), null); // Call the callback with an error
    }
  };

  xhr.send();
}