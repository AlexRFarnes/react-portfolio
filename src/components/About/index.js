import {
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very curious, self-taught and self-driven frontend developer
            looking for a role in a company that gives me the opportunity to
            prove myself. I'm looking to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p>
            I'm very curious, and always willing to learn new things and improve
            my skills.
          </p>
          <p>
            Some facts about myself: 📚 bookworm (specially fantasy, sci-fi and
            mystery novels), 🎮 gamer, 🏋🏻‍♀️ gym enthusiast, 🎨 Blender and Pixel
            Art hobbyist.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
