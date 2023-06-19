
function placeOrder() {

	var address = document.getElementById('address').value;
	var totalPrice = JSON.parse(sessionStorage.getItem('totalPrice'));
	var min = 10000;
	var max = 1000000;
	var orderNumber = Math.floor(Math.random() * (max - min + 1)) + min;

	const apiUrl = "http://localhost:8080/Ecommerce-Project/checkout?address=" + address + "&totalAmount=" + totalPrice + "&orderId=" + orderNumber;
	makeAPICall(apiUrl, function(error, response) {
		if (error) {
			console.log('Error:', error.message);
		} else {
			sessionStorage.setItem('orderId', JSON.stringify(orderNumber));
			window.location.href = 'thankyou.html';
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
document.addEventListener('DOMContentLoaded', function() {
	const userData = JSON.parse(sessionStorage.getItem('userData'));
	var h4 = document.getElementById('welcomeMsg');

	h4.innerText = 'For any support reach out to us \n On our toll free number : 1800-2999-222 \n\n\n\n\n\n Welcome ' + userData.name;
});

function gotoCategory(categoryCode) {

	const apiUrl = "http://localhost:8080/Ecommerce-Project/productDetails?categoryCode=" + categoryCode;
	makeAPICall(apiUrl, function(error, response) {
		if (error) {
			console.log('Error:', error.message);
		} else {
			sessionStorage.setItem('productList', JSON.stringify(response));
			window.location.href = 'plp.html';
		}
	});
}
