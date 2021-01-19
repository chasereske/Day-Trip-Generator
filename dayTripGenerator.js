"use strict"

function myDayTripGenerator (){

        let potentialDestinations = ["Lexington", "Chicago", "Detroit", "Cincinnati", "Louisville", "Milwaukee"];
        let potentialRestaurantType = ["Fine Dining", "Casual Dining", "Family Style", "Fast Food", "Cafe", "Buffet", "Food Truck"];
        let potentialTransportation = ["Car", "Bus", "Taxi", "Uber", "Rental Car", "Motorcycle"];
        let potentialEntertainment = ["Movie", "Concert", "Bars", "Zoo", "Comedy Club", "Theatre"];

        function randomDestination(){
             return potentialDestinations[Math.floor(Math.random() * potentialDestinations.length)];
        }

        function randomRestaurantType(){
            return potentialRestaurantType[Math.floor(Math.random() * potentialRestaurantType.length)];
        }
        
        function randomTransportation(){ 
            return potentialTransportation[Math.floor(Math.random() * potentialTransportation.length)];
        }
        
        function randomEntertainment(){ 
            return potentialEntertainment[Math.floor(Math.random() * potentialEntertainment.length)];
        }

        
        let initialDestination = randomDestination();
        let initialRestaurant = randomRestaurantType();
        let initialTransport = randomTransportation();
        let initialEntertainment = randomEntertainment();

        console.log("Your randomly generated day trip consists of going by " + initialTransport + " to " + initialDestination + ", eating at a " + initialRestaurant + " restaurant, and your entertainment being " + initialEntertainment + "!");
        

        function chooseYourDestination(){
            let changeDestination = prompt("Do you want to change the destination?", "Must enter 'Yes' or 'No'");
            let newDestination;
            
            if(changeDestination === "Yes"){
                while (changeDestination === "Yes"){
                    let nextDestination = randomDestination;
                    let answeredNextDestination = prompt("What about going to " + nextDestination + "?", "must enter 'Yes' or 'No'");
                    if(answeredNextDestination === "Yes") {
                        newDestination = nextDestination; 
                        changeDestination = "No";
                    } else {
                        alert("Let's try another!");
                    }
                }
            } else {
                newDestination = initialDestination;
            }
            return newDestination;
        }

        function chooseYourRestaurant(){
            let changeRestaurant = prompt("Do you want to change the restaurant type?", "Must enter 'Yes' or 'No'");
            let newRestaurant;
            
            if(changeRestaurant === "Yes"){
                while (changeRestaurant === "Yes"){
                    let nextRestaurant = randomRestaurantType;
                    let answeredNextRestaurant = prompt("What about going to " + nextRestaurant + "?", "must enter 'Yes' or 'No'");
                    if(answeredNextRestaurant === "Yes") {
                        newRestaurant = nextRestaurant; 
                        changeRestaurant = "No";
                    } else {
                        alert("Let's try another!");
                    }
                }
            } else {
                newRestaurant = initialRestaurant;
            }
            return newRestaurant;
        }

        function chooseYourTransportation(){
            let changeTransportation = prompt("Do you want to change the transportation?", "Must enter 'Yes' or 'No'");
            let newTransportation;
            
            if(changeTransportation === "Yes"){
                while (changeTransportation === "Yes"){
                    let nextTransportation = randomTransportation;
                    let answeredNextTransportation = prompt("What about going to " + nextTransportation + "?", "must enter 'Yes' or 'No'");
                    if(answeredNextTransportation === "Yes") {
                        newTransportation = nextTransportation; 
                        changeTransportation = "No";
                    } else {
                        alert("Let's try another!");
                    }
                }
            } else {
                newTransportation = initialTransport;
            }
            return newTransportation;
        }

        function chooseYourEntertainment(){
            let changeEntertainment = prompt("Do you want to change the entertainment?", "Must enter 'Yes' or 'No'");
            let newEntertainment;
            
            if(changeEntertainment === "Yes"){
                while (changeEntertainment === "Yes"){
                    let nextEntertainment = randomEntertainment;
                    let answeredNextEntertainment = prompt("What about going to " + nextEntertainment + "?", "must enter 'Yes' or 'No'");
                    if(answeredNextEntertainment === "Yes") {
                        newEntertainment = nextEntertainment; 
                        changeEntertainment = "No"; 
                    } else {
                        alert("Let's try another!");
                    }
                }
            } else {
                newEntertainment = initialEntertainment;
            }
            return newEntertainment;
        }

        function theChosenTrip(){
            let chosenDestination = chooseYourDestination();
            let chosenRestaurant = chooseYourRestaurant();
            let chosenTransportation = chooseYourTransportation();
            let chosenEntertainment = chooseYourEntertainment();

            console.log("Your not so randomly generated day trip consists of going by " + chosenTransportation + " to " + chosenDestination + ", eating at a " + chosenRestaurant + " restaurant, and your entertainment being " + chosenEntertainment + "!");
        }

        let initialTrip = initialRandomTrip;
        console.log(initialTrip);

        let confirmTrip = prompt("Do you like your generated Day Trip?", "Must enter 'Yes' or 'No'" );
    
    let tripImpression = "No";

    while(tripImpression === "No") {
        
        if (confirmTrip === "Yes") {
            tripImpression = "Yes";
            console.log("Remember: " + initialTrip);
        } else {
            letfinalizedTrip = theChosenTrip;
            tripImpression = "No"; 
        }
        
    }
}

let myPlans = myDayTripGenerator(); 
console.log(myPlans);
