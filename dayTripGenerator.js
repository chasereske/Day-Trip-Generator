"use strict"

function myDayTripGenerator (){

        //Create initial arrays to call from

        let potentialDestinations = ["Lexington", "Chicago", "Detroit", "Cincinnati", "Louisville", "Milwaukee"];
        let potentialRestaurantType = ["Fine Dining", "Casual Dining", "Family Style", "Fast Food", "Cafe", "Buffet", "Food Truck"];
        let potentialTransportation = ["Car", "Bus", "Taxi", "Uber", "Rental Car", "Motorcycle"];
        let potentialEntertainment = ["Movie", "Concert", "Bars", "Zoo", "Comedy Club", "Theatre"];

        //Create initial functions to randomly generate aspects of the trip 

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

        
        //Create functions that will provide a way of selecting individual aspects of the trip

        function chooseYourDestination(){
            let changeDestination = prompt("Do you want to change the destination?", "Must enter 'Yes' or 'No'");
            let newDestination;
            
            if(changeDestination === "Yes"){
                while (changeDestination === "Yes"){
                    let nextDestination = randomDestination();
                    let answeredNextDestination = prompt("What about going to " + nextDestination + "?", "Must enter 'Yes' or 'No'");
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
                    let nextRestaurant = randomRestaurantType();
                    let answeredNextRestaurant = prompt("What about going to " + nextRestaurant + "?", "Must enter 'Yes' or 'No'");
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
                    let nextTransportation = randomTransportation();
                    let answeredNextTransportation = prompt("What about going to " + nextTransportation + "?", "Must enter 'Yes' or 'No'");
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
                    let nextEntertainment = randomEntertainment();
                    let answeredNextEntertainment = prompt("What about going to " + nextEntertainment + "?", "Must enter 'Yes' or 'No'");
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

        //Create a function to store all the choices made about the trip by the user

        function theChosenTrip(){
            let chosenDestination;
            let chosenRestaurant;
            let chosenTransportation;
            let chosenEntertainment;
            
            let finishedDecisions = "No";
            let questioningDecions = "No";

                if(finishedDecisions === "No"){
                    while(questioningDecions === "No"){
                        chosenDestination = chooseYourDestination();
                        chosenRestaurant = chooseYourRestaurant();
                        chosenTransportation = chooseYourTransportation();
                        chosenEntertainment = chooseYourEntertainment();

                        alert("Your not so randomly generated day trip consists of going by " + chosenTransportation + " to " + chosenDestination + ", eating at a " + chosenRestaurant + " restaurant, and your entertainment being " + chosenEntertainment + "!");
                        questioningDecions = prompt("Do you like your new trip?", "Must enter 'Yes' or 'No'.");
                    }
                    console.log("Your not so randomly generated day trip consists of going by " + chosenTransportation + " to " + chosenDestination + ", eating at a " + chosenRestaurant + " restaurant, and your entertainment being " + chosenEntertainment + "!");
                } 
                
         
        }
        
        //Begin calling aspects of the function the need to run

        let initialDestination = randomDestination();
        let initialRestaurant = randomRestaurantType();
        let initialTransport = randomTransportation();
        let initialEntertainment = randomEntertainment();

        alert("Your randomly generated day trip consists of going by " + initialTransport + " to " + initialDestination + ", eating at a " + initialRestaurant + " restaurant, and your entertainment being " + initialEntertainment + "!");


        let confirmTrip = prompt("Do you like your generated Day Trip?", "Must enter 'Yes' or 'No'" );
    
    let tripImpression = "No";

    while(tripImpression === "No") {
        
        if (confirmTrip === "Yes") {
            tripImpression = "Yes";
            console.log("Your randomly generated day trip consists of going by " + initialTransport + " to " + initialDestination + ", eating at a " + initialRestaurant + " restaurant, and your entertainment being " + initialEntertainment + "!");
        } else {
            let finalizedTrip = theChosenTrip(); 
            tripImpression = "Yes";
        }
        
    }
}

let myPlans = myDayTripGenerator();