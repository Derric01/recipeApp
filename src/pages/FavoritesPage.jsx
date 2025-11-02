import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";
import ThemeSwitcher from "../components/ThemeSwitcher";

const FavoritesPage = () => {
	const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

	return (
		<div className='bg-base-200 flex-1 p-4 sm:p-6 md:p-10 min-h-screen pb-20 sm:pb-6'>
			<div className='max-w-screen-lg mx-auto'>
				<div className='mb-6 sm:mb-8 px-2 sm:px-0'>
					<div className='flex justify-between items-start mb-4'>
						<div className='flex-1'></div>
						<div className='flex-1 text-center'>
							<h1 className='font-bold text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
								My Favorites
							</h1>
							<p className='text-base-content/70 mt-2 text-sm sm:text-base'>
								{favorites.length > 0 
									? `You have ${favorites.length} saved recipe${favorites.length > 1 ? 's' : ''}`
									: 'No favorites yet - start adding some!'}
							</p>
						</div>
						<div className='flex-1 flex justify-end'>
							<ThemeSwitcher />
						</div>
					</div>
				</div>

				{favorites.length === 0 && (
					<div className='h-[60vh] sm:h-[70vh] flex flex-col items-center justify-center gap-4 sm:gap-6 animate-fade-in px-4'>
						<img src='/404.svg' className='h-1/2 sm:h-2/3 max-h-96 opacity-75' alt='No favorites' />
						<div className='text-center'>
							<p className='text-lg sm:text-xl font-semibold text-base-content mb-2'>No favorites yet</p>
							<p className='text-base-content/60 text-sm sm:text-base'>Start exploring and save your favorite recipes!</p>
						</div>
					</div>
				)}

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-6 px-2 sm:px-0'>
					{favorites.map((recipe) => (
						<RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} />
					))}
				</div>
			</div>
		</div>
	);
};
export default FavoritesPage;
