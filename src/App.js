import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import './App.css';
import Items from './Items';

const App = () => {
    useEffect(() => {
        const initializeSlick = () => {
            $('.slick-tab').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.slick-content',
                dots: true,
                focusOnSelect: true,
                infinite: false,
                variableWidth: true
            });

            $('.slick-content').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slick-tab',
                infinite: false
            });
        };
        const timeoutId = setTimeout(() => {
            initializeSlick();
        }, 1);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="demo-frame">
            <div className="header">
                <p>My order</p>
            </div>
            <div className="slick slick-tab">
                <div>All Orders</div>
                <div>Waiting for Payment</div>
                <div>Processing</div>
                <div>Shipped</div>
                <div>Cancelled</div>
            </div>
            <div className="slick slick-content">
                <div>
                    <Items/>
                    <Items/>
                </div>
                <div>
                    <Items/>
                    <Items/>
                    <Items/>
                </div>
                <div>
                    <Items/>
                    <Items/>
                    <Items/>
                </div>
                <div>
                    <Items/>
                </div>
                <div>
                    <Items/>
                    <Items/>
                    <Items/>
                </div>
            </div>
        </div>
    );
};

export default App;
