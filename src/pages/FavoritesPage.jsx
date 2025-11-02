import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";

const FavoritesPage = () => {
	const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

	return (
		<div className='bg-base-200 flex-1 p-6 md:p-10 min-h-screen'>
			<div className='max-w-screen-lg mx-auto'>
				<div className='mb-8'>
					<h1 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
						My Favorites
					</h1>
					<p className='text-base-content/70 mt-2'>
						{favorites.length > 0 
							? `You have ${favorites.length} saved recipe${favorites.length > 1 ? 's' : ''}`
							: 'No favorites yet - start adding some!'}
					</p>
				</div>

				{favorites.length === 0 && (
					<div className='h-[70vh] flex flex-col items-center justify-center gap-6 animate-fade-in'>
						<img src='/404.svg' className='h-2/3 max-h-96 opacity-75' alt='No favorites' />
						<div className='text-center'>
							<p className='text-xl font-semibold text-base-content mb-2'>No favorites yet</p>
							<p className='text-base-content/60'>Start exploring and save your favorite recipes!</p>
						</div>
					</div>
				)}

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
					{favorites.map((recipe) => (
						<RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} />
					))}
				</div>
			</div>
		</div>
	);
};
export default FavoritesPage;
