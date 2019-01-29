var SidebarView = function (container, model) {

    this.$numberOfGuests = container.find("#sidebar_numberOfGuests");
    this.$menu = container.find("#menu");
    this.$totalPrice = container.find("#sidebar_totalPrice");
    this.$totalPrice_collapse = container.find("#sidebar_totalPrice_collapse");
    this.$confirmBtn = container.find("#confirmBtn");

    // Register to listen for updates from the model.
    model.addObserver(this);

    // The observer update function, triggered by the model when there are changes
    this.update = function() {

        this.$menu.empty();

        let menuDishes = model.getFullMenu();
        console.log(menuDishes);

        for (let key in menuDishes) {

            let dish = menuDishes[key];

            let item = document.createElement("button");
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
            title.innerHTML = dish.name;

            let dishPrice = model.getDishPrice(dish.id);

            let price = document.createElement("div");
            price.classList.add("col-sm");
            price.classList.add("price");
            price.classList.add("text-right");
            dishPrice *= model.getNumberOfGuests();
            price.innerHTML = dishPrice.toFixed(2);

            item.appendChild(title);
            item.appendChild(price);
            this.$menu.append(item);
        }

        let t = "SEK " + model.getTotalMenuPrice().toFixed(2);
        this.$totalPrice.text(t);
        this.$totalPrice_collapse.text(t);
    };

    this.hide = function() {
        container.hide();
    };
    this.show = function () {
        container.show();
    };
};
