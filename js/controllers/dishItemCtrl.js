let DishItemCtrl = function(dishItemView, model, gsc) {

  dishItemView.$dishList.on("click", "button", function(e) {
    model.setSelectedDishId(e.currentTarget.getAttribute("data-id"));
    gsc.showScreen("DISH_DETAILS");
  });

};
