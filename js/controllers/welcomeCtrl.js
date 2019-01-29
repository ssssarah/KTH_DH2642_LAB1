var WelcomeCtrl = function(welcomeView, model, gsc) {

  welcomeView.createBtn.click(function() {
    gsc.showSelectDishScreen();
  });
  
};
