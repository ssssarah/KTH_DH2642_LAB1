var DishSearchCtrl = function(dishSearchView, model, gsc, dishItemView) {

  dishSearchView.searchBtn.click(function() {
    console.log("Type: " + dishSearchView.type.val() +", Filter: " + dishSearchView.filter.val());
    //search items in the model here.
    dishItemView.updateSearchResults(dishSearchView.type.val(), dishSearchView.filter.val());
  });

};
