import React from 'react';
import "./blog.css";
import Data from './Data';

// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.css';
//import 'swiper/modules/pagination.min.css';



const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <h2 className="section__title">
          Blogs
        </h2>

        <Swiper className="blog__container grid">
          {
            Data.map(({id, image, category, title, comment, date, author}) => {
              return (
                <SwiperSlide className="blog__item" key={id}
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={1}
                pagination={{clickable: true}}>
                  <div className="blog__thumb">
                      <span className="blog__category">{category}</span>
                      <img src={image} alt="" className='blog__img'/>
                    <h3 className="blog__title">{title}</h3>
                  </div>
                  <div className="blog__details">
                    <p className="blog__comment">{comment}</p>
                    <div className="blog__meta">
                      <span className="blog__date">{date}</span>
                      <span className="blog__dot"> . </span>
                      <span className='blog__author'>{author}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Blog