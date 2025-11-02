import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			<DesktopSidebar />
			<MobileSidebar />
		</>
	);
};
export default Sidebar;

const DesktopSidebar = () => {
	return (
		<div className='p-3 md:p-10 border-r border-base-300 min-h-screen w-24 md:w-64 hidden sm:block bg-base-100'>
			<div className='flex flex-col gap-20 sticky top-10 left-0'>
				<div className='w-full flex items-center justify-center'>
					<img src='/logo.svg' alt='logo' className='hidden md:block hover:scale-105 transition-transform duration-300' />
					<img src='/mobile-logo.svg' alt='logo' className='block md:hidden hover:scale-105 transition-transform duration-300' />
				</div>
				<ul className='flex flex-col items-center md:items-start gap-8'>
					<Link to={"/home"} className='flex gap-3 items-center text-base-content hover:text-purple-600 transition-colors duration-200 group'>
						<div className='p-2 rounded-lg group-hover:bg-purple-100 transition-all duration-200'>
							<Home size={"24"} />
						</div>
						<span className='font-bold hidden md:block'>Home</span>
					</Link>
					<Link to={"/favorites"} className='flex gap-3 items-center text-base-content hover:text-pink-600 transition-colors duration-200 group'>
						<div className='p-2 rounded-lg group-hover:bg-pink-100 transition-all duration-200'>
							<Heart size={"24"} />
						</div>
						<span className='font-bold hidden md:block'>Favorites</span>
					</Link>
				</ul>
			</div>
		</div>
	);
};

const MobileSidebar = () => {
	return (
		<div
			className='flex justify-around items-center gap-2 border-t-2 border-base-300 fixed w-full
			bottom-0 left-0 bg-base-100 z-10 px-4 py-3 sm:hidden shadow-2xl backdrop-blur-lg bg-opacity-95
		'
		>
			<Link 
				to={"/home"} 
				className='flex flex-col items-center gap-1 p-3 hover:bg-purple-100 rounded-xl transition-all duration-200 min-w-[80px] active:scale-95 touch-manipulation'
			>
				<Home size={"26"} className='cursor-pointer hover:text-purple-600' />
				<span className='text-xs font-semibold'>Home</span>
			</Link>
			<Link 
				to={"/favorites"} 
				className='flex flex-col items-center gap-1 p-3 hover:bg-pink-100 rounded-xl transition-all duration-200 min-w-[80px] active:scale-95 touch-manipulation'
			>
				<Heart size={"26"} className='cursor-pointer hover:text-pink-600' />
				<span className='text-xs font-semibold'>Favorites</span>
			</Link>
		</div>
	);
};
