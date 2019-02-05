let DishDetailsView = function (container, model) {

    this.$addToMenu = container.find("#addToMenu");
    this.$backBtn = container.find("#dishDetail_backBtn");
    this.$ingredientList = container.find("#ingredientList");
    this.$price = container.find("#price");

    let self = this;
    model.addObserver(this);

    this.show = function () {

        let id = model.getSelectedDishId();

        model.getDish(id).then(function (dish) {
            model.setSelectedDish(dish);

            let numberOfGuests = model.getNumberOfGuests();
            container.find("#dishName").text(dish.title);
            container.find("#dishImg").attr("src", dish.image);
            container.find("#dishPrep").text(dish.instructions);
            container.find("#dishDetail_numberOfGuests").text(numberOfGuests);

            self.$ingredientList.empty();

            let totalPrice = 0;

            for(let key in dish.extendedIngredients) {
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
            container.show();

        });


    };

    this.update = function () {
        this.show();
    };

    this.hide = function () {
        container.hide();
    };

};
