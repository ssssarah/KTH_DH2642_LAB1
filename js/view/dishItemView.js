var DishItemView = function (container, model) {

    this.$dishList = container.find("#dishList");

    this.update = function (type = null, filter = null) {

         if(container.is(":visible")){

             console.log("dishItem update");

             let self = this;
             this.$dishList.empty();

             let params = {};

             if(type){
                 params["type"] = type;
             }

             if(filter){
                 params["query"] = filter;
             }

             return model.getAllDishes(params).then(function(dishes) {

                 console.log(dishes);

                 if(dishes.error){
                     alert("Error item: " + dishes.error);
                     return;
                 }

                 dishes = dishes.results;

                 for (let key in dishes) {
                     let dish = dishes[key];
                     let item = document.createElement("button");
                     item.setAttribute("data-id", dish.id);
                     item.classList.add("btn");
                     item.classList.add("wrapper");
                     item.classList.add("myBg");
                     item.classList.add("border");
                     item.classList.add("border-dark");
                     item.classList.add("mx-4");
                     item.classList.add("my-4");

                     let img = document.createElement("img");
                     img.classList.add("border-bottom");
                     img.classList.add("border-dark");
                     img.src = model.relativePath + dish.image;
                     img.alt = dish.title;
                     img.style.width = "200px";

                     let title = document.createElement("div");
                     title.innerText = dish.title;

                     item.appendChild(img);
                     item.appendChild(title);

                     self.$dishList.append(item);
                 }


             });

         }

    };

    this.hide = function() {
        container.hide();
    };
    this.show = function () {
        container.show();
        return this.update();
    };


};
