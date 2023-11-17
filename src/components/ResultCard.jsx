import './ResultCard.scss';

const ResultCard = () => {
    return (
        <article className='result-card'>
            <div className='result-card__top'>
                <h2 className='result-card__top--data-title'>{data.name}</h2>
            </div>
            <div className="result-card__detail">
                <div className='result-card__detail-header'>
                    <img src={data.logo} alt="company logo" className="result-card__detail--logo" />
                    <h2 className="result-card__detail--logo-subtitle">By {data.company}</h2>
                </div>
                <p className="result-card__detail--description">
                    This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.
                </p>
            </div>
            <div className="result-card__price-contaier">
                <p className="result-card__price-contaier--price">Uploaded {data.uploaded}</p>
                <p className="result-card__price-contaier--subscription-length">{data.subscription}</p>
                <div className="result-card__price-container--bottom">
                    <p className="result-card__price-contaier--usability-score">Usability</p>
                    {data.score}
                    {data.stars}
                </div>
            </div>
            <div className="result-card__bottom">
                <div className="result-card__bottom--published">Published:{data.published}</div>
                <div className="result-card__bottom--updated">Updated:{data.updated}</div>
                <div className="result-card__bottom--data-size">Data Size:{data.size}</div>
            </div>
        </article>
    )
}

export default ResultCard
