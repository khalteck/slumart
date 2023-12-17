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

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 md:mt-[60px]">
        <div className="w-full">
          <img alt="team" src="/images/team-1.png" className="w-full h-auto" />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Omotayo Sharon
          </p>
        </div>

        <div className="w-full sm:mt-10">
          <img alt="team" src="/images/team-2.png" className="w-full h-auto" />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Kayode Afeez
          </p>
        </div>

        <div className="w-full">
          <img alt="team" src="/images/team-3.png" className="w-full h-auto" />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Chinedu Tope
          </p>
        </div>

        <div className="w-full sm:mt-10 lg:mt-0">
          <img alt="team" src="/images/team-4.png" className="w-full h-auto" />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Tolulope Ahmed
          </p>
        </div>

        <div className="w-full lg:mt-10">
          <img alt="team" src="/images/team-5.png" className="w-full h-auto" />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Hamidat Chi
          </p>
        </div>

        <div className="w-full sm:mt-10 lg:mt-0">
          <img alt="team" src="/images/team-6.png" className="w-full h-auto" />
          <p className="mt-4 font-medium text-[1.5rem] md:text-[2rem]">
            Sandra Bola
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
