let DishDetailsView = function (container, model) {

    this.$addToMenu = container.find("#addToMenu");
    this.$backBtn = container.find("#dishDetail_backBtn");
    this.$ingredientList = container.find("#ingredientList");
    this.$price = container.find("#price");

    model.addObserver(this);

    this.show = function (){
        let id = model.getSelectedDishId();
        let dish = model.getDish(id);

        let numberOfGuests = model.getNumberOfGuests();
        container.find("#dishName").text(dish.name);
        container.find("#dishImg").attr("src", model.relativePath + dish.image);
        container.find("#dishPrep").text(dish.description);
        container.find("#dishDetail_numberOfGuests").text(numberOfGuests);

        this.$ingredientList.empty();

        let totalPrice = 0;

        for (let key in dish.ingredients) {
            if (dish.ingredients.hasOwnProperty(key)) {

                let ingredient = dish.ingredients[key];

                let item = document.createElement("li");
                item.classList.add("row");

                let quantity = document.createElement("span");
                quantity.classList.add("col-2");
                quantity.innerHTML = ingredient.quantity + " " + ingredient.unit;

                let name = document.createElement("span");
                name.classList.add("col-6");
                name.innerHTML = ingredient.name;

                let currency = document.createElement("span");
                currency.classList.add("col-2");
                currency.innerHTML = "SEK";

                let price = document.createElement("span");
                price.classList.add("col-2");
                price.innerHTML = (ingredient.price * numberOfGuests).toFixed(2);

                totalPrice += ingredient.price * numberOfGuests;

                item.appendChild(quantity);
                item.appendChild(name);
                item.appendChild(currency);
                item.appendChild(price);

                this.$ingredientList.append(item);
            }

            this.$price.text("SEK " + totalPrice.toFixed(2));
            container.show();
        }

    };

    this.update = function () {
        this.show();
    };

    this.hide = function () {
        container.hide();
    };

};
