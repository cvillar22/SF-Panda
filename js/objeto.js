class Productos{
	constructor(id, price, nombre){
		this.id = id;
		this.price = Number(price);
		this.nombre = nombre;
		this.count = 1;
	}

	get price(){
		return this.price;
	}
	get id(){
		return this.id;
	}
	get nombre(){
		return this.nombre;
	}
	get count(){
		return this.count;
	}
	get price(){
		return this.price*this.count;
	}
	set count(newCount){
		this.count =newCount;
	}
}