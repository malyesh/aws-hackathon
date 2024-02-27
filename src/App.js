import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import Header from './components/Header/Header';
import './App.scss';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);


	return (
		<div className='App'>

			{
				// loading ?
				<div className="demo-modal">
					<h2 className="demo-modal__h1">Attention! ⚠️</h2>
					<p className="demo-modal__p">
						This is a demo of my AWS Hackathon project. The data sets are real, but the A.I. (LLM) powered search function which was powered by a paid third party API has been disabled. The functionality of the search has been simulated.
					</p>
					<h3 className="demo-modal__h2">Intended Functionality:</h3>
					<p className="demo-modal__p">
						When the user enters a search query and submits, a normal search function returns the results of the search based on existence of the query within the title and description of the datasets.
					</p>
					<p className="demo-modal__p">
						Concurrent/async to the normal search, the A.I. powered search function uses the search query to look through the descriptions of all other datasets, and returns results which have high probability of correlation based on context and current events.
					</p>
				</div>
				//  : null
			}

			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/product' element={<ProductDetailPage />} />
				</Routes>
			</BrowserRouter>
		</div >
	);
}

export default App;
