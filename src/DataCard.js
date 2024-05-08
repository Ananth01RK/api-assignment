// DataCard.js
import React from 'react';

const DataCard = ({ item, onLearnMore }) => {
    return (

        <div className="data-card" onClick={(e) => { e.stopPropagation(); onLearnMore(item); }}>
            <div class="image">
                <img src={item.thumbnail.small} alt={item.title} />
                <div class="overlay">
                    <div class="text">Learn More</div>
                </div>
            </div>
            <div className='div-data'>
                <div className="dot-container">
                    <div className="dot dot-green"></div>
                    <div className="dot dot-red"></div>
                </div>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div className='details'>
                    <div className='authorDetails'>
                        <p className='author authorName'>{item.author.name}</p>
                        <span>-</span>
                        <p className='author authorRole'>{item.author.role}</p>
                    </div>
                    <p className='date'>{new Date(item.date * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                </div>

            </div>
        </div>

    );
};

export default DataCard;