var WelcomeView = function(container, model) {
  // Confirm Dinner Button
  this.createBtn = container.find("#createBtn");

  this.hide = function() {
    container.hide();
  };
  this.show = function() {
    container.show();
    return Promise.resolve();
  };
};
