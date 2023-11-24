/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projects.json";

const Projects = () => {
  return (
    <>
      <Header />
      <main className="w-full md:pt-[120px]">
        <section
          className={`w-full h-[300px] md:h-[400px] bg-cover bg-center relative z-0 bg-projects`}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
              <h1
                className={`w-full text-[2rem] md:text-[3.5rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
              >
                EXPLORE OUR PROJECTS
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full px-3 md:px-[10%] py-10 bg-white">
          <h2 className="font-bold text-[1.5rem] md:text-[2rem] mb-10">
            <div className="w-fit mx-auto">
              PROJECTS
              <div className="w-[70%] h-3 bg-[#f97316] mt-1"></div>
            </div>
          </h2>
          <p className="mb-10 text-center font-normal text-[1.25rem]">
            Welcome to our projects page, a curated collection showcasing our
            creative endeavors and innovative solutions.
            <br /> Dive into a world of diverse projects of various countries,
            each a testament to our passion for excellence and commitment to
            pushing boundaries.{" "}
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            {projectData?.map((item, index) => {
              return <ProjectCard key={index} item={item} />;
            })}
            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Projects;
