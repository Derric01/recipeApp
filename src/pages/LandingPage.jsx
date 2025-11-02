import { Heart, Search, Sparkles, UtensilsCrossed, Flame, BookOpen, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const LandingPage = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='min-h-screen bg-base-100'>
			{/* Navigation Bar */}
			<nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-base-100/80 border-b border-base-300'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-14 sm:h-16'>
						<div className='flex items-center gap-2'>
							<Flame className='w-6 h-6 sm:w-7 sm:h-7 text-primary' />
							<span className='text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
								FlavorFinder
							</span>
						</div>
						<Link to='/home' className='btn btn-xs sm:btn-sm btn-primary min-h-[44px] min-w-[44px]'>
							<span className='hidden sm:inline'>Explore</span>
							<Search className='w-4 h-4 sm:hidden' />
						</Link>
					</div>
				</div>
			</nav>

			{/* Hero Section with Parallax */}
			<div className='relative min-h-screen flex items-center overflow-hidden pt-14 sm:pt-16'>
				{/* Animated Background Elements */}
				<div className='absolute inset-0 overflow-hidden'>
					<div 
						className='absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl'
						style={{ transform: `translateY(${scrollY * 0.3}px)` }}
					></div>
					<div 
						className='absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl'
						style={{ transform: `translateY(${scrollY * 0.2}px)` }}
					></div>
				</div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left Content */}
						<div className='space-y-6 sm:space-y-8'>
							<div className='inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-base-200 border border-base-300 text-xs sm:text-sm'>
								<Sparkles className='w-3 h-3 sm:w-4 sm:h-4 text-warning' />
								<span className='font-medium'>10,000+ Recipes at Your Fingertips</span>
							</div>

							<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight'>
								Cook Smarter,
								<br />
								<span className='bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>
									Eat Better
								</span>
							</h1>

							<p className='text-base sm:text-lg md:text-xl text-base-content/70 max-w-xl'>
								Your personal culinary companion. Search thousands of recipes, save your favorites, 
								and discover new dishes that match your taste and lifestyle.
							</p>

							<div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
								<Link 
									to='/home' 
									className='btn btn-primary btn-md sm:btn-lg gap-2 shadow-lg hover:shadow-xl transition-all group min-h-[48px] sm:min-h-[56px] touch-manipulation active:scale-95'
								>
									<Search className='w-5 h-5 group-hover:scale-110 transition-transform' />
									Find Recipes
								</Link>
								<Link 
									to='/favorites' 
									className='btn btn-outline btn-md sm:btn-lg gap-2 min-h-[48px] sm:min-h-[56px] touch-manipulation active:scale-95'
								>
									<Heart className='w-5 h-5' />
									View Favorites
								</Link>
							</div>

							{/* Stats */}
							<div className='flex gap-6 sm:gap-8 pt-6 sm:pt-8'>
								<div>
									<div className='text-2xl sm:text-3xl font-bold text-primary'>10K+</div>
									<div className='text-xs sm:text-sm text-base-content/60'>Recipes</div>
								</div>
								<div>
									<div className='text-2xl sm:text-3xl font-bold text-secondary'>50+</div>
									<div className='text-xs sm:text-sm text-base-content/60'>Cuisines</div>
								</div>
								<div>
									<div className='text-2xl sm:text-3xl font-bold text-accent'>100%</div>
									<div className='text-xs sm:text-sm text-base-content/60'>Free</div>
								</div>
							</div>
						</div>

						{/* Right Content - Recipe Grid Preview */}
						<div className='relative mt-8 lg:mt-0'>
							<div className='grid grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-4'>
								{/* Simulated Recipe Cards */}
								<div className='space-y-2 sm:space-y-4'>
									<div className='card bg-base-200 shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer'>
										<img 
											src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' 
											alt='Pizza' 
											className='h-32 sm:h-40 lg:h-48 w-full object-cover'
										/>
										<div className='card-body p-2 sm:p-3 lg:p-4'>
											<h4 className='font-bold text-xs sm:text-sm lg:text-base text-base-content'>Margherita Pizza</h4>
											<p className='text-[10px] sm:text-xs text-base-content/60'>Italian • 30 mins</p>
										</div>
									</div>
									<div className='card bg-base-200 shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer'>
										<img 
											src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' 
											alt='Salad' 
											className='h-32 sm:h-40 lg:h-48 w-full object-cover'
										/>
										<div className='card-body p-2 sm:p-3 lg:p-4'>
											<h4 className='font-bold text-xs sm:text-sm lg:text-base text-base-content'>Fresh Garden Salad</h4>
											<p className='text-[10px] sm:text-xs text-base-content/60'>Healthy • 15 mins</p>
										</div>
									</div>
								</div>
								<div className='space-y-2 sm:space-y-4 mt-0 sm:mt-4 lg:mt-8'>
									<div className='card bg-base-200 shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer'>
										<img 
											src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop' 
											alt='Pancakes' 
											className='h-32 sm:h-40 lg:h-48 w-full object-cover'
										/>
										<div className='card-body p-2 sm:p-3 lg:p-4'>
											<h4 className='font-bold text-xs sm:text-sm lg:text-base text-base-content'>Blueberry Pancakes</h4>
											<p className='text-[10px] sm:text-xs text-base-content/60'>Breakfast • 20 mins</p>
										</div>
									</div>
									<div className='card bg-base-200 shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer'>
										<img 
											src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' 
											alt='Pasta' 
											className='h-32 sm:h-40 lg:h-48 w-full object-cover'
										/>
										<div className='card-body p-2 sm:p-3 lg:p-4'>
											<h4 className='font-bold text-xs sm:text-sm lg:text-base text-base-content'>Creamy Pasta</h4>
											<p className='text-[10px] sm:text-xs text-base-content/60'>Italian • 25 mins</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section - Bento Box Layout */}
			<div className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-12 sm:mb-16'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4'>
							Everything You Need to Cook
						</h2>
						<p className='text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto px-4'>
							A modern recipe platform designed for home cooks who value simplicity and quality
						</p>
					</div>

					{/* Bento Grid */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-fr'>
						{/* Large Feature 1 */}
						<div className='md:col-span-2 card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6 sm:p-8 hover:shadow-xl transition-all touch-manipulation active:scale-[0.98]'>
							<Search className='w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4' />
							<h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>Intelligent Search</h3>
							<p className='text-sm sm:text-base text-base-content/70'>
								Find exactly what you&apos;re craving with our smart search. Filter by ingredients, 
								dietary needs, or cuisine type. Get results in seconds.
							</p>
						</div>

						{/* Small Feature */}
						<div className='card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 p-6 hover:shadow-xl transition-all touch-manipulation active:scale-[0.98]'>
							<Heart className='w-9 h-9 sm:w-10 sm:h-10 text-secondary mb-3 sm:mb-4' />
							<h3 className='text-lg sm:text-xl font-bold mb-2'>Quick Save</h3>
							<p className='text-xs sm:text-sm text-base-content/70'>
								Build your personal collection with one tap
							</p>
						</div>

						{/* Small Feature */}
						<div className='card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 hover:shadow-xl transition-all touch-manipulation active:scale-[0.98]'>
							<BookOpen className='w-9 h-9 sm:w-10 sm:h-10 text-accent mb-3 sm:mb-4' />
							<h3 className='text-lg sm:text-xl font-bold mb-2'>Detailed Info</h3>
							<p className='text-xs sm:text-sm text-base-content/70'>
								Nutrition facts and serving sizes included
							</p>
						</div>

						{/* Large Feature 2 */}
						<div className='md:col-span-2 card bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 p-6 sm:p-8 hover:shadow-xl transition-all touch-manipulation active:scale-[0.98]'>
							<UtensilsCrossed className='w-10 h-10 sm:w-12 sm:h-12 text-warning mb-3 sm:mb-4' />
							<h3 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>Visual Cooking</h3>
							<p className='text-sm sm:text-base text-base-content/70'>
								Every recipe includes a direct link to video tutorials on YouTube. 
								Watch professional chefs prepare the dish step-by-step.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8 pb-28 sm:pb-32'>
				<div className='max-w-4xl mx-auto text-center'>
					<div className='card bg-gradient-to-br from-primary to-secondary p-8 sm:p-12 text-primary-content shadow-2xl'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6'>
							Start Cooking Today
						</h2>
						<p className='text-base sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto'>
							No signup required. No credit card needed. Just pure cooking inspiration.
						</p>
						<Link 
							to='/home' 
							className='btn btn-md sm:btn-lg bg-base-100 text-primary hover:scale-105 active:scale-95 transition-transform border-none shadow-xl min-h-[48px] sm:min-h-[56px] touch-manipulation'
						>
							<Search className='w-5 h-5' />
							Browse Recipes Now
						</Link>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className='bg-base-300 py-6 sm:py-8 pb-20 sm:pb-8'>
				<div className='max-w-7xl mx-auto px-4 text-center'>
					<div className='flex items-center justify-center gap-2 mb-2'>
						<ChefHat className='w-4 h-4 sm:w-5 sm:h-5 text-primary' />
						<span className='text-sm sm:text-base font-semibold text-base-content'>FlavorFinder</span>
					</div>
					<p className='text-base-content/60 text-xs sm:text-sm'>
						Powered by EDAMAM API • © 2025 All rights reserved
					</p>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
