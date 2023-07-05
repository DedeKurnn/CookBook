import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
	const [query, setQuery] = useState("");
	const [healthQuery, setHealthQuery] = useState("");
	const [mealTypeQuery, setMealTypeQuery] = useState("");
	const [dishTypeQuery, setDishTypeQuery] = useState("");
	const [cuisineTypeQuery, setCuisineTypeQuery] = useState("");
	const [dietQuery, setDietQuery] = useState("");
	const [response, setResponse] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	const appId = '&app_id=af8f2662&app_key=8d08930086bef226d85e93b83466ed15'

	const totalQuery = `${healthQuery}${mealTypeQuery}${dishTypeQuery}${dietQuery}${cuisineTypeQuery}`.replace(/ /g, '%20');
	const url =
		`https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${query}${appId}${totalQuery}`;	

	const onQuery = (value, type) => {
		switch (type) {
			case "health":
				setHealthQuery(value.join(`&${type}=`).trim());
				break;
			case "diet":
				setDietQuery(value.join(`&${type}=`).trim());
				break;
			case "mealType":
				setMealTypeQuery(value.join(`&${type}=`).trim());
				break;
			case "cuisineType":
				setCuisineTypeQuery(value.join(`&${type}=`).trim());
				break;
			case "dishType":
				setDishTypeQuery(value.join(`&${type}=`).trim());
				break;
			default:
				throw new Error("Invalid query type!");
		}
	};

	return (
		<RecipeContext.Provider
			value={{
				onQuery,
				healthQuery,
				mealTypeQuery,
				dishTypeQuery,
				cuisineTypeQuery,
				dietQuery,
				url,
				query,
				setQuery,
				response,
				setResponse,
				loading,
				setLoading,
				error,
				setError,
				appId
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
};

RecipeContextProvider.propTypes = {
	children: PropTypes.node,
};
