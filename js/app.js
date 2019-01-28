$(function() {
  //We instantiate our model
  var model = new DinnerModel();

  // Create views and their controllers
  var welcomeView = new WelcomeView($("#welcomeView"), model);
  var welcomeCtrl = new WelcomeCtrl(welcomeView, model, this);

  var sidebarView = new SidebarView($("#sidebarView"), model);
  var sidebarCtrl = new SidebarCtrl(sidebarView, model, this);

  var dishItemView = new DishItemView($("#dishItemView"), model);
  var dishItemCtrl = new DishItemCtrl(dishItemView, model, this);

  var dishSearchView = new DishSearchView($("#dishSearchView"), model);
  var dishSearchCtrl = new DishSearchCtrl(dishSearchView, model, this, dishItemView);

  var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  var dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model, this);

  var confirmView = new ConfirmView($("#confirmView"), model);
  var confirmCtrl = new ConfirmCtrl(confirmView, model, this);

  var printView = new PrintView($("#printView"), model);
  var printCtrl = new PrintCtrl(printView, model, this);



  showWelcomeScreen();
  //showDishDetailsScreen();

  function showWelcomeScreen() {
    welcomeView.show();
    sidebarView.hide();
    dishSearchView.hide();
    dishItemView.hide();
    dishDetailsView.hide();
    confirmView.hide();
    printView.hide();
  }

  this.showSelectDishScreen = function showSelectDishScreen() {
    welcomeView.hide();
    sidebarView.show();
    dishSearchView.show();
    dishItemView.show();
    dishDetailsView.hide();
    confirmView.hide();
    printView.hide();
  }

  this.showDishDetailsScreen = function showDishDetailsScreen(id) {
    welcomeView.hide();
    sidebarView.show();
    dishSearchView.hide();
    dishItemView.hide();
    dishDetailsView.show(id);
    confirmView.hide();
    printView.hide();
  }

  this.showConfirmScreen = function showConfirmScreen() {
    welcomeView.hide();
    sidebarView.hide();
    dishSearchView.hide();
    dishItemView.hide();
    dishDetailsView.hide();
    confirmView.show();
    printView.hide();
  }

  this.showPrintScreen = function showPrintScreen() {
    welcomeView.hide();
    sidebarView.hide();
    dishSearchView.hide();
    dishItemView.hide();
    dishDetailsView.hide();
    confirmView.hide();
    printView.show();
  }

});
