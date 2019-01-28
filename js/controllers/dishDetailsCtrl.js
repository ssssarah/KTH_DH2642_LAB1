var DishDetailsCtrl = function(view, model, gsc) {
  view.addToMenu.click(function() {
    model.addDishToMenu(view.id);
    gsc.showSelectDishScreen();
    //model.addDishToMenu();
  });

  view.backBtn.click(function() {
    gsc.showSelectDishScreen();
  });

}
