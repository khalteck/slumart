/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import team from "../data/team.json";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#mission") {
      const teamSection = document.getElementById("mission");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (location.hash === "#vision") {
      const teamSection = document.getElementById("vision");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (location.hash === "#donate") {
      const teamSection = document.getElementById("donate");
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
          className={`w-full lg:min-h-screen bg-gradient-to-b from-[#01030F] to-[#172554] relative z-0 text-white px-3 py-[100px] lg:px-[10%] lg:py-[100px]`}
        >
          <div className="flex flex-col lg:mt-0">
            <h1
              className={`w-full text-[2rem] md:text-[4.5rem] font-bold leading-tight first-section-text`}
            >
              ABOUT US
            </h1>
            <p className=" md:text-[1.5rem] mt-4">
              Many have asked us, what we are, what defines us?
              <br /> Take a walk with us, let’s find out.
            </p>

            <p className="font-light mt-7 md:text-[1.5rem]">Swipe {">>"}</p>
            <div className="flex gap-10 mt-5 w-full overflow-x-scroll overflow-y-hidden no-scrollbar">
              <img
                alt=""
                src="/images/about1.jpeg"
                className="w-[320px] md:w-1/3 h-[300px] lg:h-[400px] object-cover"
              />
              <img
                alt=""
                src="/images/about2.jpeg"
                className="w-[320px] md:w-1/3 h-[300px] lg:h-[400px] object-cover"
              />
              <img
                alt=""
                src="/images/about3.jpeg"
                className="w-[320px] md:w-1/3 h-[300px] lg:h-[400px] object-cover"
              />

              <img
                alt=""
                src="/images/project3-image1.jpeg"
                className="w-[320px] md:w-1/3 h-[300px] lg:h-[400px] object-cover"
              />
              <img
                alt=""
                src="/images/project2-image3.jpeg"
                className="w-[320px] md:w-1/3 h-[300px] lg:h-[400px] object-cover"
              />
              <img
                alt=""
                src="/images/project3-image3.jpeg"
                className="w-[320px] md:w-1/3 h-[300px] lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="mission"
          className="w-full py-[80px] px-3 md:px-[3%] lg:px-[10%] bg-white font-rale"
        >
          <div className="flex gap-3 items-center relative">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-medium whitespace-nowrap">
              OUR MISSION
            </h2>
            <div className="w-full h-[1px] bg-[#262626]"></div>
          </div>

          <div className="w-full mt-5 text-[1.25rem]">
            <p>
              Slum Art envisions a world where every individual, irrespective of
              socio-economic background, has equal access to education, creative
              expression, and sustainable opportunities. Through innovative
              initiatives, we strive to break barriers, foster talents, and
              empower underserved communities, creating a future where
              creativity becomes a catalyst for positive change.
            </p>
          </div>
        </section>

        <section
          id="vision"
          className="w-full pb-[80px] px-3 md:px-[3%] lg:px-[10%] bg-white font-rale"
        >
          <div className="flex gap-3 items-center relative">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-medium whitespace-nowrap">
              OUR VISION
            </h2>
            <div className="w-full h-[1px] bg-[#262626]"></div>
          </div>

          <div className="w-full mt-5 text-[1.25rem]">
            <p>
              Slum Art is committed to transforming lives in underserved
              communities through the transformative power of art and education.
              Our mission is to empower children and teenagers with limited
              access to resources, offering them a platform for self-expression,
              creativity, and education. By establishing innovative learning
              spaces, such as the Pet Bottle School, we aim to provide quality
              primary education and foster artistic talents. We believe in
              reducing waste and leaving a positive environmental footprint
              while guiding these young minds towards a brighter future. Through
              mentorship, community engagement, and initiatives like the
              Animation Hub, we aspire to break the cycle of poverty and open
              doors to opportunities in the tech and creative industries. Slum
              Art envisions a world where every individual, regardless of their
              background, has the chance to unleash their potential and
              contribute meaningfully to society.
            </p>
          </div>
        </section>

        <section className="w-full pb-[80px] px-3 md:px-[3%] lg:px-[10%] bg-white font-rale">
          <div className="flex gap-3 items-center relative">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-medium whitespace-nowrap">
              OUR HISTORY
            </h2>
            <div className="w-full h-[1px] bg-[#262626]"></div>
          </div>

          <div className="w-full mt-5 text-[1.25rem]">
            <p>
              This CSR Capacity Building project is for the development of Slum
              Art Project associated with School of Art. Its mission is to
              mentor, restructure the mindset and to build up creative talent of
              children from the slum. These children will be put under thorough
              tutorship by creative art teachers to help develop their skills
              and in turn make income for themselves and their community. <br />
              <br />
              This project will have twenty intakes (children from ten slum)
              between ages ten to seventeen. They will undergo trainings from
              the School of Art. The training runs for a three months. Artworks
              will be made by each child every week which will be showcased in
              an exhibition put together by School of Art at the end of the one
              year.
              <br />
              <br />
              A sustainability model will be created around the Artworks and
              funds generated will be shared as 40% to community development,
              30% to the child artist to sustain his education and mental health
              and 20% goes to the sustainability/expansion of the Slum project
              and 10% for the art gallery who sales the painting.
              <br />
              <br />
              In the course of the one year training, each child has the benefit
              of mentorship from his trainee as well as one on one consultation.
              This gives the child a chance to a better mindset, orientation and
              fulfillment. Funding of this project will come from private
              sectors, individuals and international donors that are children
              and art-minded.
            </p>
          </div>
        </section>

        <section className="w-full pb-[80px] px-3 md:px-[3%] lg:px-[10%] bg-white font-rale">
          <div className="flex gap-3 items-center relative">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-medium whitespace-nowrap">
              OUR SUPERKIDS
            </h2>
            <div className="w-full h-[1px] bg-[#262626]"></div>
          </div>

          <div className="w-full mt-5 text-[1.25rem]">
            <p>
              A Story of how SlumArt has transformed the lives of the
              underpriviledged kids of Nigerian Slum.
            </p>

            <div className="w-full h-[400px] lg:h-[550px] relative mt-8">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9AGTtA-u7T0?si=KAxGhdYj1cZebhgD"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section
          id="donate"
          className="w-full pb-[80px] px-3 md:px-[3%] lg:px-[10%] bg-white font-rale"
        >
          <div className="flex gap-3 items-center relative">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-medium whitespace-nowrap">
              DONATE
            </h2>
            <div className="w-full h-[1px] bg-[#262626]"></div>
          </div>

          <div className="w-full mt-5 text-[1.25rem]">
            <p>
              Help us grow, reach more underprivileged children across Nigeria,
              and teach them to believe that they their voices can be heard
              through Art.
            </p>

            <div className="w-full flex flex-wrap gap-5 relative mt-8">
              <div className="px-14 py-3 border border-black rounded-lg font-bold hover:bg-black hover:text-white cursor-pointer">
                $50
              </div>
              <div className="px-14 py-3 border border-black rounded-lg font-bold hover:bg-black hover:text-white cursor-pointer">
                $150
              </div>
              <div className="px-14 py-3 border border-black rounded-lg font-bold hover:bg-black hover:text-white cursor-pointer">
                $350
              </div>
              <div className="px-14 py-3 border border-black rounded-lg font-bold hover:bg-black hover:text-white cursor-pointer">
                $500
              </div>
              <div className="px-14 py-3 border border-black rounded-lg font-bold hover:bg-black hover:text-white cursor-pointer">
                $750
              </div>
              <div className="px-14 py-3 border border-black rounded-lg font-bold hover:bg-black hover:text-white cursor-pointer">
                $1000
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="w-full md:w-[400px] py-3 border border-black rounded-lg font-bold mt-12 mx-auto hover:bg-black hover:text-white">
                Donate
              </button>
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

        {/* <section
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
        </section> */}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default About;
