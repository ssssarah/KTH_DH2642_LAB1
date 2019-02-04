var GeneralController = function() {
    this.views = [];
    this.screens = {};

    this.hideAll = function(){
        for(let key in this.views){
            console.log(this.views[key]);
            this.views[key].hide();
        }
    };

    this.addView = function(view){
        this.views.push(view);
    };

    this.addScreen = function(name, viewsToShow) {
        this.screens[name] = viewsToShow;
    };

    this.showScreen = function(name) {
        this.hideAll();
        for(let key in this.screens[name]){
            this.screens[name][key].show();
        }
    };
};