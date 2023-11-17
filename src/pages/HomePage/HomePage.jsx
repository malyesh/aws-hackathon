import './HomePage.scss';

export default function HomePage() {
  return (
    <>
      <nav className="breadcrumb-container">
        <p className="breadcrumb__1">AWS Data Exchange</p>
        <img src="" alt="chevron img" className="breadcrumb__icon" />
        <p className="breadcrumb__2">Browse catalog</p>
      </nav>
      <main className="main-container">
        // Filter section goes here
        <div className="main-column">
          // Browse Catalog component goes here
        // Results Component goes here
        </div>
      </main>
    </>
  );
}
