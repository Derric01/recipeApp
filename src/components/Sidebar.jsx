import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

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
				<div className='w-full flex items-center justify-between'>
					<img src='/logo.svg' alt='logo' className='hidden md:block hover:scale-105 transition-transform duration-300' />
					<img src='/mobile-logo.svg' alt='logo' className='block md:hidden hover:scale-105 transition-transform duration-300' />
					<div className='md:ml-auto'>
						<ThemeSwitcher />
					</div>
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
			className='flex justify-between items-center gap-6 border-t border-base-300 fixed w-full
			bottom-0 left-0 bg-base-100 z-10 p-4 sm:hidden shadow-lg
		'
		>
			<Link to={"/home"} className='p-2 hover:bg-purple-100 rounded-lg transition-all duration-200'>
				<Home size={"24"} className='cursor-pointer hover:text-purple-600' />
			</Link>
			<Link to={"/favorites"} className='p-2 hover:bg-pink-100 rounded-lg transition-all duration-200'>
				<Heart size={"24"} className='cursor-pointer hover:text-pink-600' />
			</Link>
			<ThemeSwitcher />
		</div>
	);
};
