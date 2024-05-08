import React from 'react';

const Modal = ({ item, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className='imgDiv'>
                    <img src={item.thumbnail.small} alt={item.title} />
                </div>
                <div className='body'>
                    <div className='content'>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                    <div className='details'>
                        <div className='authorDetails'>
                            <img src={item.author.avatar} alt={item.title} />
                            <p className='author authorName'>{item.author.name}</p>
                            <span>-</span>
                            <p className='author authorRole'>{item.author.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;