import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <p className="mt-4">
          Feel free to reach out to me using the following contact details:
        </p>
        <ul className="mt-4">
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 00-8 8c0 3.038 2.2 6.978 8 11.356 5.8-4.378 8-8.318 8-11.356a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.944 2.134 6.785 6 10.382 3.866-3.597 6-7.438 6-10.382a6 6 0 00-6-6z"
                clipRule="evenodd"
              />
            </svg>
            <span>Email: sendashishthakur@email.com</span>
          </li>
          <li className="flex items-center space-x-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 00-8 8c0 3.038 2.2 6.978 8 11.356 5.8-4.378 8-8.318 8-11.356a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.944 2.134 6.785 6 10.382 3.866-3.597 6-7.438 6-10.382a6 6 0 00-6-6z"
                clipRule="evenodd"
              />
            </svg>
            <span>LinkedIn: your LinkedIn profile</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
