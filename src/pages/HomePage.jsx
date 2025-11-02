import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [lastRequestTime, setLastRequestTime] = useState(0);

	const fetchRecipes = async (searchQuery) => {
		// Rate limiting: Wait at least 6 seconds between requests (10 requests per minute)
		const now = Date.now();
		const timeSinceLastRequest = now - lastRequestTime;
		const minDelay = 6000; // 6 seconds
		
		if (timeSinceLastRequest < minDelay) {
			const waitTime = minDelay - timeSinceLastRequest;
			setError(`Please wait ${Math.ceil(waitTime / 1000)} seconds before searching again (rate limit: 10 requests/min)`);
			return;
		}

		setLoading(true);
		setRecipes([]);
		setError(null);
		try {
			const res = await fetch(
				`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&type=public&q=${searchQuery}&from=0&to=5`
			);
			
			if (!res.ok) {
				if (res.status === 429) {
					throw new Error("Rate limit exceeded. Please wait a minute before trying again.");
				}
				const errorData = await res.json();
				throw new Error(errorData.message || `API Error: ${res.status}`);
			}
			
			const data = await res.json();
			console.log('API Response:', data);
			setRecipes(data.hits || []);
			setLastRequestTime(Date.now());
		} catch (error) {
			console.error('Fetch error:', error);
			setError(error.message);
			setRecipes([]);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchRecipes("chicken");
	}, []);

	const handleSearchRecipe = (e) => {
		e.preventDefault();
		const query = e.target[0].value;
		if (query.trim()) {
			setSearchQuery(query);
			fetchRecipes(query);
		}
	};

	return (
		<div className='bg-base-200 p-4 sm:p-6 md:p-10 flex-1 min-h-screen pb-20 sm:pb-6'>
			<div className='max-w-screen-lg mx-auto'>
				{/* Enhanced Search Section */}
				<div className='mb-6 sm:mb-8 animate-fade-in'>
					<div className='text-center mb-4 sm:mb-6'>
						<h1 className='font-bold text-3xl sm:text-4xl md:text-6xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-3'>
							Recipe Finder
						</h1>
						<p className='text-base-content/70 text-base sm:text-lg px-4'>Discover delicious recipes for every occasion</p>
					</div>
					
					<form onSubmit={handleSearchRecipe} className='max-w-2xl mx-auto px-2 sm:px-0'>
						<label className='input input-bordered shadow-lg flex items-center gap-2 bg-base-100 hover:shadow-xl transition-shadow duration-300 h-14 sm:h-12'>
							<Search size={"24"} className='text-purple-500 flex-shrink-0' />
							<input
								type='text'
								className='text-base sm:text-sm md:text-md grow'
								placeholder='Search recipes... (e.g., pasta, salad)'
								defaultValue={searchQuery}
							/>
							<button type='submit' className='btn btn-primary btn-sm sm:btn-md min-w-[70px] touch-manipulation active:scale-95'>
								Search
							</button>
						</label>
					</form>
				</div>

				{/* Results Header */}
				<div className='mb-4 sm:mb-6 px-2 sm:px-0'>
					<h2 className='font-bold text-xl sm:text-2xl md:text-4xl'>
						{searchQuery ? `Results for "${searchQuery}"` : 'Recommended Recipes'}
					</h2>
					<p className='text-base-content/60 font-semibold ml-1 my-2 text-sm tracking-tight'>
						{!loading && recipes.length > 0 && `Found ${recipes.length} delicious recipes`}
						{!loading && recipes.length === 0 && !error && 'No recipes found'}
						{loading && 'Searching for recipes...'}
					</p>
				</div>

				{/* Error Message */}
				{error && (
					<div className='alert alert-error shadow-lg mb-6 animate-fade-in'>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<div>
								<h3 className='font-bold'>Error!</h3>
								<div className='text-sm'>{error}</div>
							</div>
						</div>
					</div>
				)}

				{/* Recipe Grid */}
				<div className='grid gap-4 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0'>
					{!loading && recipes && recipes.length > 0 &&
						recipes.map(({ recipe }, index) => (
							<RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
						))}
					
					{!loading && recipes && recipes.length === 0 && !error && (
						<div className='col-span-full text-center py-12 sm:py-20'>
							<div className='text-5xl sm:text-6xl mb-4'>🔍</div>
							<p className='text-gray-500 text-lg sm:text-xl font-semibold'>No recipes found</p>
							<p className='text-gray-400 mt-2 text-sm sm:text-base'>Try a different search term!</p>
						</div>
					)}

					{loading &&
						[...Array(5)].map((_, index) => (
							<div key={index} className='flex flex-col gap-4 w-full animate-pulse'>
								<div className='skeleton h-48 sm:h-40 w-full rounded-xl'></div>
								<div className='flex justify-between'>
									<div className='skeleton h-4 w-28'></div>
									<div className='skeleton h-4 w-24'></div>
								</div>
								<div className='skeleton h-4 w-3/4'></div>
								<div className='skeleton h-4 w-1/2'></div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
export default HomePage;
