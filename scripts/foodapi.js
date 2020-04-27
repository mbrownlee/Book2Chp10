//First assign a variable to hold the HTML element where I want the data to end up
const foodItems = document.querySelector("#foodList")
//fetch gets the data from the database
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        //THIS IS THE ONLY PLACE WHERE I HAVE ACCESS TO THE DATA FROM THE API
        console.table(parsedFoods)
        //RETURNS AN ARRAY. THEN NEED TO ITERATE THE ARRAY.
     for (const food of parsedFoods) {
         //I NEED TO CONVERT EVERY OBJECT TO A STRING. FUNCTION MAKEFOODCARD DOES THAT FOR ME. 
         const foodCard = makeFoodCard(food)
         //NOW I HAVE SRING REPRESENTATION I NEED TO STORE IT IN THE QUERY ABOVE
         foodItems.innerHTML += foodCard
     }   
      
    })
//CONVERTS OBJECT FROM INSIDE THE ARRAY RETURNED FROM FETCH INTO A STRING
   function makeFoodCard (food) {
       return `
       <h2>${food.name}</h2>
        <h3>${food.ethnicity}</h3>
        <h3>${food.category}<h3>`
  
   }
   

   
