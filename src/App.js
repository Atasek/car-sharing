import React from 'react'
import './App.css';



class Menu extends React.Component {
    render() {
        return <div className='menu-background'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 8H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 24H28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Eng</p>

        </div>;
    }
}

class Main extends React.Component {
    render() {
        return <div className='main-background'>
            <div className="main-background_header">
                <p>Need for drive</p>
                <div className="main-background_header-geo">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <a href="#">Ульяновск</a>
                </div>
            </div>
            <div className="main-background_center">
                <h1>Каршеринг</h1>
                <h2>Need for drive</h2>
                <p>Поминутная аренда авто твоего города</p>
                <button>Забронировать</button>
            </div>
        </div>;
    }
}

class SliderBack extends React.Component {
    render() {
        return <div className='slider-background'></div>;
    }
}

function App() {
    return (
        <div className="App">
            <div className="main-page">
                <div>
                    <Menu></Menu>
                </div>
                <div>
                    <Main></Main>
                </div>
                <div>
                    <SliderBack>Slider</SliderBack>
                </div>
            </div>
        </div>
    );
}

export default App;
