var ConfirmView = function (container, model) {
    this.$backBtn = container.find("#confirm_backBtn");
    this.$printBtn = container.find("#printBtn");
    this.$numberOfGuests = container.find("#confirm_numberOfGuests");
    this.$confirmList = container.find("#confirm_dishList");
    this.$totalPrice = container.find("#confirm_totalPrice");

    // Register to listen for updates from the model.
    model.addObserver(this);

    // The observer update function, triggered by the model when there are changes
    this.update = function () {

        if (container.is(":visible")) {

            console.log("confirm update");
            this.$confirmList.empty();

            let dishes = model.getFullMenu();
            for (let key in dishes) {
                let dish = dishes[key];
                let li = document.createElement("li");
                li.classList.add("list-inline-item");
                li.classList.add("px-2");

                let img = document.createElement("img");
                img.classList.add("img-fluid");
                img.classList.add("border");
                img.classList.add("border-dark");

                img.setAttribute("src", dish.image);
                img.setAttribute("alt", dish.title);

                let price = document.createElement("h6");
                price.classList.add("price");
                price.innerText = model.getDishPrice(dish).toFixed(2) + " SEK";

                li.appendChild(img);
                li.appendChild(img);
                li.appendChild(price);

                this.$confirmList.append(li);
            }

            this.$totalPrice.text(model.getTotalMenuPrice().toFixed(2) + " SEK");
            this.$numberOfGuests.text(model.getNumberOfGuests);
        }

        return Promise.resolve();
    };

    this.hide = function () {
        container.hide();
    };

    this.show = function () {
        container.show();
        this.update();
    };

};
