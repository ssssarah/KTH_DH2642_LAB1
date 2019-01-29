
var SidebarView = function (container, model) {

	this.numberOfGuests = container.find("#numberOfGuests");

	var menu = container.find("#menu")[0];
	var totalPrice = container.find("#totalPrice")[0];
	var totalPrice_collapse = container.find("#totalPrice_collapse")[0];

	this.confirmBtn = container.find("#confirmBtn");

	// Register to listen for updates from the model.
	model.addObserver(this);

	var loadMenu = function() {
		while(menu.firstChild) {
			menu.firstChild.remove();
		}
		var menuDishes = model.getFullMenu();
		var list = document.createElement("ul");
		list.classList.add("list-unstyled");
		for (key in menuDishes) {
			var item = document.createElement("li");
			item.classList.add("row");
			item.classList.add("m-1");
			item.classList.add("myBg");
			item.classList.add("border");
			item.classList.add("border-dark");
			var title = document.createElement("div");
			title.classList.add("col-sm");
			title.classList.add("price");
			title.classList.add("text-uppercase");
			title.innerHTML = menuDishes[key].name;
			var dishPrice = 0;
			for (key2 in menuDishes[key].ingredients) {
				dishPrice += menuDishes[key].ingredients[key2].price;
			}
			var price = document.createElement("div");
			price.classList.add("col-sm");
			price.classList.add("price");
			price.classList.add("text-right");
			dishPrice *= model.getNumberOfGuests();
			price.innerHTML = dishPrice.toFixed(2);
			item.appendChild(title);
			item.appendChild(price);
			list.appendChild(item);
		}
		menu.appendChild(list);

		var t = "SEK " + model.getTotalMenuPrice().toFixed(2);
		totalPrice.innerHTML = t;
		totalPrice_collapse.innerHTML = t;
	};

	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadMenu();
	};

	this.hide = function(index) {
    container.hide();
  };
  this.show = function() {
    container.show();
  };
};
