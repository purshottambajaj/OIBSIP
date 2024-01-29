import React from 'react';
import post1 from './images/post-1.jpg';
import post2 from './images/post-2.jpg';
import post3 from './images/post-3.jpg';

const blogPosts = [
  {
    title: 'First Time Home Owner Ideas',
    author: 'Kristin Watson',
    date: 'Dec 19, 2021',
    image: post1,
    link: '#',
  },
  {
    title: 'How To Keep Your Furniture Clean',
    author: 'Robert Fox',
    date: 'Dec 15, 2021',
    image: post2,
    link: '#',
  },
  {
    title: 'Small Space Furniture Apartment Ideas',
    author: 'Kristin Watson',
    date: 'Dec 12, 2021',
    image: post3,
    link: '#',
  },
];

const RecentBlog = () => {
  return (
    <div className="blog-section py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title text-4xl">Recent Blog</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <a href="{#}" className="more text-black">
              View All Posts
            </a>
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href={post.link} className="post-thumbnail">
                  <img src={post.image} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <span href={post.link}>{post.title}</span>
                  </h3>
                  <div className="meta">
                    <span>
                      by <span href={post.link}>{post.author}</span>
                    </span>{' '}
                    <span>
                      on <span href={post.link}>{post.date}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
