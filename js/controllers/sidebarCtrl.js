var SidebarCtrl = function (sideBarView, model, gsc) {

    sideBarView.$confirmBtn.click(function () {
        gsc.showLoader();
        gsc.showScreen("CONFIRM").then(function(){
            gsc.hideLoader();
        });
    });

    sideBarView.$numberOfGuests.on("input", function (event) {
        model.setNumberOfGuests(event.target.value);
    });

    sideBarView.$menu.on("click", "a", function (e) {
        model.setSelectedDishId(e.currentTarget.getAttribute("data-id"));

        gsc.showLoader();
        gsc.showScreen("DISH_DETAILS").then(function(){
            gsc.hideLoader();
        });
    });

};
