/**
 * DinnerModel Object constructor
 */
var DinnerModel = function () {

    this.relativePath = "https://webknox.com/recipeImages/";

    this.dishTypes = [
        "main course", "side dish", "dessert", "appetizer", "salad",
        "bread", "breakfast", "soup", "beverage", "sauce", "drink"
    ];

    let numberOfGuests = 1;
    let selectedDishId = 0;
    let menu = [];


    this.setSelectedDishId = function(id){
        selectedDishId = id;
    };

    this.getSelectedDishId = function(){
        return selectedDishId;
    };

    this.setNumberOfGuests = function (num) {
        numberOfGuests = num;
        this.notifyObservers();
    };

    this.getNumberOfGuests = function () {
        return numberOfGuests;
    };

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        return menu;
    };

    this.getDishPrice = function(id){return 0;}; //TODO
    this.getTotalMenuPrice = function(){return 0}; //TODO

    /*this.getDishPrice = function (id){
        let dish = this.getDish(id);
        let dishPrice = 0;

        for (let key in dish.ingredients) {
            dishPrice += dish.ingredients[key].price;
        }

        return dishPrice;
    };*/

    //Returns all ingredients for all the dishes on the menu.
    /*this.getAllIngredients = function () {
        let ingredients = [];
        for (let key in menu) {
            let dishIngredients = menu[key].ingredients;
            for (let key2 in dishIngredients) {
                let index = ingredients.findIndex(function (item) {
                    return item.name === dishIngredients[key2].name;
                });
                if (index != -1) {
                    ingredients[index].quantity += dishIngredients[key2].quantity;
                    ingredients[index].price += dishIngredients[key2].price;
                } else
                    ingredients.push(dishIngredients[key2]);
            }
        }
        return ingredients;
    };*/

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    /*this.getTotalMenuPrice = function () {
        let price = 0;
        let allIngredients = this.getAllIngredients();
        for (let key in allIngredients) {
            price += allIngredients[key].price;
        }
        return price * numberOfGuests;
    };*/

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (id) {
        this.removeDishFromMenu(id);
        menu.push(id);
        this.notifyObservers();
    };

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        if(index = menu.indexOf(id) != -1)
            menu.splice(index, 1);
    };

    function handleHTTPError(response) {
        if(response.ok)
            return response;
        throw Error(response.statusText);
    }

    const authHeader = {"X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"};

    const createFormData = object => {
        let ret = new FormData();
        Object.keys(object).forEach(k => ret.append(k, object[k]));
        return ret;
    };

    /**
     *
     * @param params
     * @returns {Promise<>}
     */
    this.getAllDishes = function(params){
        let url = new URL("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search");
        url.search = new URLSearchParams(params).toString();

        return fetch(url.toString(), {
            method: "GET",
            headers: authHeader
        })
            .then(handleHTTPError)
            .then(response => response.json());
    };


    /**
     *
     * @param id
     * @returns {Promise<>}
     */
    this.getDish = function(id){

        let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`;

        return fetch(url, {
            method: "GET",
            headers: authHeader
        })
            .then(handleHTTPError)
            .then(response => response.json());
    };

    /*****************************************
     Observable implementation
     *****************************************/
    this._observers = [];

    this.addObserver = function (observer) {
        this._observers.push(observer);
    };

    this.notifyObservers = function (arg) {
        for (let i = 0; i < this._observers.length; i++) {
            this._observers[i].update(arg);
        }
    };

};


/* TODO
- handling errors
- dishPrice/totalMenuPrice
- dish object stored in menu, not rerequested every time
- fix loader
- fix hamburger price
- fix print screen nb of guests
- mAAAAAAAAYbe add the listener to each dish item
- update of screens: pass down the nature of the update (nbOfGuests, menu add ...)
- create view only when necessary - optional (ask about it)
 */