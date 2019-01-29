var ConfirmView = function (container, model) {
  this.backBtn = container.find("#backBtn");
  this.printBtn = container.find("#printBtn");

  // Register to listen for updates from the model.
	model.addObserver(this);

	var loadMenu = function() {

	};
	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadMenu();
	};

  this.hide = function(index) {
    container.hide();
  };
  this.show = function() {
    container.show();
  };
};
