import PropTypes from "prop-types";
import { RecipeContext } from "../context";
import { useContext } from "react";
import { Spinner } from "@material-tailwind/react";
import { FaceFrownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const RecipeList = ({ response }) => {
	const { loading, error } = useContext(RecipeContext);
	const regex = /v2\/(.*?)\?type/

	const uniqueResponse = response.hits.map(item => {
		return {
			...item,
			id: item._links.self.href.match(regex)
		}
	})

	console.log(response);

	if (response.hits.length === 0) {
		return (
			<div className="h-80 mx-auto flex flex-col justify-center items-center opacity-30">
				<FaceFrownIcon className="w-24 h-24 mb-8" />
				<p className="text-2xl font-bold">No recipe found, try again</p>
			</div>
		);
	}

	return (
		<section className="mx-auto px-4">
			{loading && <Spinner className="h-12 w-12" />}

			{error && (
				<div>
					<p>An error occured!</p>
				</div>
			)}

			{!error && (
				<ul className="grid grid-cols-2 w-[90%] mx-auto mt-12 gap-8">
					{uniqueResponse.map((item, index) => (
						<li
							key={item.recipe.label + index}
							className="grid grid-cols-3 gap-4 p-4 shadow-lg border border-gray-300 rounded-2xl"
						>
							<img
								src={item.recipe.image}
								alt={item.recipe.label}
								className="rounded-xl aspect-square object-cover"
							/>
							<div className="col-span-2">
								<Link to={`recipe/${item.id[1]}`} className="text-xl block font-semibold mb-4 hover:text-dark-blue hover:underline hover:cursor-pointer w-fit">
									{item.recipe.label}
								</Link>
								<span className="font-medium">Ingredients:</span>
								<p>
									{item.recipe.ingredients
										.slice(0, 8)
										.map((ingredient, index) => (
											<span key={index}>
												{ingredient.food}
												{index !== item.recipe.ingredients.length - 1
													? ", "
													: "."}
											</span>
										))}{" "}
									<span className="font-medium hover:text-blue-800 hover:cursor-pointer">
										(read more...)
									</span>
								</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

RecipeList.propTypes = {
	response: PropTypes.string,
};

export default RecipeList;
