/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { useAppContext } from "../contexts/AppContext";
import pastProjects from "../data/pastProject.json";
import PastProjectCard from "../components/PastProjectCard";

const Projects = () => {
  const { allProjectsHome, fetchProjectsHome } = useAppContext();

  useEffect(() => {
    fetchProjectsHome();
  }, []);

  return (
    <>
      <Header />
      <main className="w-full md:pt-[80px]">
        <section
          className={`w-full h-[300px] md:h-[400px] bg-cover bg-center relative z-0 bg-projects`}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
              <h1
                className={`w-full text-[2rem] md:text-[3.5rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
              >
                PROJECTS
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full px-3 md:px-[10%] py-10 bg-white md:mt-10">
          <div className="flex gap-3 items-center relative">
            <h2 className="text-[1.75rem] lg:text-[2.5rem] font-medium whitespace-nowrap">
              ONGOING PROJECTS
            </h2>
            <div className="w-full h-[1px] bg-[#262626]"></div>
          </div>

          <p className="mb-10 font-normal text-[1.25rem]">
            Welcome to our projects page, a curated collection showcasing our
            creative endeavors and innovative solutions.
            <br /> Dive into a world of diverse projects of various countries,
            each a testament to our passion for excellence and commitment to
            pushing boundaries.{" "}
          </p>

          {allProjectsHome?.length === 0 && (
            <div className="w-full h-[200px] flex justify-center items-center bg-white border">
              No projects yet..
            </div>
          )}
          <div className="w-full flex flex-wrap gap-4 md:gap-10 mb-8">
            {allProjectsHome?.map((item, index) => {
              return <ProjectCard key={index} item={item} />;
            })}
          </div>
        </section>

        <section className="w-full px-3 md:px-[10%] py-10 bg-white">
          <div className="flex gap-3 items-center relative">
            <h2 className="text-[1.75rem] lg:text-[2.5rem] font-medium whitespace-nowrap">
              PAST PROJECTS
            </h2>
            <div className="w-full h-[1px] bg-[#262626]"></div>
          </div>

          {pastProjects?.map((item, index) => {
            return <PastProjectCard key={index} item={item} />;
          })}
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Projects;
