export const getRecipes = async (seachedQuery) => {
  if (!seachedQuery) {
    console.error("Search query is empty");
    return [];
  }

  try {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${seachedQuery}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.recipes || [];
  } catch (error) {
    console.log("Error While calling API,", error.message);
    return [];
  }
};

export const getRecipe = async (recipeId) => {
  try {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.recipe || {};
  } catch (error) {
    console.log("Error While calling API,", error.message);
    return {};
  }
};
