var WelcomeView = function(container, model) {
  // Confirm Dinner Button
  this.createBtn = container.find("#createBtn");

  this.hide = function(index) {
    container.hide();
  };
  this.show = function() {
    container.show();
  };
};
