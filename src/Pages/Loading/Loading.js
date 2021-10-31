import React from 'react';

const Loading = () => {
    return (
        <div className="spinner-border text-info d-block mx-auto my-5 " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loading;