import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

const THEMES = [
	"light",
	"dark",
	"synthwave",
	"dracula",
];

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		const htmlElement = document.documentElement;
		htmlElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
		console.log("Theme changed to:", theme);
	}, [theme]);

	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
		// Close dropdown by removing focus
		document.activeElement.blur();
	};

	return (
		<div className="dropdown dropdown-bottom dropdown-end">
			<div 
				tabIndex={0} 
				role="button" 
				className="btn btn-circle btn-ghost min-h-[44px] min-w-[44px] hover:bg-base-200 touch-manipulation"
			>
				<Palette size={24} className="sm:w-5 sm:h-5" />
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content menu bg-base-100 rounded-box z-[9999] w-56 sm:w-52 p-3 shadow-2xl border-2 border-base-300 max-h-96 overflow-y-auto flex-nowrap mt-2"
			>
				<li className="menu-title px-3 py-2">
					<span className="text-sm font-bold">Choose Theme</span>
				</li>
				{THEMES.map((themeName) => (
					<li key={themeName}>
						<button
							className={`${theme === themeName ? "active" : ""} min-h-[48px] text-base touch-manipulation active:scale-95`}
							onClick={() => handleThemeChange(themeName)}
						>
							<span className="capitalize flex-1 text-left">{themeName}</span>
							{theme === themeName && <span className="text-lg">✓</span>}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ThemeSwitcher;
