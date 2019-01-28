var DishSearchCtrl = function(view, model, gsc, itemView) {
  view.searchBtn.click(function() {
    //console.log("Type: " + view.type.val() +", Filter: " + view.filter.val());
    itemView.updateSearchResults(view.type.val(), view.filter.val());
  });

}
