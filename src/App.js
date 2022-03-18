import {
	Routes,
	Route,
} from 'react-router-dom';
import Lading from './pages/landing';
import SearchResult from './pages/searchResult';
import { HOME_PAGE_LINKS, ROUTES } from './constants/routes';
import AboutUs from './pages/About';

function App() {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<AboutUs/>}>
				{
					HOME_PAGE_LINKS.map(({ path }) => <Route key={path} path={path} element={<Lading />} />)
				}
			</Route>
			<Route path={ROUTES.SEARCH} element={<SearchResult />} />
		</Routes>
	);
}

export default App;
