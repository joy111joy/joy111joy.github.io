import React, { useEffect, useRef } from "react";

const Home = () => {
    // Refs to track each InfoCont and InfoContWrapper div
    const infoRef1 = useRef(null);
    const infoRef2 = useRef(null);
    const wrapperRef1 = useRef(null);
    const wrapperRef2 = useRef(null);

    useEffect(() => {
        // Create a new IntersectionObserver instance
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

        // Capture current ref values
        const currentInfoRef1 = infoRef1.current;
        const currentInfoRef2 = infoRef2.current;
        const currentWrapperRef1 = wrapperRef1.current;
        const currentWrapperRef2 = wrapperRef2.current;

        // Observe the .InfoCont elements
        if (currentInfoRef1) {
            observer.observe(currentInfoRef1);
        }
        if (currentInfoRef2) {
            observer.observe(currentInfoRef2);
        }

        // Observe the .InfoContWrapper elements
        if (currentWrapperRef1) {
            observer.observe(currentWrapperRef1);
        }
        if (currentWrapperRef2) {
            observer.observe(currentWrapperRef2);
        }

        // Cleanup on component unmount
        return () => {
            if (currentInfoRef1) observer.unobserve(currentInfoRef1);
            if (currentInfoRef2) observer.unobserve(currentInfoRef2);
            if (currentWrapperRef1) observer.unobserve(currentWrapperRef1);
            if (currentWrapperRef2) observer.unobserve(currentWrapperRef2);


        };
    }, []);

    return (
        <div id="Home">
            <div id="ImgCont">
                <div id="StarCont"></div>
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


            </div>


        </div> 
    );
}

export default Home;
