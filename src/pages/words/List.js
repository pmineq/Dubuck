import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Result = (props) => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold : 50,
  };

  
  return (
		<Layout header={{title:'챌린지 결과', Backbtn:true, link:'/Main'}} containName='result'>

      <div className="result-wrap today">
        <strong>today</strong>
        
        <Slider {...settings}>
          <div className='result-item'>
            <Link to="/Challenge/Detail">
              <p className="date">2023.04.27</p>
              <strong className="number">17</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <span className="perfect">PERFECT</span> {/* 만점일때 노출 */}
                  <p className="count">100</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">0</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='result-item'>
            <Link to="">
              <p className="date">2023.04.27</p>
              <strong className="number">18</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <p className="count">1</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">99</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='result-item'>
            <Link to="">
              <p className="date">2023.04.27</p>
              <strong className="number">19</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <p className="count">1</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">99</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='result-item'>
            <Link to="">
              <p className="date">2023.04.27</p>
              <strong className="number">20</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <p className="count">1</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">99</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='result-item'>
            <Link to="">
              <p className="date">2023.04.27</p>
              <strong className="number">21</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <p className="count">1</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">99</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='result-item'>
            <Link to="">
              <p className="date">2023.04.27</p>
              <strong className="number">22</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <p className="count">1</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">99</p>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </div>

      <div className="result-wrap record">
        <strong>record</strong>
        <ul className="result-list">
          <li>
            <Link to="">
              <p className="date">2022.03.28</p>
              <strong className="number">15</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <p className="count">5</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">5</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <p className="date">2022.01.01</p>
              <strong className="number">14</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <span className="perfect">PERFECT</span> {/* 만점일때 노출 */}
                  <p className="count">10</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">0</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <p className="date">2022.12.12</p>
              <strong className="number">13</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <p className="count">0</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">1</p>
                </div>
              </div>
              </Link>
            </li>
          <li>
            <Link to="">
              <p className="date">2022.12.10</p>
              <strong className="number">12</strong>
              <div className="length">
                <div className="answer">
                  <p>정답수</p>
                  <p className="count">99</p>
                </div>
                <div className="incorrect">
                  <p>오답수</p>
                  <p className="count">1</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

		</Layout>
  );
};

export default Result;