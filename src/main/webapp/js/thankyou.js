document.addEventListener('DOMContentLoaded', function() {

	//Welcome User
	const orderId = JSON.parse(sessionStorage.getItem('orderId'));
	var h3 = document.getElementById('orderId');
	h3.innerText = 'Your Order Id #' + orderId;

});