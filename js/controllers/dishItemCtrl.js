let DishItemCtrl = function(dishItemView, model, gsc) {

  dishItemView.$dishList.find("button").click(function(e) {
    model.setSelectedDishId(e.currentTarget.id);
    gsc.showDishDetailsScreen(e.currentTarget.id);
  });

  dishItemView.$dishList.on('DOMSubtreeModified', "", function() {
    dishItemView.$dishList.find("button").click(function(e) {
      gsc.showDishDetailsScreen(e.currentTarget.id);
    });
  });

};
