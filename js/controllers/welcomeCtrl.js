var WelcomeCtrl = function(welcomeView, model, gsc) {

  welcomeView.createBtn.click(function() {
    gsc.showLoader();
    gsc.showScreen("DISH_SEARCH").then(function(){
      gsc.hideLoader();
    });
  });
  
};
