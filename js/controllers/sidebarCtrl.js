var SidebarCtrl = function(view, model, gsc) {

  view.confirmBtn.click(function() {
    gsc.showConfirmScreen();
  });

  view.numberOfGuests.change(function() {
    model.setNumberOfGuests(view.numberOfGuests.val());
  });

}
