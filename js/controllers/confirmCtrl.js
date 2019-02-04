var ConfirmCtrl = function (confirmView, model, gsc) {

    confirmView.$printBtn.click(function () {
        gsc.showLoader();
        gsc.showScreen("PRINT").then(function () {
            gsc.hideLoader();
        });
    });

    confirmView.$backBtn.click(function () {
        gsc.showLoader();
        gsc.showScreen("DISH_SEARCH").then(function () {
            gsc.hideLoader();
        });
    });

};
