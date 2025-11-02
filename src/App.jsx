import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<Routes>
			{/* Landing Page - No Sidebar */}
			<Route path='/' element={<LandingPage />} />
			
			{/* App Pages - With Sidebar */}
			<Route path='/home' element={
				<div className='flex'>
					<Sidebar />
					<HomePage />
				</div>
			} />
			<Route path='/favorites' element={
				<div className='flex'>
					<Sidebar />
					<FavoritesPage />
				</div>
			} />
		</Routes>
	);
}

export default App;
