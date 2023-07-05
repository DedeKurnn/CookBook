import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import CheckboxFilter from "./UI/CheckboxFilter";
import * as filterItems from "../constants";

const Filter = () => {
	return (
		<div className="w-full pt-4">
			<h3 className="mb-2 font-semibold">Filter your recipe</h3>
			<div className="w-full bg-white overflow-hidden">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-200 px-4 py-2 text-left text-normal font-medium text-dark-green hover:bg-primary-yellow focus:outline-none focus-visible:ring focus-visible:ring-dark-green focus-visible:ring-opacity-75">
								<span>Dish types</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-dark-green`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-normal text-gray-900">
								<p className="mb-2">The dish type a recipe belongs to</p>
								<CheckboxFilter items={filterItems.dishType} />
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-200 px-4 py-2 text-left text-normal font-medium text-dark-green hover:bg-primary-yellow focus:outline-none focus-visible:ring focus-visible:ring-dark-green focus-visible:ring-opacity-75">
								<span>Dietary type</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-dark-green`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-normal text-gray-900">
								<p className="mb-2">
									A diet refers to the specific pattern of eating and consuming
									food that an individual follows.
								</p>
								<CheckboxFilter items={filterItems.diet} />
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-200 px-4 py-2 text-left text-normal font-medium text-dark-green hover:bg-primary-yellow focus:outline-none focus-visible:ring focus-visible:ring-dark-green focus-visible:ring-opacity-75">
								<span>Health issues</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-dark-green`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-normal text-gray-900">
								<p className="mb-2">Filter your recipe by health conditions.</p>
								<CheckboxFilter items={filterItems.health} />
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-200 px-4 py-2 text-left text-normal font-medium text-dark-green hover:bg-primary-yellow focus:outline-none focus-visible:ring focus-visible:ring-dark-green focus-visible:ring-opacity-75">
								<span>Cuisine Types</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-dark-green`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-normal text-gray-900">
								<p className="mb-2">The type of cuisine of the recipe</p>
								<CheckboxFilter items={filterItems.cuisineType} />
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-yellow-200 px-4 py-2 text-left text-normal font-medium text-dark-green hover:bg-primary-yellow focus:outline-none focus-visible:ring focus-visible:ring-dark-green focus-visible:ring-opacity-75">
								<span>Meal Types</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-5 w-5 text-dark-green`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-normal text-gray-900">
								<p className="mb-2">The type of meal a recipe belongs to</p>
								<CheckboxFilter items={filterItems.mealType} />
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
};

export default Filter;
