import { useEffect } from "react";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

const RecipeProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [recipeList, setRecipeList] = useState([]);

  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([])

  const navigate = useNavigate()


  function handleAddToFavorite(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1) {
      cpyFavoritesList.push(getCurrentItem)
    } else {
      cpyFavoritesList.splice(index)
    }

    setFavoritesList(cpyFavoritesList)
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      setRecipeList(response.data.data.recipes);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
    
  };

 

  return (
    <GlobalContext.Provider
      value={{ searchParams, setSearchParams, handleSubmit, recipeList,recipeDetailsData, setRecipeDetailsData,favoritesList, setFavoritesList,handleAddToFavorite }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default RecipeProvider;

export function useGlobalContext() {
  return useContext(GlobalContext);
}
