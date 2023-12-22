import artists from "../../data/artists.json";
const Section5 = () => {
  return (
    <section className="w-full pb-[80px] px-3 md:px-[3%] lg:px-[10%] bg-white font-rale">
      <div>
        <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-medium">
          MEET <span className="font-bold">THE ARTIST</span>
        </h2>
        <p className="text-[1.1rem] sm:text-[1.25rem]">
          Meet our remarkable champions who transcended their backgrounds and
          refused to be defined by their it.
        </p>
      </div>

      <p className="mb-2 mt-10 md:mt-[60px] font-bold text-[1.25rem]">
        Scroll {">>"}
      </p>
      <div className="w-full h-[1000px] flex flex-wrap flex-col gap-10 overflow-x-auto no-scrollbar border-2 border-yellow-500">
        {artists?.map((item, index) => {
          return (
            <div key={index} className="w-[300px] md:w-[400px]">
              <img
                alt="team"
                src={item?.image}
                className="w-full h-[400px] bg-black/20 object-cover"
              />
              <p className="mt-4 font-medium text-[1.5rem] text-center">
                {item?.name}
              </p>
            </div>
          );
        })}
        {/* <div className="w-full">
          <img
            alt="team"
            src="/images/team-2.png"
            className="w-full h-auto min-h-[300px] bg-black/20 object-cover"
          />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Kayode Afeez
          </p>
        </div>

        <div className="w-full">
          <img
            alt="team"
            src="/images/team-3.png"
            className="w-full h-auto min-h-[300px] bg-black/20 object-cover"
          />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Sandra Bola
          </p>
        </div>

        <div className="w-full">
          <img
            alt="team"
            src="/images/team-4.png"
            className="w-full h-auto min-h-[300px] bg-black/20 object-cover"
          />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Sandra Bola
          </p>
        </div>

        <div className="w-full">
          <img
            alt="team"
            src="/images/team-5.png"
            className="w-full h-auto min-h-[300px] bg-black/20 object-cover"
          />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Sandra Bola
          </p>
        </div>

        <div className="w-full">
          <img
            alt="team"
            src="/images/team-6.png"
            className="w-full h-auto min-h-[300px] bg-black/20 object-cover"
          />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Sandra Bola
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Section5;
