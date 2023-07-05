import NutritionFacts from "../components/NutritionFacts";
import { useLoaderData } from "react-router-dom";
import { PlusIcon, ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

const RecipeDetail = () => {
	const data = useLoaderData("recipe-details");
	return (
		<div className="pt-32 flex gap-8 w-[90%] mx-auto">
			<section className="w-2/3">
				<Link
					to=".."
					className="flex gap-2 font-semibold mb-8 px-6 rounded-full items-center py-2 bg-primary-yellow w-fit"
				>
					<ArrowLeftIcon /> Back
				</Link>
				<h1 className="text-4xl font-bold mb-8 underline">
					{data.recipe.label}
				</h1>
				<div className="flex gap-8">
					<img
						src={data.recipe.images.REGULAR.url}
						alt={data.recipe.label}
						className="w-1/2 object-cover rounded-2xl"
					/>
					<div className="flex flex-col gap-2 ">
						<h2 className="block text-2xl font-semibold">About this recipe</h2>
						<span className="block">
							Cuisine type:{" "}
							{data.recipe.cuisineType.map((item) => (
								<span key={item}>{item} </span>
							))}
						</span>
						<span className="block">
							Meal type:{" "}
							{data.recipe.mealType.map((item) => (
								<span key={item}>{item} </span>
							))}
						</span>
						<span className="block">
							Diet labels: {data.recipe.dietLabels.map((item) => item)}
						</span>
						<span className="block">
							Cautions:{" "}
							{data.recipe.cautions.map((item) => (
								<span key={item}>{item} </span>
							))}
						</span>
						<span className="block">
							Health labels:{" "}
							{data.recipe.healthLabels.map((item) => (
								<span key={item}>{item} </span>
							))}
						</span>
					</div>
				</div>
				<div className="mt-8">
					<h2 className="font-semibold text-2xl mb-2">Ingredients</h2>
					<ul className="">
						{data.recipe.ingredientLines.map((item, index) => (
							<li key={index} className="flex gap-2 items-center mb-2">
								<PlusIcon className="w-4 h-4" />
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="mt-8">
					<h2 className="text-2xl font-semibold mb-2">Directions</h2>
					<p className="">
						Read more about the instruction{" "}
						<a href={data.recipe.url} className="underline hover:text-blue-800">
							here
						</a>
					</p>
				</div>
			</section>
			<NutritionFacts response={data} />
		</div>
	);
};

export default RecipeDetail;
