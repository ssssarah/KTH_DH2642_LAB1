var PrintView = function (container, model) {
  this.backBtn = container.find("#backBtn");

  this.hide = function(index) {
    container.hide();
  }
  this.show = function() {
    container.show();
  }
};
