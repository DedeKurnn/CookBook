import { useState, useContext, useEffect, useCallback } from "react";
import { RecipeContext } from "../context";
import Filter from "./Filter";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "lucide-react";

const SearchForm = ({ className }) => {
	const [text, setText] = useState("");
	const { setQuery, setLoading, setError, setResponse, url } = useContext(RecipeContext);

	const inputChangeHandler = (e) => {
		setText(e.target.value);
	};

	const inputBlurHandler = () => {
		setQuery(text.replace(/ /g, "%20"));
	};

	const searchHandler = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch(url.trim());

			if (!res.ok) {
				throw new Error(res.status)
			} 

			const data = await res.json();
			setResponse(data);

		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}, [setError, setLoading, setResponse, url]);

	useEffect(() => {
		searchHandler
	}, [searchHandler])

	return (
		<div className={`${className}`}>
			<h2 className="text-xl font-semibold flex gap-3">
				<ShoppingCartIcon strokeWidth={2} className="h-6 w-6 pt-1" />
				What is the ingredient you want to use in your recipe?
			</h2>
			<p className="text-medium mt-4">
				Type your available ingredient in the search box, then select the filter
				from the dropdown menu below.
			</p>
			<form className="mt-4 flex flex-col items-end">
				<input
					type="text"
					className="flex h-10 w-full rounded-md border border-gray-500 px-3 py-2"
					placeholder="Enter ingredient"
					value={text}
					onChange={inputChangeHandler}
					onBlur={inputBlurHandler}
				/>
				<Filter />
				<Button
					className="flex items-center justify-center gap-2 mt-8 w-2/5 bg-dark-green"
					size="sm"
					onClick={searchHandler}
				>
					<MagnifyingGlassIcon strokeWidth={1} className="h-6 w-6" />
					Search recipe
				</Button>
			</form>
		</div>
	);
};

SearchForm.propTypes = {
	className: PropTypes.string,
};

export default SearchForm;
