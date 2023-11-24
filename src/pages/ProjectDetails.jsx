import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import projectData from "../data/projects.json";
import ScrollToTop from "../ScrollToTop";

const ProjectDetails = () => {
  const { id } = useParams();
  const currentProject = projectData?.filter((x) => x?.id === id)[0];
  return (
    <>
      <Header />
      <main className="w-full md:pt-[180px] pb-10 bg-neutral-100">
        {/* <section
            className={`w-full h-[300px] md:h-[400px] bg-cover bg-top relative z-0 bg-shop`}
          >
            <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
              <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
                <h1
                  className={`w-full text-[2rem] md:text-[3.5rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
                >
                  THE SLUMART SHOP
                </h1>
              </div>
            </div>
          </section> */}

        <section className="w-full px-3 md:px-[10%] py-10">
          <h2 className="font-bold text-[1.5rem] md:text-[2rem] mb-10">
            <div className="w-fit mx-auto">
              PROJECT DETAILS
              <div className="w-[70%] h-3 bg-[#f97316] mt-1"></div>
            </div>
          </h2>

          <div className="w-full md:w-[80%] mx-auto flex gap-10">
            <img
              className="w-full h-auto object-cover"
              src={currentProject?.image}
              alt=""
            />
            <div className="w-full flex flex-col gap-5">
              <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
                {currentProject?.title}
              </h2>
              <p className="mb-4 text-xl text-neutral-600">
                {currentProject?.description}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProjectDetails;
