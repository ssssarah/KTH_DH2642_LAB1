var SidebarView = function (container, model) {

    this.$numberOfGuests = container.find("#sidebar_numberOfGuests");
    this.$menu = container.find("#menu");
    this.$totalPrice = container.find("#sidebar_totalPrice");
    this.$totalPrice_collapse = container.find("#sidebar_totalPrice_collapse");
    this.$confirmBtn = container.find("#confirmBtn");

    model.addObserver(this);

    this.update = function() {

        if(container.is(":visible")) {

            this.$menu.empty();

            let dishes = model.getFullMenu();
            for(let key in dishes) {
                let dish = dishes[key];
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

                let price = document.createElement("div");
                price.classList.add("col-sm");
                price.classList.add("price");
                price.classList.add("text-right");
                price.innerHTML = model.getDishPrice(dish).toFixed(2);

                item.appendChild(title);
                item.appendChild(price);
                this.$menu.append(item);
            }

            let t = "SEK " + model.getTotalMenuPrice().toFixed(2);
            this.$totalPrice.text(t);
            this.$totalPrice_collapse.text(t);
        }

        return Promise.resolve();

    };

    this.hide = function() {
        container.hide();
    };
    this.show = function () {
        container.show();
        return this.update();
    };
};
