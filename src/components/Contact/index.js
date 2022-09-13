import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_yhkxni7',
        'template_wemgl1v',
        refForm.current,
        'kVU8OwEVpDbkNKqE8'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          refForm.current.reset();
        },
        () => {
          alert('Failed to send the message, try again please!');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm primarily interested in frontend development roles. However, I'm
            open to hear other opportunities, including freelance opportunities.
            Please don't hesitate on contacting me.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
