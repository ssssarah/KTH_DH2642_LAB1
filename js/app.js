$(function() {
  //We instantiate our model
  var model = new DinnerModel();

  // And create the instance of ExampleView
  var sidebarView = new SidebarView($("#sidebarView"), model);
  var selectDishView = new SelectDishView($("#selectDishView"), model);

});
