var DishSearchView = function (container, model) {
    this.$dishTypeSelect = container.find("#dishType");
    this.$filterInput = container.find("#filter");
    this.$searchBtn = container.find("#searchBtn");

    this.hide = function (index) {
        container.hide();
    };

    this.show = function () {
        container.show();
    };

    //init the select of dish types
    let dishTypes = model.getAllDishTypes();
    for (let key in dishTypes) {
        let dishType = dishTypes[key];
        let el = document.createElement("option");
        el.setAttribute("value", dishType);
        el.innerText = dishType;
        this.$dishTypeSelect.append(el);
    }
};