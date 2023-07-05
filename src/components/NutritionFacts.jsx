import PropTypes from "prop-types";

const NutritionFacts = ({ response }) => {
	const nutrition = response.recipe;
	return (
		<section className="w-1/3">
			<div className="p-2 border-4 border-black w-fit">
				<h1 className="font-black text-5xl w-full border-b-4 border-black">
					Nutrition Facts
				</h1>
				<span className="border-b-[16px] border-black w-full block">
					{nutrition.yield} servings per recipe
				</span>
				<div className="flex justify-between items-end border-b-8 border-black">
					<div className="font-bold flex flex-col">
						<span className="font-semibold">Amount per serving</span>
						<span className="text-3xl">Calories</span>
					</div>
					<span className="text-4xl font-bold">
						{parseInt(nutrition.calories / nutrition.yield)}
					</span>
				</div>
				<div>
					<span className="text-right w-full block border-b-2 border-black">
						Daily value
					</span>
					<ul className="divide-y-2 divide-black">
						{nutrition.digest.map((item, index) => (
							<li key={index} className="flex flex-col w-full justify-between">
								<div
									className={`w-full flex ${
										item.label === "Sodium" && "border-b-[16px] border-black"
									}`}
								>
									<div className="flex w-full justify-between">
										<span
											className={`${
												(item.label === "Fat" ||
													item.label === "Carbs" ||
													item.label === "Protein" ||
													item.label === "Sodium" ||
													item.label === "Cholesterol") &&
												"font-bold"
											}`}
										>
											{item.label}
										</span>
										<span>
											{parseInt(item.total / nutrition.yield)}
											{item.unit}
										</span>
									</div>
									<span className="w-2/5 text-right">
										{parseInt(item.daily / nutrition.yield)}
										{item.unit}
									</span>
								</div>
								{item.sub && (
									<ul className="divide-y-2 divide-black">
										{item.sub.map((item, index) => (
											<li key={index} className="flex border-t-2 border-black">
												<div className="flex w-full justify-between pl-8">
													<span>{item.label}</span>
													<span>
														{parseInt(item.total / nutrition.yield)}
														{item.unit}
													</span>
												</div>
												<span className="w-2/5 text-right">
													{parseInt(item.daily / nutrition.yield)}
													{item.unit}
												</span>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

NutritionFacts.propTypes = {
	response: PropTypes.object.isRequired,
};

export default NutritionFacts;
