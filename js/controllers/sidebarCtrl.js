var SidebarCtrl = function (sideBarView, model, gsc) {

    sideBarView.$confirmBtn.click(function () {
        gsc.showScreen("CONFIRM");
    });

    sideBarView.$numberOfGuests.on("input", function (event) {
        model.setNumberOfGuests(event.target.value);
    });

    sideBarView.$menu.on("click", "a", function (e) {
        model.setSelectedDishId(e.currentTarget.getAttribute("data-id"));
        gsc.showScreen("DISH_DETAILS");
    });

};
