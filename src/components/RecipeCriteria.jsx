import PropTypes from "prop-types";
import { ListIcon, Check } from "lucide-react";
import { RecipeContext } from "../context";
import { useContext } from "react";

const RecipeCriteria = ({ className }) => {
	const {
		query,
		healthQuery,
		dishTypeQuery,
		cuisineTypeQuery,
		dietQuery,
		mealTypeQuery,
	} = useContext(RecipeContext);

	const filterType = [
		{
			key: "Dish type",
			selectedFilter: dishTypeQuery.split("&dishType=").slice(1),
		},
		{
			key: "Dietary type",
			selectedFilter: dietQuery.split("&diet=").slice(1),
		},
		{
			key: "Health condition",
			selectedFilter: healthQuery.split("&health=").slice(1),
		},
		{
			key: "Cuisine type",
			selectedFilter: cuisineTypeQuery.split("&cuisineType=").slice(1),
		},
		{
			key: "Meal type",
			selectedFilter: mealTypeQuery.split("&mealType=").slice(1),
		},
	];

	return (
		<div className={`${className}`}>
			<h2 className="text-xl font-semibold flex gap-3 mb-9">
				<ListIcon />
				Your search criterias
			</h2>
			<div className="flex flex-col gap-4">
				<input
					type="text"
					className="flex h-10 w-full border-b-2 border-b-gray-500 px-3 py-2 focus:outline-none font-semibold"
					value={query.replace(/%20/g, " ")}
					readOnly
				/>
				{filterType.map((item) => {
					if (item.selectedFilter.length !== 0) {
						return (
							<div key={item.key} className="mt-4">
								<h3 className="font-semibold">{item.key}</h3>
								<ul>
									{item.selectedFilter.map((item) => (
										<li key={item.index} className="flex items-center gap-2">
											<Check className="w-4 h-4 mt-[2px]"/>
											{item}
										</li>
									))}
								</ul>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

RecipeCriteria.propTypes = {
	className: PropTypes.string,
	query: PropTypes.string,
};

export default RecipeCriteria;
