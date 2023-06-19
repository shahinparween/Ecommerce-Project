var cartItems = []; // Array to store cart items

document.addEventListener('DOMContentLoaded', function() {

	const userData = JSON.parse(sessionStorage.getItem('userData'));
	var h4 = document.getElementById('welcomeMsg');
	 
	h4.innerText = 'For any support reach out to us \n On our toll free number : 1800-2999-222 \n\n\n\n\n\n Welcome ' + userData.name;

	var productPrice = 0;
	var discountPrice = 100;
	var deliveryCharges = 0;
	var totalPrice = 0;
	cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
	var element = document.getElementById('cart-items');
	cartItems.forEach(function(product) {
		
		var div = document.createElement('div');
		div.classList.add('cart-item');
		
		var imgdiv = document.createElement('div');
		imgdiv.classList.add('cart-image');
		
		var otherdiv = document.createElement('div');
		otherdiv.classList.add('cart-other');
		
		var qtydiv = document.createElement('div');
		qtydiv.classList.add('cart-qty');
		qtydiv.innerHTML = '<b>Quantity : </b><span style="color:green;">'+product.qty+'&emsp;&emsp;</span>';
		
		
		productPrice = (productPrice + product.msrpPrice)*product.qty;
		
		var pricediv = document.createElement('div');
		pricediv.classList.add('cart-price');
		pricediv.innerHTML = '<b>Product Price : </b><span style="color:green;">'+product.msrpPrice+ '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>';
		
		var removediv = document.createElement('div');
		removediv.classList.add('cart-action');
		
		var img = document.createElement('img');
		img.setAttribute('src', 'images/' + product.image);
		img.setAttribute('alt', product.productId);
		img.setAttribute('width', 180);
		img.setAttribute('height', 120);

		var h3 = document.createElement('h3');
		h3.innerHTML = product.title;
		
		var span = document.createElement('span');
		span.innerHTML = product.productId;

		var p = document.createElement('p');
		p.innerHTML = product.description;
		

		var link = document.createElement('a');
		link.style.cursor = 'pointer';
		link.textContent = 'X';
		link.style.color = 'red';
		link.addEventListener('click', function() {
			
			var indexToRemove = 0; 
			cartItems.splice(indexToRemove, 1); 
			sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
			window.location.href = 'cart.html';

		});

		imgdiv.appendChild(img);
		
		otherdiv.appendChild(h3);
		otherdiv.appendChild(span);
		otherdiv.appendChild(p);
		
		removediv.appendChild(link);
		
		div.appendChild(imgdiv);
		div.appendChild(otherdiv);
		div.appendChild(qtydiv);
		div.appendChild(pricediv);
		div.appendChild(removediv);
		
		element.appendChild(div);

	});
	
	totalPrice =  (productPrice - discountPrice ) + deliveryCharges ;
	document.getElementById('product-price').innerHTML = 'Product Price : '+productPrice;
	document.getElementById('discount-price').innerHTML = 'Discount Price : -'+discountPrice;
	document.getElementById('delivery-charges').innerHTML = 'Delivery Chanrges : '+ deliveryCharges;
	document.getElementById('total-price').innerHTML = 'Total Price : '+totalPrice;
	
	sessionStorage.setItem('totalPrice', JSON.stringify(totalPrice));
	
	
});

function goToCheckout(){
	window.location.href = 'checkout.html';
}

function makeAPICall(url,cartItems,callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function() {
		if (xhr.status === 200) {
			var response = JSON.parse(xhr.response);
			callback(null, response); // Call the callback with the response data
		} else {
			callback(new Error('API request failed with status ' + xhr.status), null); // Call the callback with an error
		}
	};

	xhr.send(cartItems);
}
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
