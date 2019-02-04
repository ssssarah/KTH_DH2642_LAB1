var WelcomeCtrl = function(welcomeView, model, gsc) {

  welcomeView.createBtn.click(function() {
    gsc.showScreen("SELECT_DISH");
  });
  
};
