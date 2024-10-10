import React from 'react';
import Blogs1 from '../../assets/blogs/blog1.jpg';
import Blogs2 from '../../assets/blogs/blog2.jpg';
import Blogs3 from '../../assets/blogs/blog3.jpg';
import Blogs4 from '../../assets/blogs/blog4.jpg';
import { motion } from 'framer-motion';
import { desc, link, title } from 'framer-motion/client';
import { UpdateFollower } from 'react-mouse-follower';


const BlogData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum harum suscipit nulla quas laborum modi velit! Corporis eaque esse dignissimos dicta sed, necessitatibus in.",
    link: "#",
    img: Blogs1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum harum suscipit nulla quas laborum modi velit! Corporis eaque esse dignissimos dicta sed, necessitatibus in.",
    link: "#",
    img: Blogs2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum harum suscipit nulla quas laborum modi velit! Corporis eaque esse dignissimos dicta sed, necessitatibus in.",
    link: "#",
    img: Blogs3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magnam!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum harum suscipit nulla quas laborum modi velit! Corporis eaque esse dignissimos dicta sed, necessitatibus in.",
    link: "#",
    img: Blogs4,
  },
]

const Blogs = () => {
  return (
    <>
      <section className='bg-gary-50'>
        <div className="container py-14">
          <h1 className='text-3xl font-bold text-center font-poppins pb-8'>Blogs</h1>
          <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6'>
            {BlogData.map((data) => {
              return (
                <UpdateFollower 
                  mouseOptions={{
                    backgroundColor: "balck",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "read",
                    textFontSize: "3px",
                    scale: 5,
                  }}
                >
                <div className='flex flex-col gap-6 items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300 '>
                  <img src={data.img} alt="" />
                  <div className='space-y-2 '>
                    <h1 className='text-xl font-bold line-clamp-2'>{data.title}</h1>
                    <p className='line-clamp-2'>{data.desc}</p>
                  </div>
                </div>
                </UpdateFollower>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs