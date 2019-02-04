var DishDetailsCtrl = function(dishDetailsView, model, gsc) {

  dishDetailsView.$addToMenu.click(function() {
    model.addDishToMenu(model.getSelectedDishId());
    gsc.showScreen("SELECT_DISH");
  });

  dishDetailsView.$backBtn.click(function() {
    gsc.showScreen("SELECT_DISH");
  });

};
