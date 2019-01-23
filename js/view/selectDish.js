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
var SelectDishView = function(container, model) {

  var relativePath = "images/";

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

  //populate the list of dishes
  var dishList = container.find("#dishList")[0];
  var type = getParameterByName("dishType");
  var search = getParameterByName("search");
  search = search !== "undefined"
    ? search
    : false;
  var dishes = model.getAllDishes(type, search);

  for (var key in dishes) {
    var dish = dishes[key];

    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-sm-2");
    card.classList.add("border");
    card.classList.add("border-dark");
    card.classList.add("mr-3");
    card.style.width = "18rem";

    //var item = document.createElement("div");

    var img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = relativePath + dish.image;

    var body = document.createElement("div");
    body.classList.add("card-body");

    var form = document.createElement("form");
    form.setAttribute("method", "get");
    form.setAttribute("action", "dishDetails.html");

    var id = document.createElement("input");
    id.setAttribute("type", "hidden");
    id.setAttribute("value", dish.id);
    id.setAttribute("name", "dishId");

    var btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.classList.add("btn");
    btn.classList.add("btn-light");
    btn.innerText = dish.name;

    form.appendChild(id);
    form.appendChild(btn);
    body.appendChild(form);
    card.appendChild(img);
		card.appendChild(body);
    dishList.appendChild(card);
  }

};

function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
