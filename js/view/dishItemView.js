
var DishItemView = function (container, model) {
  var relativePath = "images/";
  var dishList = container.find("#dishList")[0];
  this.dishList = container.find("#dishList");

  showDishes("", "");
  
  this.updateSearchResults = function(type, filter) {
    while(dishList.firstChild) {
      dishList.firstChild.remove();
    }
    showDishes(type, filter);
    /*
    var dishes = model.getAllDishes(type, filter);
    for (var key in dishes) {
      var dish = dishes[key];

      var item = document.createElement("button");
      item.id = dish.id;
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

      var title = document.createElement("h6");
      //var t = document.createTextNode(dish.name);

      title.innerHTML = dish.name;
      item.appendChild(img);
  		item.appendChild(title);
      dishList.appendChild(item);
    }
    */
  };

  function showDishes(type, filter) {
    var dishes = model.getAllDishes(type, filter);
    for (var key in dishes) {
      var dish = dishes[key];

      var item = document.createElement("button");
      item.id = dish.id;
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

      var title = document.createElement("h6");
      //var t = document.createTextNode(dish.name);

      title.innerHTML = dish.name;
      item.appendChild(img);
  		item.appendChild(title);
      dishList.appendChild(item);
    }
  }

  this.hide = function(index) {
    container.hide();
  };
  this.show = function() {
    container.show();
  };
};
