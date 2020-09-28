import React, { useRef, useEffect, useState } from "react";
import './App.scss'
import {gsap} from 'gsap';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectCube} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-cube/effect-cube.scss';
import img from './images/aust1.jpg'
import img1 from './images/photo1.jpg'
import img2 from './images/photo2.jpg'
import img3 from './images/photo3.jpg'
import img6 from './images/photo6.jpg'
import img4 from './images/photo4.jpg'
import img7 from './images/photo7.jpg'
import img8 from './images/photo8.jpg'
import img9 from './images/photo9.jpg'

function App() {

  const tl = gsap.timeline({defaults: { ease: 'power1.out', stagger: .25}});

  SwiperCore.use([EffectCube]);
  const slides = [img, img1, img2, img3, img6, img7, img8, img4];

  useEffect(() => {
    tl.to('.text', {y: '0%', duration: 1});
    tl.to('.slider', {y: '-100%', duration: 1.5}, '+=.5');
    tl.to('.intro', {y: '-100%', duration: 1}, '-=1.5');
    tl.fromTo('.hi', {opacity: '0'}, {opacity: '1', duration: 1});   
  });

  return (
    <div className="App">
      <section className='landing'>
        <div className='hi'>
          <h1>SWIPE</h1>
          <Swiper effect="cube">
          {slides.map((el) => {
            return <SwiperSlide><img src={el}/></SwiperSlide>;
          })}
          </Swiper>
        </div>
      </section>
      <div className='intro'>
        <div className='intro-text'>
          <div className='hide'>
            <span className='text'>Discover The Wonderfull </span>
          </div>
          <div className='hide'>
            <span className='text'>Island Continent</span>
          </div>
          <div className='hide'>
            <span className='text'>Australia</span>
          </div>
        </div>
      </div>
      <div className='slider'></div>
    </div>
  );
}

export default App;
