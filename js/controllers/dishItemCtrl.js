let DishItemCtrl = function(dishItemView, model, gsc) {

  dishItemView.$dishList.on("click", "button", function(e) {
      model.setSelectedDishId(e.currentTarget.getAttribute("data-id"));

      gsc.showLoader();
      //sleep(5000);
      gsc.showScreen("DISH_DETAILS").then(function(){
          gsc.hideLoader();
      });

  });

};

function sleep( millisecondsToWait )
{
    var now = new Date().getTime();
    while ( new Date().getTime() < now + millisecondsToWait )
    {
        /* do nothing; this will exit once it reaches the time limit */
        /* if you want you could do something and exit */
    }
}
