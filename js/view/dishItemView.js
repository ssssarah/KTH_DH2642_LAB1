var DishItemView = function (container, model) {

    this.$dishList = container.find("#dishList");

    this.showDishes = function (type = null, filter = null) {

        this.$dishList.empty();

        let dishes = model.getAllDishes(type, filter);
        for (let key in dishes) {
            let dish = dishes[key];

            let item = document.createElement("button");
            item.setAttribute("data-id", dish.id);
            item.classList.add("btn");
            item.classList.add("wrapper");
            item.classList.add("myBg");
            item.classList.add("border");
            item.classList.add("border-dark");
            item.classList.add("mx-4");
            item.classList.add("my-4");

            let img = document.createElement("img");
            img.classList.add("border-bottom");
            img.classList.add("border-dark");
            img.src = model.relativePath + dish.image;
            img.alt = dish.name;
            img.style.width = "200px";

            let title = document.createElement("h6");
            title.innerText = dish.name;

            item.appendChild(img);
            item.appendChild(title);

            this.$dishList.append(item);
        }
    };

    this.hide = function() {
        container.hide();
    };
    this.show = function () {
        container.show();
    };

    this.showDishes();

};
