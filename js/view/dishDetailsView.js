let DishDetailsView = function (container, model) {
    let relativePath = "images/";

    this.$addToMenu = container.find("#addToMenu");
    this.$backBtn = container.find("#dishDetail_backBtn");
    this.$ingredientList = container.find("#ingredientList");
    this.$price = container.find("#price");
    this.id = null;

    let numberOfGuests = 1;
    let totalPrice = 0;

    this.hide = function () {
        container.hide();
    };

    this.show = function (dishId) {
        container.show();
        this.id = dishId;
        let dish = model.getDish(dishId);
        numberOfGuests = model.getNumberOfGuests();
        container.find("#dishName").text(dish.name);
        container.find("#dishImg").attr("src", relativePath + dish.image);
        container.find("#dishPrep").text(dish.description);
        container.find("#dishDetail_numberOfGuests").text(numberOfGuests);

        this.$ingredientList.empty();

        totalPrice = 0;

        for (let key in dish.ingredients) {
            if(dish.ingredients.hasOwnProperty(key)){

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

        }

        this.$price.text("SEK " + totalPrice.toFixed(2));
    };

};
