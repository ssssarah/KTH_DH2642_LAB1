var ConfirmCtrl = function(confirmView, model, gsc) {

  confirmView.$printBtn.click(function() {
    gsc.showScreen("PRINT");
  });

  confirmView.$backBtn.click(function() {
    gsc.showScreen("SELECT_DISH");
  });

};
