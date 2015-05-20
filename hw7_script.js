//wait for DOM to be ready
$(function() {

  //donut shop constructor
  function Shop(location, minCustomer, maxCustomer, donutAverage, hoursOpen) {

    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.donutAverage = donutAverage;
    this.hoursOpen = hoursOpen;

    this.randomCustArray = [];
    this.donutsPerHourArray = [];
    this.donutsPerDay = 0;
    this.hourlyAverage = 0;

    //create an array of random numbers for each hour open and store in an array
    for (var i = 0; i < this.hoursOpen; i++) {
      this.randomCustArray[i] = (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }

    //method to return the nubmer of donuts for the random hours generated
    this.getDonutsPerHour = function () {
      for (var i = 0; i < this.randomCustArray.length; i++) {
        this.donutsPerHourArray[i] = Math.ceil(this.randomCustArray[i] * this.donutAverage);
      }
      return this.donutsPerHourArray;
    };

    //method to return the total donuts needed for the randomly generated day
    this.getDonutsPerDay = function () {
      this.getDonutsPerHour();
      for (var i = 0; i < this.randomCustArray.length; i++) {
        this.donutsPerDay += this.donutsPerHourArray[i];
      }
      return this.donutsPerDay;
    };

    //method to return the average donuts per hour
    this.getHourlyAverage = function () {
      this.hourlyAverage = Math.ceil(this.getDonutsPerDay() / this.hoursOpen);
      return this.hourlyAverage;
    };

    //in order for the table to generate, these methods have to be called
    this.getDonutsPerHour();
    this.getDonutsPerDay();
    this.getHourlyAverage();
  }

  //shop manager object constructor
  function DonutMaster() {

    var managerName = name;

    //method to add a new shop to the current list of shops and their parameters.  This is LOCAL ONLY, does not change values in the rest of the script
    this.addShop = function(){

      //create a new local array to be eddited
      var addShopArray = [];
      for (var i = 0; i < printArray.length; i++) {
        addShopArray.push([printArray[i].location, printArray[i].hoursOpen]);
      }

      //get parameters for the new shop and add them to the array
      var newShopName = prompt("Enter a name or location for the new shop");
      var newShopDaily = prompt("Enter a number value for the hours per day the shop is open");

      addShopArray.push([newShopName, newShopDaily]);

      //loop through the array and display the values, including the new shop
      for (var j = 0; j < addShopArray.length; j++) {
        alert("Shop name and hours open: " + addShopArray[j]);
      }

    };

  }

  //create shop opbjects
  var downtown = new Shop("Downtown", 8, 43, 4.5, 24);
  var capitolHill = new Shop("Capitol Hill", 4, 37, 2, 10);
  var southLakeUnion = new Shop("South Lake Union", 9, 23, 6.33, 8);
  var wedgewood = new Shop("Wedgewood", 2, 28, 1.25, 10);
  var ballard = new Shop("Ballard", 8, 58, 3.75, 10);
  var printArray = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];

  //create manager object
  var managerBob = new DonutMaster();

  //table display variable
  var downtownTable = false;
  var capitolHillTable = false;
  var southLakeUnionTable = false;
  var wedgewoodTable = false;
  var ballardTable = false;

  //animate counter
  var animateCounter = 1;

  //print detailed information to the console
  for (var i = 0; i < printArray.length; i++) {

    console.log(printArray[i].location);

    console.log("For the randomly generated day, the " + printArray[i].location + " store, which is open " + printArray[i].hoursOpen + " hours per day, had the following customers per hour: " + printArray[i].randomCustArray);

    console.log("The corresponding donuts per hour needed (rounded up) given the average of " + printArray[i].donutAverage + " donuts per customer, for the " + printArray[i].location + " store, therefore would be as follows: " + printArray[i].donutsPerHourArray);

    console.log("Given these numbers, the total number of donuts needed for this day would be " + printArray[i].donutsPerDay + " at an average of " + printArray[i].hourlyAverage + " donuts an hour (rounded up).");
  }

  //function to display all the data from the simulation.
  function displayData (shopButton) {

    //switch statement to find specific data by location name
    switch(shopButton) {

      case "downtown":
        if (downtownTable === false){
          $("tbody").append("<tr id='downtown'></tr>");
          $("#downtown").append("<td>" + downtown.location + "</td>");
          $("#downtown").append("<td>" + downtown.hoursOpen + "</td>");
          $("#downtown").append("<td>" + downtown.hourlyAverage + "</td>");
          $("#downtown").append("<td>" + downtown.donutsPerDay + "</td>");
          $("#downtown").fadeIn();
          downtownTable = true;
        } else {$("#downtown").toggle("explode");}


      break;

      case "capitolHill":
        if (capitolHillTable === false){
          $("tbody").append("<tr id='capitolHill'></tr>");
          $("#capitolHill").append("<td>" + capitolHill.location + "</td>");
          $("#capitolHill").append("<td>" + capitolHill.hoursOpen + "</td>");
          $("#capitolHill").append("<td>" + capitolHill.hourlyAverage + "</td>");
          $("#capitolHill").append("<td>" + capitolHill.donutsPerDay + "</td>");
          $("#capitolHill").fadeIn();
          capitolHillTable = true;
        } else {$("#capitolHill").fadeToggle();}
      break;

      case "southLakeUnion":
        if (southLakeUnionTable === false){
          $("tbody").append("<tr id='southLakeUnion'></tr>");
          $("#southLakeUnion").append("<td>" + southLakeUnion.location + "</td>");
          $("#southLakeUnion").append("<td>" + southLakeUnion.hoursOpen + "</td>");
          $("#southLakeUnion").append("<td>" + southLakeUnion.hourlyAverage + "</td>");
          $("#southLakeUnion").append("<td>" + southLakeUnion.donutsPerDay + "</td>");
          $("#southLakeUnion").fadeIn();
          southLakeUnionTable = true;
        } else {$("#southLakeUnion").toggle("explode");}
      break;

      case "wedgewood":
        if (wedgewoodTable === false){
          $("tbody").append("<tr id='wedgewood'></tr>");
          $("#wedgewood").append("<td>" + wedgewood.location + "</td>");
          $("#wedgewood").append("<td>" + wedgewood.hoursOpen + "</td>");
          $("#wedgewood").append("<td>" + wedgewood.hourlyAverage + "</td>");
          $("#wedgewood").append("<td>" + wedgewood.donutsPerDay + "</td>");
          $("#wedgewood").fadeIn();
          wedgewoodTable = true;
        } else {$("#wedgewood").fadeToggle();}
      break;

      case "ballard":
        if (ballardTable === false){
          $("tbody").append("<tr id='ballard'></tr>");
          $("#ballard").append("<td>" + ballard.location + "</td>");
          $("#ballard").append("<td>" + ballard.hoursOpen + "</td>");
          $("#ballard").append("<td>" + ballard.hourlyAverage + "</td>");
          $("#ballard").append("<td>" + ballard.donutsPerDay + "</td>");
          $("#ballard").fadeIn();
          ballardTable = true;
        } else {$("#ballard").toggle("explode");}
      break;

      default:
      alert("Invalid name");
    }
  }

  //function to do 3 different animations on a cycle
  function animate() {

    switch(animateCounter) {

      case 1:
        $("#donutPic").fadeIn("slow").animate({left: "+=3000"}, 4500);
        $("#donutPic").animate({left: "-800"}, 4500);
        animateCounter = 2;
      break;

      case 2:
        $("#homer").fadeOut().fadeIn().fadeOut().fadeIn();
        $("#donutPlate").fadeOut().fadeIn().fadeOut().fadeIn();
        animateCounter = 3;
      break;

      case 3:
        $("#homer").effect("shake");
        $("button").effect("bounce");
        $("#donutPlate").effect("explode").delay(1000).fadeIn();
        animateCounter = 1;
      break;

      default:
        alert("Error");

    }
  }

  //button function calls (I'm sure theres a better way of doing this)
  $('#refreshButton').on('click', function() {
      window.history.go(0);
    }
  );

  $('#addShopButton').on('click', function() {
      managerBob.addShop();
    }
  );

  $('#animateButton').on('click', function() {
      animate();
    }
  );

  //nav buttons
  $('#downtownButton').on('click', function() {
      displayData("downtown");
    }
  );

  $('#capitolHillButton').on('click', function() {
      displayData("capitolHill");
    }
  );

  $('#sluButton').on('click', function() {
      displayData("southLakeUnion");
    }
  );

  $('#wedgewoodButton').on('click', function() {
      displayData("wedgewood");
    }
  );

  $('#ballardButton').on('click', function() {
      displayData("ballard");
    }
  );

});
