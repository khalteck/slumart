/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopCard from "../components/ShopCard";
import { useAdminContext } from "../contexts/AdminContext";
import ScrollToTop from "../ScrollToTop";
import ReactPaginate from "react-paginate";
// import { useNavigate } from "react-router-dom";

const Shop = () => {
  const { fetchArts, allArtpieces } = useAdminContext();

  // const navigate = useNavigate();

  useEffect(() => {
    fetchArts();
  }, []);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    // window.scrollTo(0, 0);
    const secton = document.getElementById("shop");
    if (secton) {
      secton.scrollIntoView({ behavior: "smooth" });
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedArts = allArtpieces?.slice(startIndex, endIndex);

  return (
    <>
      <Header />
      <main className="w-full md:pt-[80px] relative">
        {/* <div className="w-full h-screen bg-white fixed top-0 left-0 flex justify-center items-center z-20">
          Under construction...
        </div> */}
        <section
          className={`w-full h-[300px] md:h-[400px] bg-cover bg-top relative z-0 bg-shop`}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
              <h1
                className={`w-full text-[2rem] md:text-[3rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
              >
                SHOP
              </h1>
            </div>
          </div>
        </section>

        <section id="shop" className="w-full px-3 md:px-[10%] py-10 bg-white">
          {/* <h2 className="font-bold text-[1.5rem] md:text-[2rem] mb-10">
            <div className="w-fit mx-auto">
              SHOP WITH US
              <div className="w-[70%] h-3 bg-[#F7C30D] mt-1"></div>
            </div>
          </h2> */}
          <div className="flex gap-3 items-center relative">
            <h2 className="text-[1.75rem] lg:text-[2.5rem] font-medium whitespace-nowrap">
              SHOP WITH US
            </h2>
            <div className="w-full h-[1px] bg-[#262626]"></div>
          </div>
          <p className="mb-10 font-nornal text-[1.25rem]">
            Explore an artistic haven on our shop page, showcasing a curated
            collection of captivating artworks.
          </p>

          {allArtpieces?.length === 0 && (
            <div className="w-full h-[200px] flex justify-center items-center bg-white border">
              No art pieces yet..
            </div>
          )}
          <div className="w-full flex flex-wrap gap-4 md:gap-10 mb-8">
            {displayedArts?.map((item, index) => {
              return <ShopCard key={index} item={item} />;
            })}
          </div>

          <div className="mt-10 text-center border border-black/30 rounded-lg py-3 px-1">
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(allArtpieces?.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Shop;
