var SidebarCtrl = function(sideBarView, model, gsc) {

  sideBarView.$confirmBtn.click(function() {
    gsc.showConfirmScreen();
  });

  sideBarView.$numberOfGuests.change(function(event) {
    model.setNumberOfGuests(event.target.value);
  });

};
