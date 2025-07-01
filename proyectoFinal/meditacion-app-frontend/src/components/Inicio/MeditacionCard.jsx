import React from 'react';

const MeditacionCard = ({ title, duration }) => {
    return (
        <div className="meditacion-card">
            <h3>{title}</h3>
            <p>Duración: {duration} minutos</p>
        </div>
    );
};

export default MeditacionCard;