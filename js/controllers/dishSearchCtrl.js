var DishSearchCtrl = function(dishSearchView, model, gsc, dishItemView) {

  dishSearchView.$searchBtn.click(function() {
    console.log("Type: " + dishSearchView.$dishTypeSelect.val() +", Filter: " + dishSearchView.$filterInput.val());
    dishItemView.showDishes(dishSearchView.$dishTypeSelect.val(), dishSearchView.$filterInput.val());
  });

};
