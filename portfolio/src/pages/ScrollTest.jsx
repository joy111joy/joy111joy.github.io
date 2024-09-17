import React from "react";
import { useEffect, useRef } from "react";
    
const ScrollTest = () => {

        // Ref to track the InfoCont div
        const infoRef = useRef(null);

        useEffect(() => {
            // Intersection Observer for InfoCont
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
    
        useEffect(() => {
            // Scroll event listener to control the appearance of scroll-items
            const handleScroll = () => {
                const scrollY = window.scrollY;
    
                // Define when each item should appear based on scroll position
                const item1 = document.getElementById("item1");
                const item2 = document.getElementById("item2");
                const item3 = document.getElementById("item3");
                const item4 = document.getElementById("item4");
    
                if (scrollY >= -10 && scrollY < 500) {
                    item1.classList.add("active");
                    item2.classList.remove("active");
                } else if (scrollY >= 500 && scrollY < 1000) {
                    item1.classList.remove("active");
                    item2.classList.add("active");
                    item3.classList.remove("active");
                } else if (scrollY >= 1000 && scrollY < 1500) {
                    item2.classList.remove("active");
                    item3.classList.add("active");
                    item4.classList.remove("active");
                } else if (scrollY >= 1500) {
                    item3.classList.remove("active");
                    item4.classList.add("active");
                }
            };
    
            // Attach the scroll event listener
            window.addEventListener("scroll", handleScroll);
    
            // Cleanup on component unmount
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);
    
    return (
        <div className="scroll-container">
        <div className="scroll-item" id="item1">

        <h2 id="BannerHead">Front-End <span className="Break"><br></br></span>Developer</h2>
        <h3 id="BannerSub">Web Design Out of this world.</h3>
        
        </div>


        <div className="scroll-item" id="item2">Item 2</div>


        <div className="scroll-item" id="item3">Item 3</div>
        <div className="scroll-item" id="item4">Item 4</div>
    </div>
    );
}

export default ScrollTest;