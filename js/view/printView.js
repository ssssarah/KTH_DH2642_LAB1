var PrintView = function (container, model) {
    this.$backBtn = container.find("#print_backBtn");
    this.$printMenu = container.find("#printMenu");

    this.hide = function () {
        container.hide();
    };

    this.show = function () {

        this.$printMenu.empty();
        let menu = model.getFullMenu();

        Promise.all(menu.map(id => this.addItemToPrint(id))).then(function(){
            container.show();
        });
    };

    this.addItemToPrint = function(id){

        let self = this;
        return model.getDish(id).then(function(dish){

            let li = document.createElement("li");
            li.classList.add("row");
            li.classList.add("ml-2");
            li.classList.add("mr-4");
            li.classList.add("mb-3");

            let divImg = document.createElement("div");
            divImg.classList.add("col-sm-2");

            let img = document.createElement("img");
            img.setAttribute("src", dish.image);
            img.setAttribute("alt", dish.title);
            img.classList.add("img-fluid");
            img.classList.add("bigImage");
            img.classList.add("border");
            img.classList.add("border-dark");

            divImg.appendChild(img);

            let divDesc = document.createElement("div");
            divDesc.classList.add("col-sm-4");

            let h3 = document.createElement("h3");
            h3.classList.add("text-uppercase");
            h3.innerText = dish.title;

            let p = document.createElement("p");
            p.innerText =  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor " +
                "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" +
                "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

            divDesc.appendChild(h3);
            divDesc.appendChild(p);

            let divPrep = document.createElement("div");
            divPrep.classList.add("col-sm-6");

            let h5 = document.createElement("h5");
            h5.classList.add("text-uppercase");
            h5.innerText = "Preparation";

            let span = document.createElement("span");
            span.innerText = dish.instructions;

            divPrep.appendChild(h5);
            divPrep.appendChild(span);

            li.appendChild(divImg);
            li.appendChild(divDesc);
            li.appendChild(divPrep);

            self.$printMenu.append(li);

        });

    }

};



