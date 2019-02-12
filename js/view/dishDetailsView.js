let DishDetailsView = function (container, model) {

    this.$addToMenu = container.find("#addToMenu");
    this.$backBtn = container.find("#dishDetail_backBtn");
    this.$ingredientList = container.find("#ingredientList");
    this.$price = container.find("#price");
    this.$dishName = container.find("#dishName");
    this.$dishImg = container.find("#dishImg");
    this.$dishPrep = container.find("#dishPrep");
    this.$nbOfGuests = container.find("#dishDetail_numberOfGuests");

    let self = this;
    model.addObserver(this);

    this.show = function () {

        console.log("dishDetail update");
        container.show();
        return this.update();

    };

    this.update = function () {
        if (container.is(":visible")) {

            let id = model.getSelectedDishId();
            return model.getDish(id).then(function (dish) {

                self.$ingredientList.empty();
                self.$dishName.text("");
                self.$dishImg.attr("src", "");
                self.$dishPrep.text("");
                self.$nbOfGuests.text("");
                self.$price.text("");

                if (dish.error) {
                    alert("Error details: " + dish.error);
                    container.show();
                    return;
                }

                model.setSelectedDish(dish);

                let numberOfGuests = model.getNumberOfGuests();
                self.$dishName.text(dish.title);
                self.$dishImg.attr("src", dish.image);
                self.$dishPrep.text(dish.instructions);
                self.$nbOfGuests.text(numberOfGuests);

                let totalPrice = 0;

                for (let key in dish.extendedIngredients) {
                    let ingredient = dish.extendedIngredients[key];

                    let item = document.createElement("li");
                    item.classList.add("row");

                    let quantity = document.createElement("span");
                    quantity.classList.add("col-2");
                    quantity.innerHTML = ingredient.amount + " " + ingredient.unit;

                    let name = document.createElement("span");
                    name.classList.add("col-6");
                    name.innerHTML = ingredient.name;

                    let currency = document.createElement("span");
                    currency.classList.add("col-2");
                    currency.innerHTML = "SEK";

                    let price = document.createElement("span");
                    price.classList.add("col-2");
                    price.innerHTML = (1 * numberOfGuests).toFixed(2);

                    item.appendChild(quantity);
                    item.appendChild(name);
                    item.appendChild(currency);
                    item.appendChild(price);

                    self.$ingredientList.append(item);
                }

                self.$price.text("SEK " + model.getDishPrice(dish).toFixed(2));
            });
        }
    };

    this.hide = function () {
        container.hide();
    };

};
