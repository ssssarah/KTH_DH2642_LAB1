$(function () {

    const model = new DinnerModel();
    const generalController = new GeneralController();

    // Create views and their controllers
    const welcomeView = new WelcomeView($("#welcomeView"), model);
    const welcomeCtrl = new WelcomeCtrl(welcomeView, model, generalController);

    const sidebarView = new SidebarView($("#sidebarView"), model);
    const sidebarCtrl = new SidebarCtrl(sidebarView, model, generalController);

    const dishItemView = new DishItemView($("#dishItemView"), model);
    const dishItemCtrl = new DishItemCtrl(dishItemView, model, generalController);

    const dishSearchView = new DishSearchView($("#dishSearchView"), model);
    const dishSearchCtrl = new DishSearchCtrl(dishSearchView, model, generalController, dishItemView);

    const dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
    const dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model, generalController);

    const confirmView = new ConfirmView($("#confirmView"), model);
    const confirmCtrl = new ConfirmCtrl(confirmView, model, generalController);

    const printView = new PrintView($("#printView"), model);
    const printCtrl = new PrintCtrl(printView, model, generalController);



    generalController.addView(welcomeView);
    generalController.addView(sidebarView);
    generalController.addView(dishSearchView);
    generalController.addView(dishDetailsView);
    generalController.addView(confirmView);
    generalController.addView(printView);

    generalController.addScreen('WELCOME', [welcomeView]);
    generalController.addScreen('CONFIRM', [confirmView]);
    generalController.addScreen('DISH_SEARCH', [sidebarView, dishSearchView, dishItemView]);
    generalController.addScreen('DISH_DETAILS', [sidebarView, dishDetailsView]);
    generalController.addScreen('PRINT', [printView]);

    generalController.showScreen("WELCOME");

});

