var ConfirmCtrl = function(confirmView, model, gsc) {

  confirmView.$printBtn.click(function() {
    gsc.showPrintScreen();
  });

  confirmView.$backBtn.click(function() {
    gsc.showSelectDishScreen();
  });

};
