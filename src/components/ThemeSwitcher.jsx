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
		<div className="dropdown dropdown-end">
			<div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
				<Palette size={20} />
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-2xl border border-base-300 max-h-96 overflow-y-auto flex-nowrap"
			>
				<li className="menu-title">
					<span>Choose Theme</span>
				</li>
				{THEMES.map((themeName) => (
					<li key={themeName}>
						<button
							className={`${theme === themeName ? "active" : ""}`}
							onClick={() => handleThemeChange(themeName)}
						>
							<span className="capitalize flex-1">{themeName}</span>
							{theme === themeName && <span>✓</span>}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ThemeSwitcher;
