import React, { useState } from "react";

// Main App component
const App = () => {
  // Number of posts to display per page, changed from 2 to 3
  const postsPerPage = 3;
  // State to manage the current page number for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Array of blog post data
  const blogPosts = [
    {
      id: 1,
      // Original image path restored
      image: "/assets/blog.jpg",
      title: "5 Innovative Ways To Increasing Your Home’s Value This Year",
      date: "22 October 2024 in Home Improvement", // More specific category
      author: "John Doe",
      likes: 120,
      comments: 35,
      description:
        "Unlock the potential of your home with these innovative strategies. From smart tech integrations to eco-friendly upgrades, discover how to boost your property's value and appeal to future buyers. Get ready to transform your living space!",
    },
    {
      id: 2,
      image: "/assets/blog-2.jpg",
      title: "Tech That Takes Your Outdoor Spaces To The Next-Level Gadgets",
      date: "22 October 2024 in Gadgets & Outdoors",
      author: "Jane Smith",
      likes: 98,
      comments: 21,
      description:
        "Turn your backyard into a futuristic oasis! Explore a curated list of cutting-edge gadgets and smart solutions designed to enhance your outdoor living, from automated gardening systems to immersive entertainment setups.",
    },
    {
      id: 3,
      image: "/assets/blog-3.jpg",
      title: "Help Your Company Shift to a Digital Culture Seamlessly",
      date: "22 October 2024 in Business & Tech",
      author: "Alex Lee",
      likes: 155,
      comments: 48,
      description:
        "Embrace the digital transformation with confidence. This post outlines actionable steps and key considerations for businesses looking to transition to a more digital-centric culture, fostering innovation and efficiency.",
    },
    {
      id: 4,
      image: "/assets/blog-4.jpg",
      title: "Interactive Push Notifications: The Future of Engagement",
      date: "22 October 2024 in Software & UX",
      author: "Sarah Doe",
      likes: 72,
      comments: 15,
      description:
        "Go beyond basic alerts! Discover how interactive push notifications can revolutionize user engagement and personalization. Learn best practices and innovative examples to capture your audience's attention effectively.",
    },
    {
      id: 5,
      image: "/assets/blog-5.jpg",
      title: "Google Analytics Checklist: Is Your Website Data Accurate?",
      date: "22 October 2024 in Web Analytics",
      author: "Mike Johnson",
      likes: 210,
      comments: 60,
      description:
        "Ensure your website data is reliable and actionable. This comprehensive checklist guides you through verifying your Google Analytics setup, identifying common issues, and optimizing data collection for better insights.",
    },
    {
      id: 6,
      image: "/assets/blog-6.jpg",
      title: "Personal Debt or Company Debt? Exploring Your Options",
      date: "22 October 2024 in Finance & Planning",
      author: "Emily White",
      likes: 45,
      comments: 10,
      description:
        "Navigating financial challenges requires clear understanding. This article breaks down the differences between personal and company debt, offering insights into various options and strategies for responsible debt management.",
    },
  ];

  // Calculate total pages for pagination
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  // Calculate the starting index for slicing the blog posts array
  const startIndex = (currentPage - 1) * postsPerPage;
  // Get the posts for the current page
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  // CSS styles for the News page
  // All CSS is integrated directly into the component for self-containment
  return (
    <>
      <style>
        {`
        /* Global box-sizing for consistent layout */
        *, *::before, *::after {
            box-sizing: border-box;
        }

        /* CSS Variables for consistent styling */
        :root {
            --light-bg: #f8f9fa; /* Lighter background for a cleaner feel */
            --primary-blue: #007bff; /* Standard blue for primary actions/highlights */
            --dark-blue: #0056b3; /* Darker blue for hover states */
            --text-color: #343a40; /* Darker text for better contrast */
            --subtext-color: #6c757d; /* Muted text for secondary info */
            --border-color: #dee2e6; /* Light gray for borders */
            --accent-red: #dc3545; /* Strong red for accents, like active pagination */
            --font-main: 'Inter', sans-serif; /* Main font family */
            --shadow-light: rgba(0, 0, 0, 0.05);
            --shadow-medium: rgba(0, 0, 0, 0.1);
            --shadow-strong: rgba(0, 0, 0, 0.15);
        }

        body {
            margin: 0;
            font-family: var(--font-main);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: var(--light-bg);
            line-height: 1.7; /* Improved readability */
            color: var(--text-color);
        }

        /* --- News Page Container --- */
        .news-page {
            max-width: 1280px; /* Increased max width for more content space */
            margin: 50px auto; /* Centered with larger vertical margin */
            padding: 0 30px; /* More horizontal padding for larger screens */
            box-sizing: border-box;
            background-color: var(--light-bg);
        }

        /* --- News Layout (Main Content + Sidebar) --- */
        .news-layout {
            display: flex;
            gap: 50px; /* Larger gap between main content and sidebar */
            align-items: flex-start; /* Align items to the top */
        }

        /* --- Main News Content Area (col-md-8 equivalent) --- */
        .news-box {
            flex: 2.5; /* Takes up more space for main content */
            min-width: 0; /* Allows content to shrink */
        }

        .news-main {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 8px 25px var(--shadow-light); /* Refined shadow */
            overflow: hidden;
            margin-bottom: 40px; /* More space between news posts */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .news-main:hover {
            transform: translateY(-8px); /* More pronounced lift on hover */
            box-shadow: 0 15px 35px var(--shadow-medium); /* Stronger shadow on hover */
        }

        .news-image-wrapper {
            position: relative;
            height: 350px; /* Taller image for better visual impact */
            overflow: hidden;
        }

        .news-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
        }

        .news-main:hover .news-image {
            transform: scale(1.08); /* More pronounced zoom on image hover */
        }

        .news-date {
            position: absolute;
            bottom: 25px; /* Slightly adjusted position */
            left: 25px;
            background-color: var(--primary-blue);
            color: #fff;
            font-size: 14px; /* Slightly larger font */
            font-weight: 600;
            padding: 8px 18px; /* More padding */
            border-radius: 10px; /* Softer rounded corners */
            box-shadow: 0 4px 12px var(--shadow-medium);
            letter-spacing: 0.8px; /* Tighter letter spacing */
            text-transform: uppercase;
        }

        .news-content {
            padding: 30px; /* More generous padding */
        }

        .news-title {
            font-size: 30px; /* Larger, more impactful title */
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.3;
            color: var(--text-color);
        }

        .news-meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 25px; /* Increased gap */
            font-size: 15px; /* Slightly larger font */
            color: var(--subtext-color);
            margin-bottom: 25px;
        }

        .news-meta span {
            display: flex;
            align-items: center;
            gap: 10px; /* Increased gap between icon and text */
            color: var(--primary-blue); /* Color icons */
        }

        .news-meta .icon {
            width: 20px; /* Larger icons */
            height: 20px;
            vertical-align: middle;
        }

        .news-description {
            color: var(--subtext-color);
            font-size: 16px; /* Slightly larger description font */
            line-height: 1.8; /* Improved line height for readability */
            margin-bottom: 30px;
        }

        .news-readmore {
            text-align: left;
        }

        .news-readmore button {
            padding: 14px 30px; /* Larger button */
            font-size: 16px;
            background-color: var(--primary-blue); /* Solid primary color button */
            border: none; /* No border for solid button */
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            box-shadow: 0 5px 15px var(--shadow-medium); /* Button shadow */
        }

        .news-readmore button:hover {
            background-color: var(--dark-blue);
            color: white;
            transform: translateY(-3px); /* More pronounced lift */
            box-shadow: 0 8px 20px var(--shadow-strong);
        }

        /* --- News Sidebar --- */
        .news-sidebar {
            flex: 1; /* Takes up less space than main content */
            max-width: 400px; /* Slightly wider sidebar */
            display: flex;
            flex-direction: column;
            gap: 40px; /* Larger gap between sidebar sections */
            position: sticky;
            top: 50px; /* Adjusted sticky position */
            align-self: flex-start;
            background-color: white;
            border-radius: 12px;
            padding: 30px; /* More padding */
            box-shadow: 0 8px 25px var(--shadow-light);
        }

        .sidebar-section {
            padding-bottom: 25px; /* More space below each section */
            border-bottom: 1px solid var(--border-color);
        }

        .sidebar-section:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .sidebar-section h3 {
            font-size: 22px; /* Larger heading font */
            font-weight: 700;
            margin-bottom: 18px; /* More space below heading */
            color: var(--text-color);
            border-left: 4px solid var(--primary-blue); /* Accent border on headings */
            padding-left: 10px; /* Space for accent border */
        }

        .sidebar-search {
            position: relative;
        }

        .sidebar-search input {
            width: 100%;
            padding: 14px 50px 14px 25px; /* Larger padding for search input */
            font-size: 16px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            outline: none;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .sidebar-search input:focus {
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); /* More prominent focus ring */
        }

        .sidebar-search-icon {
            position: absolute;
            right: 20px; /* Adjusted icon position */
            top: 50%;
            transform: translateY(-50%);
            font-size: 18px; /* Larger icon */
            color: var(--subtext-color);
        }

        .sidebar-section p,
        .sidebar-section li {
            font-size: 16px; /* Larger text in sidebar */
            color: var(--subtext-color);
            line-height: 1.8;
            margin-bottom: 10px; /* More space between list items/paragraphs */
        }

        .sidebar-section ul {
            list-style: none;
            padding-left: 0;
        }

        .sidebar-section li {
            padding: 8px 0; /* More padding */
            transition: color 0.2s ease, transform 0.2s ease;
            cursor: pointer;
        }

        .sidebar-section li:hover {
            color: var(--primary-blue);
            transform: translateX(5px); /* Slight shift on hover */
        }

        .sidebar-posts {
            display: flex;
            flex-direction: column;
            gap: 25px; /* More space between recent posts */
        }

        .sidebar-post-item {
            display: flex;
            gap: 20px; /* More space between image and content */
            align-items: flex-start;
            text-align: left;
            transition: transform 0.2s ease; /* Hover effect for post item */
        }
        .sidebar-post-item:hover {
            transform: translateX(5px);
        }

        .posts-img {
            flex-shrink: 0;
            width: 100px; /* Slightly larger images */
            height: 100px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px var(--shadow-light);
        }

        .posts-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .posts-content {
            flex: 1;
        }

        .post-date {
            font-size: 13px; /* Slightly larger */
            color: var(--subtext-color);
            margin-bottom: 6px;
        }

        .post-title {
            font-size: 16px; /* Larger title */
            font-weight: 600;
            color: var(--text-color);
            margin-bottom: 8px;
            line-height: 1.4;
            transition: color 0.2s ease;
            cursor: pointer;
        }

        .post-title:hover {
            color: var(--primary-blue);
        }

        .post-by {
            font-size: 13px;
            color: var(--subtext-color);
            margin-right: 5px;
        }

        .post-author {
            font-size: 13px;
            color: var(--primary-blue);
            display: inline;
            font-weight: 500;
        }

        .sidebar-comments {
            display: flex;
            flex-direction: column;
            gap: 18px; /* More space between comments */
        }

        .sidebar-comment-item {
            background-color: var(--light-bg);
            padding: 18px; /* More padding */
            border-radius: 10px; /* Softer corners */
            box-shadow: 0 2px 8px var(--shadow-light);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .sidebar-comment-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px var(--shadow-medium);
        }

        .comment-text {
            font-size: 15px;
            color: var(--text-color);
            margin-bottom: 10px;
            line-height: 1.6;
        }

        .comment-author {
            font-size: 14px;
            color: var(--subtext-color);
            font-style: italic;
            text-align: right;
            display: block;
        }

        /* Tags */
        .tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 12px; /* More space between tags */
            margin-top: 20px;
        }

        .tag-button {
            background-color: var(--border-color);
            border: none;
            padding: 10px 18px; /* More padding */
            border-radius: 30px; /* More rounded pill shape */
            font-size: 15px; /* Larger font */
            cursor: pointer;
            transition: all 0.3s ease;
            color: var(--text-color);
            font-weight: 500;
            box-shadow: 0 2px 5px var(--shadow-light); /* Subtle tag shadow */
        }

        .tag-button:hover {
            background-color: var(--primary-blue);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 4px 10px var(--shadow-medium);
        }

        /* Pagination */
        .pagination {
            display: flex;
            justify-content: center;
            list-style: none;
            gap: 12px; /* More space between pagination buttons */
            margin-top: 50px; /* Larger space above pagination */
            padding: 0;
        }

        .pagination-button {
            background-color: var(--primary-blue);
            border: none;
            padding: 12px 18px; /* Larger buttons */
            border-radius: 8px;
            cursor: pointer;
            color: white;
            font-weight: 600;
            transition: background-color 0.3s ease, transform 0.3s ease;
            min-width: 45px; /* Ensures consistent width */
            text-align: center;
            box-shadow: 0 3px 10px var(--shadow-medium);
        }

        .pagination-button:hover {
            background-color: var(--dark-blue);
            transform: translateY(-3px);
        }

        .pagination-button.active {
            background-color: var(--accent-red); /* Stronger active color */
            font-weight: bold;
            box-shadow: 0 5px 15px var(--shadow-strong);
            transform: scale(1.05); /* Slight scale on active */
        }

        /* --- Responsive Adjustments --- */

        /* Tablets and smaller desktops (max-width: 1024px) */
        @media (max-width: 1024px) {
            .news-page {
                margin: 30px auto;
                padding: 0 20px; /* Adjusted padding */
            }
            .news-layout {
                flex-direction: column; /* Stack main content and sidebar */
                gap: 30px;
            }
            .news-box,
            .news-sidebar {
                flex: none; /* Remove flex sizing */
                width: 100%; /* Take full width */
                max-width: none; /* Remove max-width constraint */
                position: static; /* Remove sticky behavior on smaller screens */
                top: auto;
                align-self: auto;
            }
            .news-image-wrapper {
                height: 280px; /* Adjust image height for tablets */
            }
            .news-date {
                bottom: 15px;
                left: 15px;
                font-size: 13px;
                padding: 6px 14px;
            }
            .news-title {
                font-size: 24px;
            }
            .news-meta {
                gap: 18px;
                font-size: 14px;
            }
            .news-meta .icon {
                width: 18px;
                height: 18px;
            }
            .news-description {
                font-size: 15px;
            }
            .news-readmore button {
                padding: 12px 25px;
                font-size: 15px;
            }
            .news-sidebar {
                padding: 25px;
                gap: 30px;
            }
            .sidebar-section h3 {
                font-size: 20px;
                margin-bottom: 15px;
            }
            .sidebar-search input {
                padding: 12px 45px 12px 20px;
                font-size: 15px;
            }
            .sidebar-search-icon {
                font-size: 16px;
            }
            .sidebar-section p,
            .sidebar-section li {
                font-size: 15px;
            }
            .sidebar-post-item {
                gap: 15px;
            }
            .posts-img {
                width: 90px;
                height: 90px;
            }
            .post-title {
                font-size: 15px;
            }
            .sidebar-comment-item {
                padding: 15px;
            }
            .comment-text {
                font-size: 14px;
            }
            .tag-button {
                padding: 8px 15px;
                font-size: 14px;
            }
            .pagination {
                margin-top: 40px;
                gap: 10px;
            }
            .pagination-button {
                padding: 10px 16px;
                font-size: 15px;
                min-width: 40px;
            }
        }

        /* Mobile devices (max-width: 767px) */
        @media (max-width: 767px) {
            .news-page {
                margin: 20px auto;
                padding: 0 15px;
            }
            .news-layout {
                gap: 25px;
            }
            .news-main {
                border-radius: 10px;
                margin-bottom: 25px;
            }
            .news-image-wrapper {
                height: 220px; /* Further adjust image height for mobile */
            }
            .news-date {
                bottom: 10px;
                left: 10px;
                font-size: 12px;
                padding: 5px 12px;
                border-radius: 8px;
            }
            .news-content {
                padding: 20px;
            }
            .news-title {
                font-size: 20px;
                margin-bottom: 15px;
            }
            .news-meta {
                flex-direction: column; /* Stack meta items vertically */
                align-items: flex-start;
                gap: 10px;
                font-size: 13px;
                margin-bottom: 18px;
            }
            .news-meta .icon {
                width: 16px;
                height: 16px;
            }
            .news-description {
                font-size: 14px;
                margin-bottom: 20px;
            }
            .news-readmore button {
                padding: 10px 20px;
                font-size: 14px;
            }
            .news-sidebar {
                padding: 20px;
                gap: 25px;
            }
            .sidebar-section h3 {
                font-size: 18px;
                margin-bottom: 12px;
            }
            .sidebar-search input {
                padding: 10px 40px 10px 15px;
                font-size: 14px;
            }
            .sidebar-search-icon {
                font-size: 15px;
            }
            .sidebar-section p,
            .sidebar-section li {
                font-size: 14px;
                margin-bottom: 8px;
            }
            .sidebar-post-item {
                gap: 12px;
            }
            .posts-img {
                width: 80px;
                height: 80px;
            }
            .post-title {
                font-size: 14px;
            }
            .post-date, .post-by, .post-author {
                font-size: 12px;
            }
            .sidebar-comment-item {
                padding: 12px;
            }
            .comment-text {
                font-size: 13px;
            }
            .comment-author {
                font-size: 12px;
            }
            .tags-container {
                gap: 10px;
                margin-top: 15px;
            }
            .tag-button {
                padding: 7px 12px;
                font-size: 13px;
            }
            .pagination {
                margin-top: 30px;
                gap: 10px;
            }
            .pagination-button {
                padding: 8px 14px;
                font-size: 14px;
                min-width: 35px;
            }
        }
        `}
      </style>

      <div className="news-page">
        <div className="news-layout">
          {/* Main News Content Area */}
          <div className="news-box">
            {/* Map through current posts to display them */}
            {currentPosts.map((post) => (
              <div className="news-main" key={post.id}>
                <div className="news-image-wrapper">
                  <img src={post.image} alt="Blog Post" className="news-image" />
                  <div className="news-date">{post.date}</div>
                </div>
                <div className="news-content">
                  <h2 className="news-title">{post.title}</h2>
                  <div className="news-meta">
                    {/* Author information - replaced FaRegUser with inline SVG */}
                    <span>
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                      {post.author}
                    </span>
                    {/* Likes count - replaced FaHeart with inline SVG */}
                    <span>
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347.3 25.6 288.5 83.1 256 160c-32.5-76.9-91.3-134.4-162.6-147.6C50.5 45.1 0 104.7 0 174.6v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                      {post.likes} Like Post
                    </span>
                    {/* Comments count - replaced FaRegCommentDots with inline SVG */}
                    <span>
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M123.6 391.3c12.9-9.4 29.4-11.7 44-6.5c2.4 1 4.4 2.1 6 3.3c35 25.2 76.5 36.7 119.3 34.3c120.4-6.9 214.3-119.1 214.3-241.3C512 114.6 397.4 0 256 0S0 114.6 0 256c0 62.1 29.8 119.6 77.4 160l-42.8 91.7c-7.8 16.7 1.5 36.5 18.2 44.3s36.5-1.5 44.3-18.2L123.6 391.3z"/></svg>
                      {post.comments} Comment
                    </span>
                  </div>
                  <p className="news-description">{post.description}</p>
                  <div className="news-readmore">
                    <button>Read More</button>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination controls */}
            <ul className="pagination">
              {/* Generate pagination buttons based on total pages */}
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className="page-item">
                  <button
                    onClick={() => setCurrentPage(i + 1)} // Update current page on click
                    className={`pagination-button ${
                      currentPage === i + 1 ? "active" : "" // Apply 'active' class to current page
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* News Sidebar */}
          <aside className="news-sidebar">
            {/* Search Posts Section */}
            <div className="sidebar-section">
              <h3>Search Posts</h3>
              <div className="sidebar-search">
                <input type="text" placeholder="Search your keyword..." />
                <span className="sidebar-search-icon">🔍</span>
              </div>
            </div>

            {/* About Us Section */}
            <div className="sidebar-section">
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {/* Blog Categories Section */}
            <div className="sidebar-section">
              <h3>Blog Categories</h3>
              <ul>
                <li>Accessories (3)</li>
                <li>Lifestyle (3)</li>
                <li>Phone (2)</li>
                <li>Electronics (5)</li>
                <li>Gadgets (4)</li>
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div className="sidebar-section">
              <h3>Recent Posts</h3>
              <div className="sidebar-posts">
                {/* Loop to display example recent posts */}
                {[
                  { img: "/assets/blog-1.jpg", title: "Future of AI in Tech", date: "22 October 2024", author: "Jane Doe" },
                  { img: "/assets/blog-2.jpg", title: "Smart Home Devices Review", date: "20 October 2024", author: "John Smith" },
                  { img: "/assets/blog-3.jpg", title: "Tips for Productive Work", date: "18 October 2024", author: "Alice Brown" }
                ].map((post, i) => (
                  <div className="sidebar-post-item" key={i}>
                    <div className="posts-img">
                      <img src={post.img} alt="Post Thumbnail" />
                    </div>
                    <div className="posts-content">
                      <p className="post-date">{post.date}</p>
                      <h4 className="post-title">{post.title}</h4>
                      <span className="post-by">by</span>
                      <p className="post-author">{post.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Comments Section */}
            <div className="sidebar-section sidebar-comments">
              <h3>Recent Comments</h3>
              <div className="sidebar-comment-item">
                <p className="comment-text">"Great insights! Learned a lot from this post."</p>
                <p className="comment-author">– John Doe</p>
              </div>
              <div className="sidebar-comment-item">
                <p className="comment-text">"Thanks for sharing this informative article!"</p>
                <p className="comment-author">– Jane Smith</p>
              </div>
              <div className="sidebar-comment-item">
                <p className="comment-text">"Very well written. Keep up the good work!"</p>
                <p className="comment-author">– Alex Lee</p>
              </div>
            </div>

            {/* Tags Section */}
            <div className="sidebar-section sidebar-tags">
              <h3>Tags</h3>
              <div className="tags-container">
                {[
                  "Tech", "Home", "Outdoor", "Gadgets", "Finance", "DIY", "Culture", "Design", "Tips", "Innovation"
                ].map((tag, idx) => (
                  <button className="tag-button" key={idx}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default App;
