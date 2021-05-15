
const favoritos = JSON.parse(localStorage.getItem("favoritos-likes"));

const meGustaContainer = document.querySelector('.meGustas');

favoritos.forEach((producto)=>{
	addProductInFav(producto);
});
function addProductInFav(producto){

	const corazon = document.createElement('div');
	let favContent = `
	<div class="row p-5 m-2">
		<div class="col-3">
			<img src="${producto.img}" alt="Shopping-cart-img">
		</div>
		<div class="col-3"></div>
		<div class="col-3">
			<div>
				<p style='font-size:18px; font-weight: bold'>${producto.titulo}</p>
				<p style= 'font-weight: bold'>$${producto.precio}</p>
			</div>
		<div class="col-3">
	</div> `
corazon.innerHTML = favContent;
meGustaContainer.append(corazon);
};
