import React from 'react';
import './App.css';

// Functional Component
const Items = () => {
    return <div className="pb-2 mt-2 px-2 bg-white">
        <p className="mb-1 fz-90" style={{ borderBottom: '1px solid rgb(235, 235, 240)', lineHeight: '30px', color: 'rgb(128, 128, 137)' }}>Successful delivery</p>
        <div className="mt-2 image-thumb"></div>
        <div className="fz-90 status">
            <p className="mb-0 mt-1" style={{ fontWeight: 500 }}>Ram laptop samsung 4Gb Ram laptop samsung 4Gb Ram laptop</p>
            <p className="mt-1">2 sản phẩm | 800 USD</p>
        </div>
        <div style={{ clear: 'both' }}></div>
        <div className="mt-2 d-flex">
            <div className="pr-1 w-50">
                <button className="btn btn btn-outline-primary w-100 fz-90">See detail</button>
            </div>

            <div className="pl-1 w-50">
                <button className="btn btn btn-outline-primary w-100 fz-90">Buy again</button>
            </div>
        </div>
    </div>;
};

export default Items;