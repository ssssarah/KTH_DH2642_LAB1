var SidebarView = function (container, model) {

    this.$numberOfGuests = container.find("#sidebar_numberOfGuests");
    this.$menu = container.find("#menu");
    this.$totalPrice = container.find("#sidebar_totalPrice");
    this.$totalPrice_collapse = container.find("#sidebar_totalPrice_collapse");
    this.$confirmBtn = container.find("#confirmBtn");

    model.addObserver(this);

    this.update = function() {

        this.$menu.empty();

        let self = this;
        let menuDishes = model.getFullMenu();
        let promises = menuDishes.map((id) => this.addItemToMenu(id));

        Promise.all(promises).then(function(){

            let t = "SEK " + model.getTotalMenuPrice().toFixed(2);
            self.$totalPrice.text(t);
            self.$totalPrice_collapse.text(t);

        });

    };

    this.addItemToMenu = function (id){

        let self = this;

        return model.getDish(id).then(function(dish) {

            let item = document.createElement("a");
            item.setAttribute("data-id", dish.id);
            item.classList.add("row");
            item.classList.add("m-1");
            item.classList.add("myBg");
            item.classList.add("border");
            item.classList.add("border-dark");

            let title = document.createElement("div");
            title.classList.add("col-sm");
            title.classList.add("price");
            title.classList.add("text-uppercase");
            title.innerHTML = dish.title;

            let dishPrice = model.getDishPrice(dish.id);

            let price = document.createElement("div");
            price.classList.add("col-sm");
            price.classList.add("price");
            price.classList.add("text-right");
            dishPrice *= model.getNumberOfGuests();
            price.innerHTML = dishPrice.toFixed(2);

            item.appendChild(title);
            item.appendChild(price);
            self.$menu.append(item);

        });
    };

    this.hide = function() {
        container.hide();
    };
    this.show = function () {
        container.show();
    };
};
