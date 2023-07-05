import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { env } from 'import.meta'

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
	const appId = env.REACT_APP_EDAMAM_APP_ID;
	const apiKey = env.REACT_APP_EDAMAM_API_KEY;
	const baseUrl = env.REACT_APP_BASE_URL;

	const totalQuery = `${healthQuery}${mealTypeQuery}${dishTypeQuery}${dietQuery}${cuisineTypeQuery}`.replace(/ /g, '%20');
	const url =
		`${baseUrl}?type=public&beta=false&q=${query}&app_id=${appId}&api_key=${apiKey}${totalQuery}`;	

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
