import './SearchComponent.scss';

export const SearchComponent = ({ handleSubmit }) => {
  return (
    <div className='search'>
      <h3 className='search__title'>Browse Catalog</h3>
      <form onSubmit={handleSubmit}>
        <section className='search__input-row'>
          <div className='search__wrap'>
            <select className='search__select' name='category'>
              <option value='categories' name='categories' disabled selected>
                Categories
              </option>
              <option value='automotive' name='automotive'>
                Automotive
              </option>
              <option value='environmental' name='environmental'>
                Environmental
              </option>
              <option value='financial-services' name='financial-services'>
                Financial Services
              </option>
              <option value='gaming' name='gaming'>
                Gaming
              </option>
              <option
                value='healthcare-life-sciences'
                name='healthcare-life-sciences'
              >
                Healthcare & Life Sciences
              </option>
              <option value='manufacturing' name='manufacturing'>
                Manufacturing
              </option>
              <option value='media-entertainment' name='media-entertainment'>
                Media & Entertainment
              </option>
              <option value='public-sector' name='public-sector'>
                Public Sector
              </option>
              <option value='resources' name='resources'>
                Resources
              </option>
              <option
                value='retail-location-marketing'
                name='retail-location-marketing'
              >
                Retail, Location & Marketing
              </option>
              <option value='telecommunications' name='telecommunications'>
                Telecommunications
              </option>
            </select>
            <input
              type='text'
              placeholder='search'
              className='search__input'
              name='searchInput'
            />
          </div>
          <button type='submit' className='search__button'>
            Search
          </button>
        </section>
        <section className='search__bottom'>
          <p className='search__bottom--breadcrumbs'>{'<  1 2 3 ... >'}</p>
          <select className='search__bottom-select'>
            <option value='' disabled selected>
              Sort By
            </option>
            <option value='recentlyUploaded'>Sort By: Recently Uploaded</option>
            <option value='dataSize'>Sort By: Data Size</option>
            <option value='popularity'>Sort By: Popularity</option>
          </select>
        </section>
      </form>
    </div>
  );
};
