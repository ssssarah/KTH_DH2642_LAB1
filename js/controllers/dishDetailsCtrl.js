var DishDetailsCtrl = function (dishDetailsView, model, gsc) {

    dishDetailsView.$addToMenu.click(function () {
        model.addDishToMenu();

        gsc.showLoader();
        gsc.showScreen("DISH_SEARCH").then(function () {
            gsc.hideLoader();
        });

    });

    dishDetailsView.$backBtn.click(function () {

        gsc.showLoader();
        gsc.showScreen("DISH_SEARCH").then(function () {
            gsc.hideLoader();
        });

    });

};
