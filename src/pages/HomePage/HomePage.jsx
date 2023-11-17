import './HomePage.scss';
import { useState } from 'react';
import Filter from '../../components/Filter/Filter';
import greater from '../../assets/icons/greaterthan.svg';
import SearchResults from '../../components/SearchResults/SearchResults';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';

export default function HomePage() {
  const [headerTitle, setHeaderTitle] = useState();
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
          <SearchComponent />
          <SearchResults />
        </div>
      </main>
    </div>
  );
}
