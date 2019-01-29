/** ExampleView Object constructor
 *
 * This object represents the code for one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view Object like this for every view in your UI.
 *
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var DishDetailsView = function (container, model) {
  var relativePath = "images/";

  this.addToMenu = container.find("#addToMenu");
  this.backBtn = container.find("#backBtn");
  this.id = null;
  var numberOfGuests = 1;
  var ingredientList = container.find("#ingredientList")[0];
  var totalPrice = 0;

  this.hide = function(index) {
    container.hide();
  };
  this.show = function(dishId) {
    container.show();
    this.id = dishId;
    var dish = model.getDish(dishId);
    numberOfGuests = model.getNumberOfGuests();
    container.find("#dishName").html(dish.name);
    container.find("#dishImg").attr("src", relativePath + dish.image);
    container.find("#dishPrep").html(dish.description);
    container.find("#numberOfGuests").html(numberOfGuests);

    while(ingredientList.firstChild) {
      ingredientList.firstChild.remove();
    }
    totalPrice = 0;
    for(key in dish.ingredients) {
      var ingredient = dish.ingredients[key];
      var item = document.createElement("li");
      item.classList.add("row");
      var quantity = document.createElement("span");
      quantity.classList.add("col-2");
      quantity.innerHTML = ingredient.quantity + " " + ingredient.unit;
      var name = document.createElement("span");
      name.classList.add("col-6");
      name.innerHTML = ingredient.name;
      var currency = document.createElement("span");
      currency.classList.add("col-2");
      currency.innerHTML = "SEK";
      var price = document.createElement("span");
      price.classList.add("col-2");
      price.innerHTML = (ingredient.price * numberOfGuests).toFixed(2);
      totalPrice += ingredient.price * numberOfGuests;
      item.appendChild(quantity);
      item.appendChild(name);
      item.appendChild(currency);
      item.appendChild(price);
      ingredientList.appendChild(item);
    }

    container.find("#price").html("SEK " + totalPrice.toFixed(2));
  };

}
