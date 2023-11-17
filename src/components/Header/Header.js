import './Header.scss';
import logo from '../../assets/icons/logo.svg';
import squares from '../../assets/icons/squares.svg';
import search from '../../assets/icons/search.svg';
import squareCode from '../../assets/icons/codesquare.svg';
import bell from '../../assets/icons/bell.svg';
import question from '../../assets/icons/question.svg';
import settings from '../../assets/icons/settings.svg';
import carrot from '../../assets/icons/downcarrot.svg';

export default function Header() {
  return (
    <div className='header'>
      <img className='header__icon--logo' src={logo} alt='logo' />
      <div className='header__icon--combo'>
        <img className='header__icon' src={squares} alt='squares' />
        <p className='header__icon--text'>Services</p>
      </div>

      <div className='header__search'>
        <img className='header__search--icon' src={search} alt='search' />
        <input className='header__search--input' placeholder='Search' />
        <p className='header__search--placeholder'>[Alt+S]</p>
      </div>

      <div className='header__end'>
        <img className='header__end--icon' src={squareCode} alt='square' />
        <img className='header__end--icon' src={bell} alt='bell' />
        <img className='header__end--icon' src={question} alt='question' />
        <img className='header__end--icon' src={settings} alt='settings' />
        <div className='header__icon--combo with__carrot'>
          <p className='header__icon--text'>Ohio</p>
          <img className='carrot' src={carrot} alt='carrot' />
        </div>
        <div className='header__icon--combo with__carrot with__carrot--name'>
          <p className='header__icon--text'>malyeshmerni</p>
          <img className='carrot' src={carrot} alt='carrot' />
        </div>
      </div>
    </div>
  );
}
