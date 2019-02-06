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
    let selectedDish = {};
    let menu = [];

    this.setSelectedDish = function(dish) {
      selectedDish = dish;
    };

    this.getSelectedDish = function() {
      return selectedDish;
    };

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

    this.getDishPrice = function(dish){
      if(typeof(dish.pricePerServing) !== 'undefined')
        return dish.pricePerServing * numberOfGuests;
      else {
        return dish.extendedIngredients.length * numberOfGuests;
      }
    }; //TODO

    this.getTotalMenuPrice = function(){
      let price = 0;
      for (let key in menu) {
        if(typeof(menu[key].pricePerServing) !== 'undefined')
          price += menu[key].pricePerServing;
        else {
          price += menu[key].extendedIngredients.length;
        }
      }
      return price * numberOfGuests;
    }; //TODO

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
    /*
    this.addDishToMenu = function (id) {
        this.removeDishFromMenu(id);
        menu.push(id);
        this.notifyObservers();
    };
    */
    this.addDishToMenu = function () {
        this.removeDishFromMenu(selectedDish.id);
        menu.push(selectedDish);
        this.notifyObservers();
    };

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        let index = menu.map(function(e) {return e.id;}).indexOf(id);
        if(index != -1)
            menu.splice(index, 1);
    };

    let handleHTTPError = function(response){
        if(response.ok)
            return response.json();
        else
            return new Promise(function(resolve){
                resolve({"error": response.statusText});
            });
    };

    const authHeader = {"X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"};

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
        }).then(function(response){
            return handleHTTPError(response);
        }).catch(function(error) {
            return new Promise(function(resolve){
                resolve({"error": error.message});
            });
        });
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
        }).then(function(response){
            return handleHTTPError(response);
        }).catch(function(error) {
            return new Promise(function(resolve){
                resolve({"error": error.message});
            });
        });
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
- fix loader
- mAAAAAAAAYbe add the listener to each dish item
- update of screens: pass down the nature of the update (nbOfGuests, menu add ...)
- create view only when necessary - optional (ask about it)
 */
