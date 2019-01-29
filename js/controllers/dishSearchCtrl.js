var DishSearchCtrl = function(dishSearchView, model, gsc, dishItemView) {

  dishSearchView.$searchBtn.click(function() {
    dishItemView.showDishes(dishSearchView.$dishTypeSelect.val(), dishSearchView.$filterInput.val());
  });

};
