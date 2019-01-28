var ConfirmCtrl = function(view, model, gsc) {

  view.printBtn.click(function() {
    gsc.showPrintScreen();
  });

  view.backBtn.click(function() {
    gsc.showSelectDishScreen();
  });

}
