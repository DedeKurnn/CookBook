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
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
    const apiKey = import.meta.env.VITE_REACT_APP_EDAMAM_API_KEY;
    const appId = import.meta.env.VITE_REACT_APP_EDAMAM_APP_ID;

	const totalQuery = `${healthQuery}${mealTypeQuery}${dishTypeQuery}${dietQuery}${cuisineTypeQuery}`.replace(/ /g, '%20');
	const url = `${baseUrl}?type=public&beta=false&q=${query}&app_id=${appId}&app_key=${apiKey}${totalQuery}`;
	console.log(url)
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
				dishTypeQuery,
				mealTypeQuery,
				dietQuery,
				cuisineTypeQuery,
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
