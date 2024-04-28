import React from 'react';
import { NavBar } from './NavBar';
import './Homecss.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Sample data for blogs
const blogsData = [
    {
        id: 1,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    {
        id: 2,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    {
        id: 3,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    {
        id: 4,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    {
        id: 5,
        image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/13901/conversions/b0dc8f35-3126-4eae-b575-38285553c9a4-thumb.jpg",
        title: "The Gift of Life: Why Blood Donation Matters",
        date: '09/12/2023',
        content: "In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.",
    },
    // Add more sample blogs as needed
];

const Blog = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true, // For fade effect transition
        cssEase: 'linear', // For linear transition
    };

    return (
        <div>
            <NavBar />
            <div id='blog_header_bg' className="blog_header">
                <div className='title_blog_h'>
                    <h2>
                        Blog
                    </h2>
                    <h3>The Gift of Life: Why Blood Donation Matters</h3>
                    <p>In this blog, we delve into the profound impact of blood donation and why it's a crucial act of kindness that saves lives. Discover the inspiring stories behind blood donation and learn how you can make a difference today.</p>
                </div>
            </div>
                <Slider {...settings} className='bg_b_s'>
                    <div className='blog_img_slide'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1NsO6UBO4cImGs-iym501KM_4QpIY2GBSxCJfjUqryt6nnwBD7MykpXnI0y165KJLIE&usqp=CAU" alt="Image 1" />
                        <div className="slider-caption">`</div>
                    </div>
                    <div className='blog_img_slide'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tTmWpNEtHWUFHj8meyv6Xs5QzMxcxW-XtKLOVPB5hQ&s" alt="Image 2" />
                        <div className="slider-caption"></div>
                    </div>
                    <div className='blog_img_slide'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbi4uDBZ6NyZr4LDx-5eHCeN0t_tq9XKesLo69dkGFvzx4Q2IzInETa7gL4AoCh6qOug&usqp=CAU" alt="Image 3" />
                        <div className="slider-caption"></div>
                    </div>
                    <div className='blog_img_slide'>
                    <img src="data:image/png;base64,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" alt="Image 4" />
                        <div className="slider-caption"></div>
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
            <div className="blog-container">
                <div className="blog-cards">
                    {blogsData.map(blog => (
                        <div key={blog.id} className="blog-card">
                            <img src={blog.image} alt={blog.title} />
                            <div className='blog_texts'>
                                <h4>{blog.title}</h4>
                                <p>{blog.content}</p>
                                <h6>{blog.date}</h6>
                                <a href="#">Read More >></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
