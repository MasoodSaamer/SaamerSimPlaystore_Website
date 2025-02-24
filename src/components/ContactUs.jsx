import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z8fnqpl', // replace with your Service ID
      'template_h2881fs', // replace with your Template ID
      form.current,
      'lkG2m2iuaqHn0LA8F' // replace with your Public Key
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log('FAILED...', error.text);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Contact Page
      </h1>
        <form ref={form} onSubmit={sendEmail} className="mt-10 w-full max-w-lg">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
            </label>
            <input
                type="text"
                name="title"
                id="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Title"
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                required
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
            </label>
            <textarea
                name="message"
                id="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message..."
                required
            />
            </div>
            <div className="flex items-center justify-between">
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Send Message
            </button>
            </div>
        </form>

      <footer className="w-full  text-white mt-10 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6">
                <div>
                    <h3 className="text-md font-semibold mb-4 ">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-400 hover:text-white" href={link.href} target="_blank" rel="noopener noreferrer" >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            
            </div>
        </footer>


    </div>
  );
};

export default ContactUs;
