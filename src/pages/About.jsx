/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import team from "../data/team.json";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#team") {
      const teamSection = document.getElementById("team");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <main className="w-full md:pt-[80px]">
        <section
          className={`w-full h-[300px] md:h-[400px] bg-cover bg-center relative z-0 bg-caro1`}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
              <h1
                className={`w-full text-[2rem] md:text-[3.5rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
              >
                ABOUT US
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full px-3 md:px-[10%] py-10 md:py-[80px]">
          <div className="w-full flex md:flex-row flex-col gap-7 md:gap-10">
            <h1 className="w-full text-[2rem] md:text-[3rem] text-neutral-800 font-bold leading-tight">
              We Support Children And Youth To Reach Their Full Potential
            </h1>
            <div className="w-full text-neutral-700 text-[1.1rem]">
              This CSR Capacity Building project is for the development of Slum
              Art Project associated with School of Art. Its mission is to
              mentor, restructure the mindset and to build up creative talent of
              children from the slum. These children will be put under thorough
              tutorship by creative art teachers to help develop their skills
              and in turn make income for themselves and their community.
            </div>
          </div>

          <div className="w-full mt-10">
            <div className="w-full flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-200 text-neutral-700 lg:flex-row">
              <img
                className="h-96 w-full lg:w-1/2 rounded-t-lg object-cover md:h-[500px] md:!rounded-none md:!rounded-l-lg"
                src="/images/story.jpg"
                alt=""
              />
              <div className="w-full flex flex-col justify-start p-6">
                <h5 className="mb-2 text-[2.5rem] font-medium">
                  About the Project{" "}
                </h5>
                <p className="mb-4 text-base">
                  This project will have twenty intakes (children from ten slum)
                  between ages ten to seventeen. They will undergo trainings
                  from the School of Art. The training runs for a three months.
                  Artworks will be made by each child every week which will be
                  showcased in an exhibition put together by School of Art at
                  the end of the one year.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="team"
          className="w-full px-3 md:px-[10%] py-[80px] bg-neutral-100"
        >
          <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
            <div className="w-fit mx-auto mb-4">
              MEET OUR TEAM
              <div className="w-[70%] h-3 bg-[#F7C30D] mt-1"></div>
            </div>
          </h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 mt-12">
            {team?.map((item, index) => {
              return <TeamCard key={index} item={item} />;
            })}
          </div>
        </section>

        <section
          className={`w-full h-[600px] md:h-[500px] bg-cover bg-center relative z-0 bg-caro3 text-white`}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 md:flex justify-center">
            <div className="flex flex-col gap-3 px-3 md:px-[10%] py-12 relative">
              <h2 className="font-bold text-[1.5rem] md:text-[2rem]">
                <div className="w-fit mx-auto mb-4">
                  GET INVOLVED
                  <div className="w-[70%] h-3 bg-[#F7C30D] mt-1"></div>
                </div>
              </h2>

              <p className="md:text-[1.15rem]">
                A sustainability model will be created around the Artworks and
                funds generated will be shared as 40% to community development,
                30% to the child artist to sustain his education and mental
                health and 20% goes to the sustainability/expansion of the Slum
                project and 10% for the art gallery who sales the painting.
              </p>

              <p className="md:text-[1.15rem]">
                In the course of the one year training, each child has the
                benefit of mentorship from his trainee as well as one on one
                consultation. This gives the child a chance to a better mindset,
                orientation and fulfillment. Funding of this project will come
                from private sectors, individuals and international donors that
                are children and art-minded.
              </p>

              <div className="w-full text-center mt-4">
                <button
                  onClick={() => navigate("/projects")}
                  className="w-fit bg-[#F7C30D] hover:bg-white hover:text-[#F7C30D] border border-[#F7C30D] px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default About;
