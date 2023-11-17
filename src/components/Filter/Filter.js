import './Filter.scss';

export default function Filter() {
  return (
    <article className='filter'>
      <div className='filter__header'>
        <h2 className='filter__title'>Refine results</h2>
      </div>
      <div className='filter__body'>
        <div className='filter__body--section'>
          <h3 className='filter__body--title'>Vendors</h3>
          <div className='filter__check'>
            <label className='filter__input'>
              <input type='checkbox' />
              Experion (125)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              mnAi (123)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              180byTwo (121)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              Techsalerator (116)
            </label>
          </div>
        </div>

        <div className='filter__body--section'>
          <h3 className='filter__body--title'>Data available through</h3>
          <div className='filter__check'>
            <label className='filter__input'>
              <input type='checkbox' />
              Files (Amazon S3 Objects) (3,709)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              Access to Amazon S3 (173)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              Amazon Redshift (121)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              API (109)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              AWS Lake Formation (7)
            </label>
          </div>
        </div>

        <div className='filter__body--section'>
          <h3 className='filter__body--title'>Data evaluation</h3>
          <div className='filter__check'>
            <label className='filter__input'>
              <input type='checkbox' />
              Data Sample (161)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              Data Dictionary (160)
            </label>
          </div>
        </div>

        <div className='filter__body--section'>
          <h3 className='filter__body--title'>Approvals</h3>
          <div className='filter__check'>
            <label className='filter__input'>
              <input type='checkbox' />
              Publisher Approval Not Required (1,036)
            </label>
          </div>
        </div>

        <div className='filter__body--section'>
          <h3 className='filter__body--title'>Pricing Plans</h3>
          <div className='filter__check'>
            <label className='filter__input'>
              <input type='checkbox' />
              Free (2,382)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              Upfront Commitment (1,694)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              Usage Based (18)
            </label>
          </div>
        </div>

        <div className='filter__body--section'>
          <h3 className='filter__body--title'>Pricing Unit</h3>
          <div className='filter__check'>
            <label className='filter__input'>
              <input type='checkbox' />
              Custom Units (3,588)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              Requests (12)
            </label>
          </div>
        </div>

        <div className='filter__body--section'>
          <h3 className='filter__body--title'>Affiliated Programs</h3>
          <div className='filter__check'>
            <label className='filter__input'>
              <input type='checkbox' />
              AWS Open Data Sponsorship Program (227)
            </label>
            <label className='filter__input'>
              <input type='checkbox' />
              Amazon Sustainability Data Initiative (182)
            </label>
          </div>
        </div>
      </div>
    </article>
  );
}
