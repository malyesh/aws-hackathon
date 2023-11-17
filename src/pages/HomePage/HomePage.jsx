import './HomePage.scss';
import Filter from '../../components/Filter/Filter';
import greater from '../../assets/icons/greaterthan.svg';

export default function HomePage() {
  return (
    <div className='body__container'>
      <nav className='breadcrumb-container'>
        <p className='breadcrumb__1'>AWS Data Exchange</p>
        <img src={greater} alt='chevron img' className='breadcrumb__icon' />
        <p className='breadcrumb__2'>Browse catalog</p>
      </nav>

      <main className='main-container'>
        <Filter />
        <div className='main-column'>
          {/* // Browse Catalog component goes here
        // Results Component goes here */}
        </div>
      </main>
    </div>
  );
}
