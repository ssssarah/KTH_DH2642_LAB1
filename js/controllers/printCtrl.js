var PrintCtrl = function(printView, model, gsc) {

  printView.$backBtn.click(function() {
    gsc.showScreen("SELECT_DISH");
  });

};
