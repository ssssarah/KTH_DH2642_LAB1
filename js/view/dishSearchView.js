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
var DishSearchView = function(container, model) {

  this.searchBtn = container.find("#searchBtn");
  //var relativePath = "images/";

  //init the select of dish types
  var dishTypeSelect = container.find("#dishType")[0];
  var dishTypes = model.getAllDishTypes();
  for (var key in dishTypes) {
    var dishType = dishTypes[key];
    var el = document.createElement("option");
    el.setAttribute("value", dishType);
    el.innerText = dishType;
    dishTypeSelect.appendChild(el);
  }

  this.type = container.find("#dishType");
  this.filter = container.find("#filter");


  //populate the list of dishes
  //var dishList = container.find("#dishList")[0];
  //var type = getParameterByName("dishType");
  //var filter = getParameterByName("filter");
  //filter = filter !== "undefined" ? filter : false;
  //dishes = model.getAllDishes(type, filter);

  /*
  for (var key in dishes) {
    var dish = dishes[key];

    var item = document.createElement("button");
    item.classList.add("btn");
    item.classList.add("wrapper");
    item.classList.add("myBg");
    item.classList.add("border");
    item.classList.add("border-dark");
    item.classList.add("mx-4");
    item.classList.add("my-4");

    //var item = document.createElement("div");

    var img = document.createElement("img");
    img.classList.add("border-bottom");
    img.classList.add("border-dark");
    img.src = relativePath + dish.image;
    img.alt = dish.name;
    img.style = "width:200px;";

    var title = document.createElement("h5");
    //var t = document.createTextNode(dish.name);

    title.innerHTML = dish.name;
    item.appendChild(img);
		item.appendChild(title);
    dishList.appendChild(item);
  }
  */

  this.hide = function(index) {
    container.hide();
  }
  this.show = function() {
    container.show();
  }
};

function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return ''; // Get all type of dishes while switching to the page
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
