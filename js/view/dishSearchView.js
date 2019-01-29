var DishSearchView = function (container, model) {
    this.type = container.find("#dishType");
    this.filter = container.find("#filter");
    this.searchBtn = container.find("#searchBtn");

    this.hide = function (index) {
        container.hide();
    };

    this.show = function () {
        container.show();
    };

    //init the select of dish types
    let  dishTypeSelect = container.find("#dishType")[0];
    let dishTypes = model.getAllDishTypes();
    for (let key in dishTypes) {
        let dishType = dishTypes[key];
        let el = document.createElement("option");
        el.setAttribute("value", dishType);
        el.innerText = dishType;
        dishTypeSelect.appendChild(el);
    }
};