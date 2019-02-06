var DishSearchCtrl = function(dishSearchView, model, gsc, dishItemView) {

  dishSearchView.$searchBtn.click(function() {

    gsc.showLoader();
    dishItemView.update(dishSearchView.$dishTypeSelect.val(), dishSearchView.$filterInput.val()).then(function(){
      gsc.hideLoader();
    });

  });

};
