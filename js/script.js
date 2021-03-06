let compras = [];

let likes = [];


const updateBtn = document.querySelectorAll('.update-btn');

const addToCartBtn = document.querySelectorAll('.addToCart');

const btnFavoritos = document.querySelectorAll(".btnMeGusta");

updateBtn.forEach((upBtn)=>{
	upBtn.addEventListener('click',updatedCount);
});

addToCartBtn.forEach((addCartBtn) =>{
	addCartBtn.addEventListener('click', addToCartClicked);
	});

btnFavoritos.forEach((btnFavorito)=>{
	btnFavorito.addEventListener('click', addToFavoritos);
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
	const productImg = product.querySelector('.card-img-top').src;
	const inputValue = product.querySelector('.item-count').value;

	addProductInCart(productTitle, productPrice, productImg, inputValue);
}

function addToFavoritos(event){
	const btnHeart = event.target;
	const product = btnHeart.closest('.product');
	const productTitle = product.querySelector('.product-title').textContent;
	const productPrice = product.querySelector('.product-price').textContent;
	const productImg = product.querySelector('.card-img-top').src;

	addProductInFav(productTitle, productPrice, productImg);
	
};

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

function addProductInFav(productTitle,productPrice, productImg){
	const producto = {titulo:productTitle, img: productImg, precio: productPrice}

	const pocision = likes.findIndex(prod => prod.titulo == productTitle);
	if (pocision >= 0){
		likes [pocision] = producto;
	}else{
		likes.push(producto);
	}

	localStorage.setItem("favoritos-likes", JSON.stringify(likes));

}; 
