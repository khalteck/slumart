/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <>
      <Header />
      <main>
        <div className="w-full min-h-screen md:pt-[150px] bg-gray-100 text-[2rem] flex justify-center items-center">
          Gallery Page
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
