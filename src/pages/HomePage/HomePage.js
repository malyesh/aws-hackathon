import './HomePage.scss';
import Filter from '../../components/Filter/Filter';
import greater from '../../assets/icons/greaterthan.svg';

export default function HomePage() {
  return (
    <div className='home__body'>
      <div className='home__body--head'>
        <a className='home__body--a' href='/'>
          AWS Data Exchange{' '}
        </a>
        <img className='home__body--icon' src={greater} alt='greater' />
        <p className='home__body--text'>Browse catalog</p>
      </div>

      <Filter />
    </div>
  );
}
