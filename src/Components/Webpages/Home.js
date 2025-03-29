import React, { useState, useEffect } from 'react';
import './Webpages.css';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Timeline from './Timeline';


const Home = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        // Function to check scroll position and show/hide button
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const projects = [
        {
            title: "ZoneOut",
            description: "AI-Agent to answer questions during a live Zoom call. Built with LLMs, VLMs and vector databases. \
            Won 3rd place at Stanford TreeHacks 2025.",
            link: "https://devpost.com/software/zoneout-atz5pe"
        },
        {
            title: "CIFAR-10 Image Classifier",
            description: "Conducted experiments with CNNs and multi-gpu training (tensor-parallel, DDP). Hooked models to \
            Optuna for hyperparameter tuning.",
            link: "https://github.com/KANNAHWORLD/itp450imageclassification"
        },
    ];

    const posts = [
        {
            title: "My Experience at AWS Summit 2024",
            excerpt: "In May, I attended the AWS Summit in Los Angeles. While the conference is aimed at industry developers,\
            I attended as a student to explore more about the latest trends. I had the opportunity to attend workshops, listen to speakers\
            and talk to engineers from tech companies and solutions architects from AWS.",
            date: "May 22, 2024",
            image: "/AWS_Summit_IMG.jpeg",
            link: "/Resources/AWSSummit2024"
        },
        // {
        //     title: "Blog Post Title 2",
        //     excerpt: "Another interesting excerpt from this second blog post. Keep it concise but informative, highlighting the main point of your article.",
        //     date: "February 20, 2024",
        //     image: "/placeholder-image-2.jpg",
        //     link: "https://link-to-post-2.com"
        // },
        // {
        //     title: "Blog Post Title 3",
        //     excerpt: "The third blog post excerpt should follow the same pattern. Make sure it's engaging and relevant to the target audience.",
        //     date: "March 10, 2024", 
        //     image: "/placeholder-image-3.jpg",
        //     link: "https://link-to-post-3.com"
        // }
    ];
    
    // Fun Extras data array
    const funExtras = [
        {
            icon: "☕",
            title: "Coffee!",
            description: "Espresso + Pour-over. Always looking to try new coffee beans/shops.",
            link: '/coffee',
            image: "/Coffee.jpeg"
        },
        {
            icon: "🎵",
            title: "Skiing",
            description: "Avid skier. I love Mammoth and hope to make it up to Whistler-Blackcomb!",
            link: '/skiing',
            image: '/Mammoth_Skiing.jpeg'
        },
        {
            icon: "📚",
            title: "Reading",
            description: "Currently reading \"Thinking, Fast and Slow\" by Daniel Kahneman and \"The Three-Body Problem\" by Liu Cixin.",
            link: null,
            image: "/images/books.jpg"
        }
    ];

    return (
        <div className="Background home-background">
            <div className="profile-section">
                <div className="profile-left">
                    <div className="bio-section">
                        <h2 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>Hello, I'm Sid!</h2>
                        <p>
                            I am a software engineer and a graduate from USC. 
                            I am passionate about AI, machine learning, and distributed computing. 
                            I lead the Data Science club and was a part of the Quantitative Finance club at USC. 
                            When I'm not coding or working on data-driven projects, 
                            I love brewing coffee and experimenting in the kitchen—perfecting the art of a 
                            great espresso (recently pour-over) and trying out new recipes.
                        </p>
                    </div>
                </div>
                <div className="profile-right">
                    <img 
                        src="/Sid_Professional.jpg" 
                        alt="Sid Bansal" 
                        className="profile-image"
                    />
                    <div className="social-links">
                        <a 
                            href="https://www.linkedin.com/in/siddharth-bansal-20/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <FaLinkedin />
                        </a>
                        <a 
                            href="https://github.com/KANNAHWORLD" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            {/* Career Timeline Section */}
            <section className="page-section timeline-section full-width" style={{ backgroundColor: '#000000' }}>
                <div className="section-content" style={{maxWidth: '95%'}}>
                    <Timeline />
                </div>
            </section>
            
            {/* Featured Projects Section */}
            <section className="page-section projects-section">
                <div className="projects-container">
                    <h2 className="projects-title">
                        Featured Projects
                    </h2>
                    
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className="project-tile"
                            >
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="project-link"
                                >
                                    View Project
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Posts Section */}
            <section className="page-section posts-section">
                <div className="posts-container">
                    <h2 className="posts-title">Posts</h2>
                    
                    <div className="posts-grid">
                        {posts.map((post, index) => (
                            <div key={index} className="post-box">
                                <div className="post-content">
                                    <div>
                                        <h3 className="post-title">{post.title}</h3>
                                        <p className="post-excerpt">{post.excerpt}</p>
                                    </div>
                                    <div className="post-footer">
                                        <div className="post-meta">
                                            <span className="post-date"><FaClock /> {post.date}</span>
                                        </div>
                                        <a 
                                            href={post.link} 
                                            // target="_blank" 
                                            // rel="noopener noreferrer" 
                                            className="post-link"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Fun Extras Section */}
            <section className="page-section fun-extras-section">
                <div className="fun-extras-container">
                    <h2 className="fun-extras-title">Fun Extras</h2>
                    
                    <div className="fun-extras-grid" style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2rem',
                        width: '100%'
                    }}>
                        {funExtras.map((extra, index) => (
                            <div 
                                key={index} 
                                className="fun-extra-item"
                                style={{ 
                                    backgroundColor: '#1a1a1a', // Greyish background similar to posts section
                                    borderRadius: '8px',
                                    border: '1px solid var(--primary-gold)',
                                    padding: '1.5rem',
                                    height: '100%'
                                }}
                            >
                                {/* Always render both image and icon, but control visibility with CSS */}
                                {extra.image && (
                                    <img 
                                        src={extra.image} 
                                        alt={extra.title} 
                                        className="fun-extra-image"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const iconElement = document.querySelector(`.icon-${index}`);
                                            if (iconElement) {
                                                iconElement.style.display = 'block';
                                            }
                                        }}
                                    />
                                )}
                                
                                {/* Always render the icon div, but hide it initially if there's an image */}
                                <div 
                                    className={`fun-extra-icon icon-${index}`} 
                                    style={{ display: extra.image ? 'none' : 'block' }}
                                >
                                    {extra.icon}
                                </div>
                                
                                {extra.link ? (
                                    <h3>
                                        <a 
                                            href={extra.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="fun-extra-title-link"
                                        >
                                            {extra.title}
                                        </a>
                                    </h3>
                                ) : (
                                    <h3>{extra.title}</h3>
                                )}
                                
                                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{extra.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Scroll to Top Button */}
            <div 
                className={`scroll-to-top ${showScrollButton ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
            >
                <FaArrowUp className="scroll-to-top-icon" />
            </div>
        </div>
    );
};

export default Home;
