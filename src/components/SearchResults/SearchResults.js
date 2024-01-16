import './SearchResults.scss';
import ResultCard from '../ResultCard';
// import dataSheet from '../../data/data.json';

export default function SearchResults({ dataSheet, title, suggested }) {
  return (
    <section className='main'>
      <p className='main__class--page caption'>Results 20 of 500</p>
      <div className='main__body--section'>
        <div className='main--section__header'>
          <h1 className='main__header--title'>{title}</h1>
          <p className='main__header--caption'>see all</p>
        </div>

        <div className='result__list'>
          {dataSheet.map((data, index) => {
            return <ResultCard key={index} data={data} />;
          })}
        </div>

        <div className='main--section__header'>
          <h1 className='main__header--title'>Suggested datasets</h1>
          <p className='main__header--caption'>see all</p>
        </div>
      </div>
      <div className='result__list'>
        {suggested.map((data, index) => {
          return <ResultCard key={index} data={data} />;
        })}
      </div>
    </section>
  );
}
