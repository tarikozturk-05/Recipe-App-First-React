import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import RecipeCars from "./RecipeCars";

const Home = () => {
  const [values, setValues] = useState({
    foodName:"",
    selectType:""
  })

  const apiId ="5972fd79";
  const apiKeyy = "d32a3880a1f03cf9ed0b00c612bce233"
  const url =
    `https://api.edamam.com/api/recipes/v2?type=public&q=${values.foodName}&app_id=${apiId}&app_key=${apiKeyy}&mealType=${values.selectType}`;

  const [recep, setRecep] = useState([]);
  const getApı = async () => {
    try {
      const { data } = await axios(url);
      //  console.log(data)
      setRecep(data.hits);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  console.log(recep);

  const onSubmitLogin=(e)=>{
    e.preventDefault() ;
    console.log("calistii")
    getApı()
      }


  useEffect(() => {
   
      getApı();
      

  }, []);




  const handleChange=(e)=>{

   
    setValues(
      {...values, [e.target.id]:e.target.value }
    )
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={onSubmitLogin} className="container w-50">
        <fieldset>
          <legend>Coss AnkaDöner</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Food Name
            </label>
            <input 
              onChange={handleChange}
              type="text"
              id="foodName"
              value={values.foodName}
              className="form-control"
              placeholder="Example Pizza"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              Meal Type?
            </label>
            <select onChange={handleChange} id="selectType" className="form-select">
              <option disabled selected>
              Meal Type?
              </option>
              <option value="breakfast">Breakfast</option>
              <option value="dinner">Dinner</option>
              <option value="lunch">Lunch</option>
              <option value="snack">Snack</option>
              <option value="teatime">Teatime</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
      {recep.length > 0 && <div className="my-4 d-flex flex-wrap gap-3 align-items-center justify-content-center">
        { recep.map((arr)=><RecipeCars arr={arr}/>)}
        {/* <RecipeCars recep={recep} setRecep={setRecep} /> */}
      </div>  }
    </div>
  );
};

export default Home;

{
  /* https://api.edamam.com/search?q=pizza&app_id=5972fd79&app_key=d32a3880a1f03cf9ed0b00c612bce233&mealType=lunch

    https://api.edamam.com/search?q=pizza&app_id=5972fd79&app_key=d32a3880a1f03cf9ed0b00c612bce233&mealType=dinner

     https://api.edamam.com/api/recipes/v2/recipe?type=public&app_id=5972fd79&app_key=d32a3880a1f03cf9ed0b00c612bce233&mealType=pasta 

  https://www.themealdb.com/api/json/v1/1/search.php?s=pizza */
}
