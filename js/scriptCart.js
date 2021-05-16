const carrito = JSON.parse(localStorage.getItem("carrito-compras")) || [];

const shoppingComprasContainer = document.querySelector('.compras');

const pedidoBtn =  document.querySelector('.btn--pedido');

pedidoBtn.addEventListener('click', enviarPedido);

carrito.forEach((producto)=>{
	addProductInCart(producto);
	calTotal(producto.subtotal);
});
function addProductInCart(producto){

	const shopping = document.createElement('div');
	let shoppingCartContent = `
	<div class="row p-5 m-2">
		<div class="col-2">
			<img src="${producto.img}" alt="Shopping-cart-img">
		</div>
		<div class="col-4"></div>
		<div class="col-3">
			<div>
				<p style='font-size:18px; font-weight: bold'>${producto.titulo}</p>
				<p style= 'font-weight: bold'>$${producto.precio}</p>
			</div>
		<div class="col-3">
			<div>
				<p  style= 'font-weight: bold'>Cantidad: ${producto.cantidad}</p>
				<p  style= 'font-size:14px;font-weight: bold'>Subtotal:$${producto.subtotal} </p>
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

function enviarPedido(event){
	if(carrito.length){
		const elements = carrito
			.map((producto)=>`Producto: ${producto.titulo}\nCantidad: ${producto.cantidad}\nSubtotal: $${producto.subtotal}`)
            .join("\n\n");
		const message = `Hola! Me gustaria hacer el siguiente pedido:\n\n ${elements}\n\n*Total a pagar:$ ${document.querySelector('.totalShopping').textContent}*`;
		const url = encodeURI(
			`https://api.whatsapp.com/send?phone=999-999-9999&text=${message}`
		);
		window.open(url, "_blank");
	}
}