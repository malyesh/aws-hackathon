import './ResultCard.scss';
// import data from '../data/data.json';

const ResultCard = ({ data }) => {
  const createStars = () => {
    let s = '⭐';
    let result = '';
    for (let i = 1; (i = data.review); i++) {
      result = result + s;
    }
    return result;
  };
  return (
    <article className='result-card'>
      <div className='result-card__top'>
        <h2 className='result-card__top--data-title'>{data.name}</h2>
      </div>
      <div className='result-card__detail'>
        <div className='result-card__detail--header'>
          <img
            src={data.logo}
            alt='company logo'
            className='result-card__detail--logo'
          />
          <p className='result-card__detail--logo-subtitle caption'>
            By {data.provider}
          </p>
        </div>
        <div className='result-card__detail--container'>
          <p className='result-card__detail--description'>{data.description}</p>
        </div>
      </div>
      <div className='result-card__price-container'>
        <p className='result-card__price-container--price'>{data.price}</p>
        <p className='result-card__price-container--subscription-length'>
          {data.subscription}
        </p>

        <div className='result-card__price-container--bottom'>
          <p className='result-card__price-container--usability-score'>
            Usability
          </p>
          {data.review}/5
          {/* {() => {
            let s = '⭐';
            let result = '';
            for (let i = 1; (i = data.review); i++) {
              result = result + s;
            }
            return result;
          }} */}
          <p className='result-card__price-container--review-amount'>
            ({data.number_of_reviews})
          </p>
        </div>
      </div>
      <div className='result-card__bottom'>
        <div className='result-card__bottom--published bottom'>
          <p className='bottom__title'>Published:</p>
          <p className='bottom__info'>{data.published}</p>
        </div>
        <div className='result-card__bottom--updated bottom'>
          <p className='bottom__title'>Updated:</p>
          <p className='bottom__info'>{data.last_updated}</p>
        </div>
        <div className='result-card__bottom--data-size bottom'>
          <p className='bottom__title'>Data Size:</p>
          <p className='bottom__info'>{data.data_size}</p>
        </div>
      </div>
    </article>
  );
};

export default ResultCard;
