/**
 * DinnerModel Object constructor
 */
var DinnerModel = function () {

    this.relativePath = "https://webknox.com/recipeImages/";

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

    this.getDishPrice = function (id){
        let dish = this.getDish(id);
        let dishPrice = 0;

        for (let key in dish.ingredients) {
            dishPrice += dish.ingredients[key].price;
        }

        return dishPrice;
    };

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function () {
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
    };

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {
        let price = 0;
        let allIngredients = this.getAllIngredients();
        for (let key in allIngredients) {
            price += allIngredients[key].price;
        }
        return price * numberOfGuests;
    };

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (id) {
        let dish = this.getDish(id);
        if (menu.findIndex(item =>  item.id == id) != -1) {
            this.removeDishFromMenu(id);
        }
        menu.push(dish);
        this.notifyObservers();
        // if (dish != null)
        //   menu.push(dish);
    };

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        for (let key in menu) {
            if (menu[key].id == id) {
                menu.splice(key, 1);
                return;
            }
        }
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


    /*this.getDish = function(id){

        return fetch("https://api.imgur.com/3/image", {
            method: "GET",
            body: createFormData({id: id}),
            headers: authHeader
        })
            .then(handleHTTPError)
            .then(response => response.json());
    };*/


    this.dishTypes = [
        "main course", "side dish", "dessert", "appetizer", "salad",
        "bread", "breakfast", "soup", "beverage", "sauce", "drink"
    ];

    this.cuisine = [
        "african", "chinese", "japanese", "korean", "vietnamese", "thai", "indian", "british", "irish",
        "french", "italian", "mexican", "spanish", "middle eastern", "jewish", "american", "cajun",
        "southern", "greek", "german", "nordic", "eastern european", "caribbean", "latin american"
    ];

    this.diet = [
        "pescetarian", "lacto vegetarian", "ovo vegetarian", "vegan", "vegetarian"
    ];

    this.intolerance = [
        "dairy", "egg", "gluten", "peanut", "sesame", "seafood", "shellfish", "soy", "sulfite", "tree nut", "wheat"
    ];

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
