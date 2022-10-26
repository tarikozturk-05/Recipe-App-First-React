import React from 'react'
import Navbar from '../../components/navbar/Navbar'


const Home = () => {
  const getApı =()={}

  return (
    <div>
     <Navbar/>
     <form>
  <fieldset >
    <legend>Disabled fieldset example</legend>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
    </div>
    <div className="mb-3">
      <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
      <select id="disabledSelect" className="form-select">
      <option disabled selected>select</option>
        <option value="breakfast">Breakfast</option>
        <option value="dinner">Dinner</option>
        <option value="lunch">Lunch</option>
        <option value="snack">Snack</option>
        <option value="teatime">Teatime</option>
       
      </select>
    </div>
  
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>

   
    
     {/* https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${id}&app_key=${key}&mealType=Lunch */}
    
    </div>
  )
}

export default Home

  {/* https://api.edamam.com/search?q=pizza&app_id=5972fd79&app_key=d32a3880a1f03cf9ed0b00c612bce233&mealType=lunch

    https://api.edamam.com/search?q=pizza&app_id=5972fd79&app_key=d32a3880a1f03cf9ed0b00c612bce233&mealType=dinner

     https://api.edamam.com/api/recipes/v2/recipe?type=public&app_id=5972fd79&app_key=d32a3880a1f03cf9ed0b00c612bce233&mealType=pasta 

  https://www.themealdb.com/api/json/v1/1/search.php?s=pizza */}

     