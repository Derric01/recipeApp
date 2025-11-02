import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

const getTwoValuesFromArray = (arr) => {
	return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
	const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
	const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.label));

	const addRecipeToFavorites = () => {
		let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
		const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.label === recipe.label);

		if (isRecipeAlreadyInFavorites) {
			favorites = favorites.filter((fav) => fav.label !== recipe.label);
			setIsFavorite(false);
		} else {
			favorites.push(recipe);
			setIsFavorite(true);
		}

		localStorage.setItem("favorites", JSON.stringify(favorites));
	};

	return (
		<div className={`flex flex-col rounded-xl ${bg} overflow-hidden p-3 relative shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform cursor-pointer border border-base-300`}>
			<a
				href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
				target='_blank'
				className='relative h-40 group'
				rel='noreferrer'
			>
				<div className='skeleton absolute inset-0 rounded-lg' />
				<img
					src={recipe.image}
					alt={recipe.label}
					className='rounded-lg w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500 group-hover:brightness-90'
					onLoad={(e) => {
						e.currentTarget.style.opacity = 1;
						e.currentTarget.previousElementSibling.style.display = "none";
					}}
				/>
				<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg' />
				
				<div
					className='absolute bottom-2 left-2 bg-base-100 rounded-full px-3 py-1 cursor-pointer flex items-center
							 gap-1 text-sm shadow-md font-semibold
							'
				>
					<Soup size={16} className='text-purple-500' /> {recipe.yield} Servings
				</div>

				<div
					className='absolute top-2 right-2 bg-base-100 rounded-full p-2 cursor-pointer shadow-lg hover:scale-110 transition-transform duration-200'
					onClick={(e) => {
						e.preventDefault();
						addRecipeToFavorites();
					}}
				>
					{!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500 transition-all' />}
					{isFavorite && <Heart size={20} className='fill-red-500 text-red-500 animate-pulse' />}
				</div>
			</a>

			<div className='flex mt-3'>
				<p className='font-bold tracking-wide text-base-content line-clamp-2'>{recipe.label}</p>
			</div>
			<p className='my-2 text-sm text-base-content/70 font-medium'>
				🍽️ {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen
			</p>

			<div className='flex gap-2 mt-auto flex-wrap'>
				{healthLabels.map((label, idx) => (
					<div key={idx} className={`flex gap-1 ${badge} items-center px-2 py-1 rounded-full text-xs font-semibold shadow-sm`}>
						<HeartPulse size={14} />
						<span className='tracking-tight'>{label}</span>
					</div>
				))}
			</div>
		</div>
	);
};
export default RecipeCard;
