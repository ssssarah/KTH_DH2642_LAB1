var GeneralController = function() {
    this.views = [];
    this.screens = {};

    this.hideAll = function(){
        for(let key in this.views){
            this.views[key].hide();
        }
    };

    this.addView = function(view){
        this.views.push(view);
    };

    this.addScreen = function(name, viewsToShow) {
        this.screens[name] = viewsToShow;
    };

    this.showLoader = function(){
        $("#loader").show();
    };

    this.hideLoader = function(){
        $("#loader").hide();
    };

    this.showScreen = function(name) {
        this.hideAll();
        return Promise.all(this.screens[name].map(screen => screen.show()));
    };
};