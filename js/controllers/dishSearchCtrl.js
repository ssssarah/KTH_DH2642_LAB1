var DishSearchCtrl = function(dishSearchView, model, gsc, dishItemView) {

  dishSearchView.$searchBtn.click(function() {

    gsc.showLoader();
    dishItemView.showDishes(dishSearchView.$dishTypeSelect.val(), dishSearchView.$filterInput.val()).then(function(){
      gsc.hideLoader();
    });

  });

};
