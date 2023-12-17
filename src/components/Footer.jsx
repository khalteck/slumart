const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#040921] text-center text-neutral-200 lg:text-left mt-[80px] lg:mt-[120px] lg:pt-10 relative"
    >
      <img
        alt="decor"
        src="/images/footer-decor.png"
        className="w-full h-auto absolute top-[-30px] sm:top-[-60px] lg:top-[-100px] left-0"
      />
      <div className="pb-10 py-10 sm:pt-[100px] px-3 md:px-[10%] text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start">
              <img
                alt=""
                src="/images/new-logo.png"
                className="w-[150px] md:w-[200px] h-auto"
              />
            </h6>
            <p>Using Imaginations as a gateway for endless possibilities</p>
            <p className="mt-3">
              <span className="text-yellow-300">Address</span>: 3 eckankar
              drive, jakande estate isolo Lagos Nigeria
            </p>
          </div>

          <div className="mx-auto flex flex-col sm:flex-row lg:flex-col gap-10 sm:gap-[100px] lg:gap-10">
            <div className="flex flex-col items-center">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Reach Out
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Facebook
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Instagram
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Twitter
                </a>
              </p>
              <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Whatsapp
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Explore
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Our Story
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Home
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Gallery
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Donate
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                First Bank
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Access Bank
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                GT Bank
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Dollar Donations
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Help & Info
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Privacy Policy
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Terms & Condition
              </a>
            </p>
          </div>
          {/* <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              123 humpty street
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              slumart@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +2349012345678
            </p>
          </div> */}
        </div>
      </div>

      <div className="p-6 text-center bg-[#040921]">
        <span>Copyright © 2023 - </span>
        <a className="font-semibold :text-neutral-400" href="">
          SlumArt
        </a>
      </div>
    </footer>
  );
};

export default Footer;
