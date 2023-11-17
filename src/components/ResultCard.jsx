import './ResultCard.scss';

const ResultCard = () => {
    return (
        <article className='result-card'>
            <div className='result-card__img-column'>
                <img src="" alt="" className='result-card__img-column--img' />
                <h2 className='result-card__img-column--price'></h2>
            </div>
            <div className="result-card__content-column">
                <h2 className="result-card__content-column--result-title">Result Title</h2>
                <h3 className="result-card__content-column--result-subtitle">Result Subtitle</h3>\
                <p className="result-card__content-column--result-description">
                    This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.
                </p>
            </div>
            <aside className="result-card__bottom">
                <div className="result-card__bottom-left">
                    <p className="result-card__bottom-left--upload-date">Uploaded 11/16/2023</p>
                    <p className="result-card__bottom-left--subscription-length">12 month subscription available</p>
                </div>
                <div className="result-card__bottom-right--expand-text">
                    <p className="result-card__bottom-right--text">Click to Expand</p>
                    <div className="result-card__bottom-right--img">
                        <img src="" alt="" className="result-card__bottom-right--img" />
                    </div>
                </div>
            </aside>
        </article>
    )
}

export default ResultCard
