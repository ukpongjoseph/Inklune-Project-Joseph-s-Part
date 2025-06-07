import React, { useRef } from 'react'
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import '../style sheet/carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/first.jpg'
import img2 from '../assets/second.jpg'
import img3 from '../assets/third.jpg'
import img4 from '../assets/fourth.jpg'
import Slider from 'react-slick';
import { X } from 'lucide-react';

const BookSlide = () => {
    const books = useRef(null)
    const handleNext = () => {
        books.current.slickNext()
    }
    const handlePrev = () => {
        books.current.slickPrev()
    }
 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='max-w-full py-8 relative'>
        <div className='w-[95%] md:w-11/12 container mx-auto'>
            <Slider {...settings} ref={books}>
                <div className='holder w-[300px]'>
                  <img className='w-[300px] h-[250px] lg:h-[300px] rounded-lg' src={img1} alt="" />
                  <div className="overlay"></div>
                  <div className='text p-5 md:p-3 text-white'>
                    <h1 className='lg:text-2xl'>TEJUMADE'S PEN</h1>
                    <p className='font-semibold lg:text-lg'>Books have always been my safe space</p>
                  </div>
                  <X size={15} className='icon text-white'/>
                </div>
                <div className='holder w-[300px]'>
                  <img className='w-[300px] h-[250px] lg:h-[300px] rounded-lg' src={img2} alt="" />
                  <div className="overlay"></div>
                  <div className='text p-5 md:p-3 text-white'>
                    <h1 className='lg:text-2xl'>BIBIAN OKORO</h1>
                    <p className='font-semibold lg:text-lg'>Books have always been my safe space</p>
                  </div>
                  <X size={15} className='icon text-white'/>
                </div>
                <div className='holder w-[300px]'>
                  <img className='w-[300px] h-[250px] lg:h-[300px] rounded-lg' src={img3} alt="" />
                  <div className="overlay"></div>
                  <div className='text p-5 md:p-3 text-white'>
                    <h1 className='lg:text-2xl'>JOSEPH ANIEKAN</h1>
                    <p className='font-semibold lg:text-lg'>Books have always been my safe space</p>
                  </div>
                  <X size={15} className='icon text-gray-500'/>
                </div>
                <div className='holder w-[300px]'>
                  <img className='w-[300px] h-[250px] lg:h-[300px] rounded-lg' src={img4} alt="" />
                  <div className="overlay"></div>
                  <div className='text p-5 md:p-3 text-white'>
                    <h1 className='lg:text-2xl'>TEJUMADE'S PEN</h1>
                    <p className='font-semibold lg:text-lg'>Books have always been my safe space</p>
                  </div>
                  <X size={15} className='icon text-blue-500'/>
                </div>
                <div className='holder w-[300px]'>
                  <img className='w-[300px] h-[250px] lg:h-[300px] rounded-lg' src={img2} alt="" />
                  <div className="overlay"></div>
                  <div className='text p-5 md:p-3 text-white'>
                    <h1 className='lg:text-2xl'>BIBIAN OKORO</h1>
                    <p className='font-semibold lg:text-lg'>Books have always been my safe space</p>
                  </div>
                  <X size={15} className='icon text-white'/>
                </div>
                <div className='holder w-[300px]'>
                  <img className='w-[300px] h-[250px] lg:h-[300px] rounded-lg' src={img3} alt="" />
                  <div className="overlay"></div>
                  <div className='text p-5 md:p-3 text-white'>
                    <h1 className='lg:text-2xl'>JOSEPH ANIEKAN</h1>
                    <p className='font-semibold lg:text-lg'>Books have always been my safe space</p>
                  </div>
                  <X size={15} className='icon text-gray-500'/>
                </div>
                <div className='holder w-[300px]'>
                  <img className='w-[300px] h-[250px] lg:h-[300px] rounded-lg' src={img1} alt="" />
                  <div className="overlay"></div>
                    <div className='text p-5 md:p-3 text-white'>
                    <h1 className='lg:text-2xl'>TEJUMADE'S PEN</h1>
                    <p className='font-semibold lg:text-lg'>Books have always been my safe space</p>
                  </div>
                  <X size={15} className='icon text-white'/>
                </div>
                <div className='holder w-[300px]'>
                  <img className='w-[300px] h-[250px] lg:h-[300px] rounded-lg' src={img4} alt="" />
                  <div className="overlay"></div>
                    <div className='text p-5 md:p-3 text-white'>
                    <h1 className='lg:text-2xl'>TEJUMADE'S PEN</h1>
                    <p className='font-semibold lg:text-lg'>Books have always been my safe space</p>
                  </div>
                  <X size={15} className='icon text-blue-500'/>
                </div>
            </Slider>
            <div className='md:flex justify-between hidden'>
                <button onClick={handlePrev} className='absolute left-0 top-30'><ChevronLeft /></button>
                <button onClick={handleNext} className='absolute right-0 top-30'><ChevronRight /></button>
            </div>
            <div className='flex gap-3 justify-center pt-10 md:hidden'>
                <button className='text-white font-semibold bg-purple-500 rounded-md py-1 px-3' onClick={handlePrev}>Prev</button>
                <button className='text-white font-semibold bg-purple-500 rounded-md py-1 px-3' onClick={handleNext}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default BookSlide