import React from 'react'
import { useGlobalContext } from '../context/Context'
import RecipeItem from '../components/RecipeItem'

const Home = () => {
const {recipeList}=useGlobalContext();

  return (
    <>
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
    {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item}  key={item.id}/>)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
    </>
  )
}

export default Home