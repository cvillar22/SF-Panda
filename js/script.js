let compras = [];


const updateBtn = document.querySelectorAll('.update-btn');

const addToCartBtn = document.querySelectorAll('.addToCart');

updateBtn.forEach((upBtn)=>{
	upBtn.addEventListener('click',updatedCount);
});

addToCartBtn.forEach((addCartBtn) =>{
	addCartBtn.addEventListener('click', addToCartClicked);
	});

function updatedCount(event){
	const buttonCount = event.target;
	const count = buttonCount.parentNode.querySelector('.item-count');
	if (count.value >= 1){
		count.value = Number(count.value) + Number(buttonCount.value);
	}else{
		count.value = 1;
	};
}

function addToCartClicked(event){
	const buttonCart = event.target;
	const product = buttonCart.closest('.product');
	const productTitle = product.querySelector('.product-title').textContent;
	const productPrice = product.querySelector('.product-price').textContent.replace('$','');
	const productImg = product.querySelector('.product-img').src;
	const inputValue = product.querySelector('.item-count').value;

	addProductInCart(productTitle, productPrice, productImg, inputValue);
}

function addProductInCart(productTitle, productPrice, productImg, inputValue){
	const producto = {titulo:productTitle, img: productImg, precio: productPrice, cantidad: inputValue, subtotal:Number(productPrice)*Number(inputValue)}

	const pocision = compras.findIndex(prod => prod.titulo == productTitle);
	if (pocision >= 0){
		compras [pocision] = producto;
	}else{
		compras.push(producto);
	}

	localStorage.setItem("carrito-compras", JSON.stringify(compras));

};

