import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilter] = useState('All')

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
  const updatedFood = [...foods, newFood]
   setFoods(updatedFood)
  }

  //DELETING OBJECTS
  /*
  function handleDelClick (id) {
 const updatedFood = foods.filter(food => food.id !== id)
      setFoods(updatedFood)
  }
      */

  //

  function handleLiClick (id) {
  const newUpdate = foods.map (food => {
    if (food.id === id) {
      return {
        ...food,
        heatLevel: food.heatLevel + 1
      }
    }
    else {
      return food;
    }

  }) 
setFoods(newUpdate)  
}


function handleFilter (event) {
setFilter(event.target.value)
}

const foodToDisplay = foods.filter(food => {
  if (filterBy === "All") {
    return true;
  } else {
    return food.cuisine === filterBy;
  }
})  


  const foodList = foodToDisplay.map((food) => (
    <li key={food.id}     onClick = {() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter">
       <option value="All" onChange={handleFilter}>All</option>
       <option value="American">American</option>
       <option value="Sichuan">Sichuan</option>
       <option value="Thai">Thai</option>
       <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
