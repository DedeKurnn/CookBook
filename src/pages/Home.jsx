import SearchForm from "../components/SearchForm";
import { Button } from "@material-tailwind/react";
import food from "../assets/food.png";
import RecipeCriteria from "../components/RecipeCriteria";
import RecipeList from "../components/RecipeList";
import { useContext, useRef } from "react";
import { RecipeContext } from "../context";

const Home = () => {
	const { response } = useContext(RecipeContext);
	const sectionRef = useRef(null)

	const scrollToSearchHandler = () => {
		sectionRef.current.scrollIntoView({behavior: 'smooth'});
	}

	return (
		<>
			<section className="w-full bg-primary-yellow bg-opacity-40">
				<div className="container px-4 mx-auto md:w-[90%] flex gap-8 w-full h-screen justify-center items-center">
					<div className="w-1/2">
						<h1 className="font-caprasimo text-6xl mb-8">
							Let&apos;s Cook With Popular and Healthy Recipes
						</h1>
						<p>
							You have all the ingredients but don&apos;t know what to cook?
						</p>
						<p>We got your back!</p>
						<div className="flex gap-4 mt-4">
							<Button onClick={scrollToSearchHandler} className="bg-dark-green" size="lg">
								Search recipe
							</Button>
							<Button className="bg-primary-green" size="lg">
								Learn how
							</Button>
						</div>
					</div>
					<div className="w-1/2">
						<img src={food} alt="Food picture" />
					</div>
				</div>
			</section>
			<section className="mx-auto px-24 pt-24" ref={sectionRef} >
				<h1 className="text-center text-4xl font-semibold mt-8">
					What can I make with...
				</h1>
				<p className="text-center text-lg w-[80%] mx-auto mt-4">
					Embark on a delightful culinary journey with our recipe finder app,
					where flavor and inspiration seamlessly blend to satisfy your taste
					buds.
				</p>
				<div className="w-[90%] flex mt-8 mx-auto p-8 bg-primary-green gap-2 rounded-[2rem]">
					<SearchForm className="w-1/2 bg-white px-8 py-8 rounded-[1rem]" />
					<RecipeCriteria className="w-1/2 bg-white px-8 py-8 rounded-[1rem]" />
				</div>
			</section>
			{Object.keys(response).length !== 0 && <RecipeList response={response} />}
		</>
	);
};

export default Home;
