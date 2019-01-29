var SidebarCtrl = function (sideBarView, model, gsc) {

    sideBarView.$confirmBtn.click(function () {
        gsc.showConfirmScreen();
    });

    sideBarView.$numberOfGuests.change(function (event) {
        model.setNumberOfGuests(event.target.value);
    });

    sideBarView.$menu.on("click", "button", function (e) {
        console.log(e.currentTarget.getAttribute("data-id"));
        model.setSelectedDishId(e.currentTarget.getAttribute("data-id"));
        gsc.showDishDetailsScreen(e.currentTarget.getAttribute("data-id"));
    });

};
