import React, { useEffect, useRef } from "react";

const Home = () => {
    // Ref to track the InfoCont div
    const infoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add fade-in class when in view
                    entry.target.classList.add('fade-in');
                    entry.target.classList.remove('fade-out');
                } else {
                    // Add fade-out class when out of view
                    entry.target.classList.add('fade-out');
                    entry.target.classList.remove('fade-in');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Observe the .InfoCont element
        const target = infoRef.current;
        if (target) {
            observer.observe(target);
        }

        // Cleanup on component unmount
        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <div id="Home">
            <div id="ImgCont">
                <div id="StarCont"></div>
            </div>
            <h2 id="BannerHead">Front-End <span className="Break"><br></br></span>Developer</h2>
            <h3 id="BannerSub">Web Design Out of this world.</h3>

            <div className="InfoCont" ref={infoRef}>
                <img src="img/HeadShot.png" alt="Profile" />
                <div className="InfoText"> 
                    <h2>Hi! I’m Mitchel,<br/> A new-grad Front end Developer.</h2>
                    <p>I’m passionate about building clean, functional, and visually appealing websites. Recently graduated, I’ve been diving deep into front-end technologies like HTML, CSS, JavaScript, and React. I’m constantly learning new techniques and best practices to create seamless, responsive user experiences. <br /><br />
                    In my spare time I strive to enhance my abilities by learning new technologies and features that can improve my design. I'm eager to apply my abilities to more real-world projects.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
