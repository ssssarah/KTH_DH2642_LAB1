$(function() {
  //We instantiate our model
    const model = new DinnerModel();

  // Create views and their controllers
  const welcomeView = new WelcomeView($("#welcomeView"), model);
  const welcomeCtrl = new WelcomeCtrl(welcomeView, model, this);

  const sidebarView = new SidebarView($("#sidebarView"), model);
  const sidebarCtrl = new SidebarCtrl(sidebarView, model, this);

  const dishItemView = new DishItemView($("#dishItemView"), model);
  const dishItemCtrl = new DishItemCtrl(dishItemView, model, this);

  const dishSearchView = new DishSearchView($("#dishSearchView"), model);
  const dishSearchCtrl = new DishSearchCtrl(dishSearchView, model, this, dishItemView);

  const dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  const dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model, this);

  const confirmView = new ConfirmView($("#confirmView"), model);
  const confirmCtrl = new ConfirmCtrl(confirmView, model, this);

  const printView = new PrintView($("#printView"), model);
  const printCtrl = new PrintCtrl(printView, model, this);

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
  };

  this.showDishDetailsScreen = function showDishDetailsScreen(id) {
    welcomeView.hide();
    sidebarView.show();
    dishSearchView.hide();
    dishItemView.hide();
    dishDetailsView.show(id);
    confirmView.hide();
    printView.hide();
  };

  this.showConfirmScreen = function showConfirmScreen() {
    welcomeView.hide();
    sidebarView.hide();
    dishSearchView.hide();
    dishItemView.hide();
    dishDetailsView.hide();
    confirmView.show();
    printView.hide();
  };

  this.showPrintScreen = function showPrintScreen() {
    welcomeView.hide();
    sidebarView.hide();
    dishSearchView.hide();
    dishItemView.hide();
    dishDetailsView.hide();
    confirmView.hide();
    printView.show();
  };

  showWelcomeScreen();

});
