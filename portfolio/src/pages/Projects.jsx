import { Link } from 'react-router-dom';
import '../projects.css';

function Projects() {
    return (
        <div className="Project">
            <div id="ImgCont">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            <h2>Projects</h2>
            <div className='ProjectList'>
                <Link to="/projects/pro-fireworks-nl" className="ProjectItem" id='ProFireworks'>
                        <div className="ProjTitle">Pro Fireworks NL</div>
                </Link>
                <Link to="/projects/spin-top-records" className="ProjectItem" id='SpinTop'>
                        <div className="ProjTitle">SpinTop Records</div>
                </Link>
                <Link to="/projects/rising-tide" className="ProjectItem" id='RisingTide'>
                        <div className="ProjTitle">Rising Tide</div>
                </Link>
                <Link to="/projects/joy-projects" className="ProjectItem" id='JoyProjects'>
                        <div className="ProjTitle">Joy Projects</div>
                </Link>
            </div>
        </div>
    )
}

export default Projects;
