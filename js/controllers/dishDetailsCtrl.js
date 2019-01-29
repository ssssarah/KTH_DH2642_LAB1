var DishDetailsCtrl = function(dishDetailsView, model, gsc) {

  dishDetailsView.$addToMenu.click(function() {
    model.addDishToMenu(model.getSelectedDishId());
    gsc.showSelectDishScreen();
  });

  dishDetailsView.$backBtn.click(function() {
    gsc.showSelectDishScreen();
  });

};
