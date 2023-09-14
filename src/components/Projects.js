import React from 'react';

const Projects = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">  <a
                href="http://www.ashberri.in" 
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                Ashberri
              </a></h3>
            <img
              src="http://www.ashberri.in:8000/media/profile_photo/2023/09/12/wallpaperflare.com_wallpaper_1.jpg"
              alt="Project 1"
              className="mt-2 rounded-lg"
            />
            <p className="mt-2">
              A description of your project. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <img
              src="http://www.ashberri.in:8000/media/profile_photo/2023/09/12/wallpaperflare.com_wallpaper_1.jpg"
              alt="Project 1"
              className="mt-2 rounded-lg"
            />
            <p className="mt-2">
              A description of your project. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <img
              src="http://www.ashberri.in:8000/media/profile_photo/2023/09/12/wallpaperflare.com_wallpaper_1.jpg"
              alt="Project 1"
              className="mt-2 rounded-lg"
            />
            <p className="mt-2">
              A description of your project. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
