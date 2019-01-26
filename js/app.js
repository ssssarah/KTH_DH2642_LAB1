$(function() {
  //We instantiate our model
  var model = new DinnerModel();

  // And create the instance of ExampleView
  var sidebarView = new SidebarView($("#sidebarView"), model);
  var dishSearchView = new DishSearchView($("#dishSearchView"), model);
  var dishItemView = new DishItemView($("#dishItemView"), model);
  var welcomeView = new WelcomeView($("#welcomeView"), model);
  var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  var confirmView = new ConfirmView($("#confirmView"), model);
  var printView = new PrintView($("#printView"), model);
});
