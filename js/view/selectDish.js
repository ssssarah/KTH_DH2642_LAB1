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
var SelectDishView = function (container, model) {


	var relativePath = "C:\\Users\\Sarah\\Desktop\\dinnerplanner-html\\images\\";

	var dishList = container.find("#dishList")[0];
	var numberOfGuests = container.find("#numberOfGuests");

	var dishes = model.getAllDishes();

	for(var key in dishes){
		var dish = dishes[key];

		var card = document.createElement("div");
		card.classList.add("card");
		card.classList.add("col-sm-3");
		card.classList.add("border");
		card.classList.add("border-dark");
		card.classList.add("mr-3");
		card.style.width = "18rem";

    	var img = document.createElement("img");
    	img.classList.add("card-img-top");
    	img.src =  relativePath + dish.image;

    	card.appendChild(img);
    	dishList.appendChild(card);
	}

};
 
