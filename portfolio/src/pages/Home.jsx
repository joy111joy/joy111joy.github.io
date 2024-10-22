import React, { useEffect, useRef } from "react";
import '../index.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const infoRef1 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    entry.target.classList.remove('slide-out');
                } else {
                    entry.target.classList.add('slide-out');
                    entry.target.classList.remove('slide-in');
                }
            });
        }, {
            threshold: 0.1 
        });

        if (infoRef1.current) {
            observer.observe(infoRef1.current);
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const stars1 = document.getElementById('stars');
            const stars2 = document.getElementById('stars2');
            const stars3 = document.getElementById('stars3');

            if (stars1) stars1.style.transform = `translateY(${scrollPosition * 0.1}px)`; 
            if (stars2) stars2.style.transform = `translateY(${scrollPosition * 0.2}px)`; 
            if (stars3) stars3.style.transform = `translateY(${scrollPosition * 0.3}px)`; 
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (infoRef1.current) observer.unobserve(infoRef1.current);
        };
    }, []);

    return (
        <div id="Home">
            <div id="ImgCont">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="backgroundImage"></div> 

            </div>
            <h2 id="BannerHead">Front-End & UI/UX <span className="Break"><br /></span>Developer</h2>
            <h3 id="BannerSub">Web Design Out of this world.</h3>

            <div id="HomeCont">
                <div className="InfoCont" ref={infoRef1}>
                    <img src="img/HeadShot2.jpeg" alt="Profile" />
                    <div className="InfoText">
                        <h2>Hi! I’m <span id="Grad">Mitchel,</span><br /> A new-grad <span id="Grad">Web Developer.</span></h2>
                        <p>I’m passionate about building clean, functional, and visually appealing websites. Recently graduated, I’ve been diving deep into front-end technologies like HTML, CSS, JavaScript, and React. I’m constantly learning new techniques and best practices to create seamless, responsive user experiences. <br /><br />
                        In my spare time I strive to enhance my abilities by learning new technologies and features that can improve my design. I'm eager to apply my abilities to more real-world projects.</p>
                    </div>
                </div>

                <div id="TechCont">
                    <h2>Technologies</h2>

                    <div className="TechScroll">
                        <div id="TechScrollInner">
                            <div className="TechItem"><img src="img/HtmlIcon.svg" alt="HTML5" /><p>HTML</p></div>
                            <div className="TechItem"><img src="img/CSSIcon.svg" alt="CSS3" /><p>CSS</p></div>
                            <div className="TechItem"><img src="img/JavaScriptIcon.svg" alt="JavaScript" /><p>JavaScript</p></div>
                            <div className="TechItem"><img src="img/ReactIcon.svg" alt="React" /><p>React</p></div>
                            <div className="TechItem"><img src="img/FigmaIcon.svg" alt="Figma" /><p>Figma</p></div>
                            <div className="TechItem"><img src="img/FirebaseIcon.svg" alt="Firebase" /><p>Firebase</p></div>
                        </div>
                        <div id="TechScrollInner">
                            <div className="TechItem"><img src="img/HtmlIcon.svg" alt="HTML5" /><p>HTML</p></div>
                            <div className="TechItem"><img src="img/CSSIcon.svg" alt="CSS3" /><p>CSS</p></div>
                            <div className="TechItem"><img src="img/JavaScriptIcon.svg" alt="JavaScript" /><p>JavaScript</p></div>
                            <div className="TechItem"><img src="img/ReactIcon.svg" alt="React" /><p>React</p></div>
                            <div className="TechItem"><img src="img/FigmaIcon.svg" alt="Figma" /><p>Figma</p></div>
                            <div className="TechItem"><img src="img/FirebaseIcon.svg" alt="Firebase" /><p>Firebase</p></div>
                        </div>
                    </div>
                </div>


                <div className="ProjCont">
                    <h2>Projects</h2>

                        <div className="slider" style={{ "--quantity": 6 }}>
                            <div className="item" style={{ "--position": 1 }}>
                                <Link>
                                <img src="img/SpinTopPreview.png" alt="Project 1" />
                                </Link>
                            </div>
                            <div className="item" style={{ "--position": 2 }}>
                                <Link>
                            <img src="img/ProFireworksPreview.png" alt="Project 2" />
                            </Link>   
                            </div>
                            <div className="item" style={{ "--position": 3 }}>
                                <Link>
                            <img src="img/SmartSolePreview.png" alt="Project 3" />
                            </Link>
                            </div>
                            <div className="item" style={{ "--position": 4 }}>
                                <Link>
                            <img src="img/SpinTopAboutPreview.png" alt="Project 4" />
                            </Link>
                            </div>
                            <div className="item" style={{ "--position": 5 }}>
                                <Link>
                            <img src="img/RisingTidePreview.png" alt="Project 5" />
                            </Link>
                            </div>
                            <div className="item" style={{ "--position": 6 }}>
                                <Link>
                            <img src="img/JoyProjectsPreview.png" alt="Project 5" />
                            </Link>
                            </div>
                        </div>


                    </div>

                    <div className="ContactCont">
                        <h2>We'd make a good team</h2>
                        <p>I'm excited to take on new challenges and collaborate on innovative projects. 
                            Feel free to reach out and let's create something amazing together!</p>  

                        <Link to="/contact" className="ContactBtn">Contact Me</Link>              
                    </div>
                </div>
                
            </div>


    );
}

export default Home;
