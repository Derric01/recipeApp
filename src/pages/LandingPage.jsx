import { ChefHat, Heart, Search, Sparkles, Utensils, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50'>
			{/* Hero Section */}
			<div className='relative overflow-hidden'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
					<div className='text-center'>
						<div className='flex justify-center mb-6'>
							<div className='relative'>
								<div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-20 animate-pulse'></div>
								<ChefHat size={80} className='relative text-purple-600' />
							</div>
						</div>
						
						<h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-fade-in'>
							Recipe Finder
						</h1>
						
						<p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
							Discover thousands of delicious recipes from around the world. 
							Cook like a pro with easy-to-follow instructions.
						</p>
						
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<Link 
								to='/home' 
								className='btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:scale-105 transition-transform duration-300 shadow-lg px-8'
							>
								<Search className='mr-2' size={20} />
								Start Cooking
							</Link>
							<Link 
								to='/favorites' 
								className='btn btn-lg btn-outline border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 px-8'
							>
								<Heart className='mr-2' size={20} />
								My Favorites
							</Link>
						</div>
					</div>
				</div>

				{/* Floating Recipe Cards Animation */}
				<div className='absolute top-20 left-10 opacity-20 animate-bounce hidden lg:block'>
					<img src='/1.jpg' alt='recipe' className='w-32 h-32 rounded-2xl shadow-2xl object-cover' />
				</div>
				<div className='absolute bottom-20 right-10 opacity-20 animate-bounce hidden lg:block' style={{ animationDelay: '1s' }}>
					<img src='/2.jpg' alt='recipe' className='w-32 h-32 rounded-2xl shadow-2xl object-cover' />
				</div>
				<div className='absolute top-40 right-20 opacity-20 animate-bounce hidden lg:block' style={{ animationDelay: '0.5s' }}>
					<img src='/3.jpg' alt='recipe' className='w-32 h-32 rounded-2xl shadow-2xl object-cover' />
				</div>
			</div>

			{/* Features Section */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800'>
					Why Choose Recipe Finder?
				</h2>
				
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Feature 1 */}
					<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform'>
						<div className='bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4'>
							<Search className='text-purple-600' size={32} />
						</div>
						<h3 className='text-xl font-bold mb-3 text-gray-800'>Smart Search</h3>
						<p className='text-gray-600'>
							Find recipes instantly with our powerful search. From comfort food to exotic cuisines.
						</p>
					</div>

					{/* Feature 2 */}
					<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform'>
						<div className='bg-gradient-to-br from-pink-100 to-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4'>
							<Heart className='text-pink-600' size={32} />
						</div>
						<h3 className='text-xl font-bold mb-3 text-gray-800'>Save Favorites</h3>
						<p className='text-gray-600'>
							Bookmark your favorite recipes and access them anytime. Build your personal cookbook.
						</p>
					</div>

					{/* Feature 3 */}
					<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform'>
						<div className='bg-gradient-to-br from-orange-100 to-yellow-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4'>
							<Utensils className='text-orange-600' size={32} />
						</div>
						<h3 className='text-xl font-bold mb-3 text-gray-800'>Detailed Info</h3>
						<p className='text-gray-600'>
							Get nutrition facts, health labels, and serving sizes for every recipe.
						</p>
					</div>

					{/* Feature 4 */}
					<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform'>
						<div className='bg-gradient-to-br from-green-100 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4'>
							<Clock className='text-green-600' size={32} />
						</div>
						<h3 className='text-xl font-bold mb-3 text-gray-800'>Quick & Easy</h3>
						<p className='text-gray-600'>
							Filter recipes by preparation time. Perfect for busy weeknights or leisurely weekends.
						</p>
					</div>

					{/* Feature 5 */}
					<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform'>
						<div className='bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4'>
							<TrendingUp className='text-blue-600' size={32} />
						</div>
						<h3 className='text-xl font-bold mb-3 text-gray-800'>Trending Recipes</h3>
						<p className='text-gray-600'>
							Discover what's popular. Stay updated with the latest food trends.
						</p>
					</div>

					{/* Feature 6 */}
					<div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform'>
						<div className='bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4'>
							<Sparkles className='text-purple-600' size={32} />
						</div>
						<h3 className='text-xl font-bold mb-3 text-gray-800'>Video Tutorials</h3>
						<p className='text-gray-600'>
							One-click access to YouTube cooking videos. Learn from expert chefs.
						</p>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className='bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 py-16'>
				<div className='max-w-4xl mx-auto text-center px-4'>
					<h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
						Ready to Start Cooking?
					</h2>
					<p className='text-xl text-white/90 mb-8'>
						Join thousands of home cooks discovering amazing recipes every day.
					</p>
					<Link 
						to='/home' 
						className='btn btn-lg bg-white text-purple-600 hover:bg-gray-100 border-none shadow-xl hover:scale-105 transition-transform duration-300 px-12'
					>
						<ChefHat className='mr-2' size={24} />
						Get Started - It's Free!
					</Link>
				</div>
			</div>

			{/* Footer */}
			<footer className='bg-gray-900 text-white py-8'>
				<div className='max-w-7xl mx-auto px-4 text-center'>
					<p className='text-gray-400'>
						Powered by EDAMAM Recipe API • Made with ❤️ for food lovers
					</p>
					<p className='text-gray-500 text-sm mt-2'>
						© 2025 Recipe Finder. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
