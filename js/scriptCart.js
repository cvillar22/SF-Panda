const carrito = JSON.parse(localStorage.getItem("carrito-compras"));

const shoppingComprasContainer = document.querySelector('.compras');

carrito.forEach((producto)=>{
	addProductInCart(producto);
	calTotal(producto.subtotal);
});
function addProductInCart(producto){

	const shopping = document.createElement('div');
	let shoppingCartContent = `
	<div class="row">
		<div class="col-6">
			<img src="${producto.img}" alt="Shopping-cart-img">
		</div>
		<div class="col-6">
			<div class="container">
				<div class=row>
					<div class="col-12">
						<div class="card">
							<div class="card-img-top card-img-top">
								<h4>${producto.titulo}</h4>
								<h4>${producto.precio}</h4>
							</div>
						<div>
							<h4>Cantidad: ${producto.cantidad}</h4>
							<h4>Subtotal: ${producto.subtotal}</h4>
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

function calTotal(subtotal){

const total = document.querySelector('.totalShopping');
const currentTotal = Number(total.textContent.replace('$',''));
total.textContent = currentTotal + subtotal;

};