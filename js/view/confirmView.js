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

        this.$confirmList.empty();

        let dishes = model.getFullMenu();
        let self = this;

        Promise.all(dishes.map((id) => this.addItemToConfirm(id))).then(function(){
            self.$totalPrice.text("SEK " + model.getTotalMenuPrice().toFixed(2));
            self.$numberOfGuests.text(model.getNumberOfGuests());
        });

    };

    this.hide = function() {
        container.hide();
    };

    this.show = function () {
        container.show();
    };

    this.addItemToConfirm = function(id){
        let self = this;

        return model.getDish(id).then(function(dish){
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
            price.innerText = model.getDishPrice(dish.id) * model.getNumberOfGuests() + " SEK";

            li.appendChild(img);
            li.appendChild(img);
            li.appendChild(price);

            self.$confirmList.append(li);

        });
    }

};
