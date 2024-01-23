import React from 'react'

const Card = ({ image, title, description, skills, link }) => {
    return (
        <a href={link} target="_blank">
            <div className="card">
                <div className="image-container animate-title-left">
                    <img src={image} alt={title} width='150' height='120' />
                </div>
                <div className="content animate-title-right">
                    <h3 className='animate-title-right'>{title}</h3>
                    <p>{description}</p>
                    <p className='card-skills'>{skills.map(skill => skill).join(', ')}</p>
                </div>
            </div>
        </a>
    );
};

export default Card;
