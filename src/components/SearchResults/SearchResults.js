import './SearchResults.scss';
import ResultCard from '../ResultCard';
// import dataSheet from '../../data/data.json';

export default function SearchResults({ dataSheet, title, suggested, tour, handleTour, handleTourReverse }) {
	return (
		<section className='main'>
			<p className='main__class--page caption'>Results 20 of 500</p>
			<div className='main__body--section'>
				<div className={`main--section__header ${tour.tour && tour.step === 2 ? "tour-highlight" : ""}`}>
					<h1 className='main__header--title'>{title}</h1>
					<p className='main__header--caption'>see all</p>
				</div>

				<div className={`result__list ${tour.tour && tour.step === 2 ? "tour-highlight" : ""} `}>
					{dataSheet.map((data, index) => {
						return <ResultCard key={index} data={data} />;
					})}
				</div>

				<div className={`main--section__header  ${tour.tour && tour.step === 3 ? "tour-highlight" : ""}`}>
					<h1 className='main__header--title'>Suggested datasets</h1>
					<p className='main__header--caption'>see all</p>
				</div>
			</div>
			<div className={`result__list ${tour.tour && tour.step === 3 ? "tour-highlight" : ""}`}>
				{suggested.map((data, index) => {
					return <ResultCard key={index} data={data} />;
				})}

				{tour.tour && tour.step === 3 ?
					<div
						className="tour-step"
						style={{ bottom: `calc(100% + 80px)`, left: '0' }}
					>
						<p className="tour-step__p">
							And here, an A.I. returns search results whose context correlates with the original query based on context and current events!
						</p>
						<p className="tour-step__p">
							Thanks for taking the tour!
						</p>
						{tour.tour && tour.step > 1 ?
							<button onClick={handleTourReverse} className="demo-modal__close">previous</button>
							: null
						}
						<button onClick={handleTour} className="demo-modal__close">{tour.step === 3 ? "end tour" : "next"}</button>
					</div>
					: null
				}

			</div>
			{tour.tour && tour.step === 2 ?
				<div
					className="tour-step"
					style={{ bottom: '100%', left: '0' }}
				>
					<p className="tour-step__p">
						Here you see your normal search results.
					</p>
					{/* <p className="tour-step__p">
						Enter "animal" as your search query.
					</p> */}
					{tour.tour && tour.step > 1 ?
						<button onClick={handleTourReverse} className="demo-modal__close">previous</button>
						: null
					}
					<button onClick={handleTour} className="demo-modal__close">next</button>
				</div>
				: null
			}


		</section>
	);
}
