const addToCartBtn = document.querySelectorAll('.addToCart');

addToCartBtn.forEach((addCartBtn) =>{
	addCartBtn.addEventListener('click', addToCartClicked);
	});

const shoppingComprasContainer = document.querySelector('.compras');

function addToCartClicked(event){
	const buttonCart = event.target;
	const product = buttonCart.closest('.product');
	const productTitle = product.querySelector('.product-title').textContent;
	const productPrice = product.querySelector('.product-price').textContent;
	const productImg = product.querySelector('.product-img').src;

	addProductInCart(productTitle, productPrice, productImg);
}

function addProductInCart(productTitle, productPrice, productImg){

	const shopping = document.createElement('div');
	let shoppingCartContent = `
	<div class="row">
		<div class="col-6">
			<img src="${productImg}" alt="Shopping-cart-img">
		</div>
		<div class="col-6">
			<div class="container">
				<div class=row>
					<div class="col-12">
						<div class="card">
							<div class="card-img-top card-img-top">
								<h4>${productTitle}</h4>
								<h4>${productPrice}</h4>
							</div>
						<div>
							<button class="update-btn" value="-1">-</button>
								<input  class="item-count" readonly type="number" value=""/>
							<button class="update-btn" value="1">+</button>
						</div>
						<div class="card-body pt-2 d-flex justify-content-center">
							<button class="btn btn--carousel">
								<h4>Hacer pedido</h4>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> `
shopping.innerHTML = shoppingCartContent;
shoppingComprasContainer.append(shopping);
};