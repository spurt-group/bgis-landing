import { Route, Routes } from 'react-router';
import Home from './pages';

function App() {
	return (
		<main className="bg-red-500">
			<Routes>
				<Route index element={<Home />} />
				{/* <Route path="about" element={<About />} /> */}
			</Routes>
		</main>
	);
}

export default App;
