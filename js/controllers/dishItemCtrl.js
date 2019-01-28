var DishItemCtrl = function(view, model, gsc) {
  view.dishList.find("button").click(function(e) {
    gsc.showDishDetailsScreen(e.currentTarget.id);
  });

  view.dishList.on('DOMSubtreeModified', "", function() {
    view.dishList.find("button").click(function(e) {
      gsc.showDishDetailsScreen(e.currentTarget.id);
    });
  });

}
