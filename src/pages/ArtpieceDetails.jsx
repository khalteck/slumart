/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { useAppContext } from "../contexts/AppContext";
import { usePaystackPayment } from "react-paystack";
import { useEffect, useState } from "react";
import { useAdminContext } from "../contexts/AdminContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ArtpieceDetails = () => {
  const { id } = useParams();
  const { userData, currentPage } = useAppContext();
  const navigate = useNavigate();

  const user = userData?.user_data;

  const { fetchArts, allArtpieces } = useAdminContext();

  useEffect(() => {
    fetchArts();
  }, []);

  const currentProduct = allArtpieces?.filter((x) => x?.id === Number(id))[0];
  const imageObj = extractKeys(currentProduct) || {};
  const imageArr = Object?.values(imageObj);
  //   console.log("currentProduct", currentProduct);

  //   const imageArray = Object.values();

  function extractKeys(originalObject) {
    if (originalObject) {
      const { ...otherKeys } = originalObject; // Destructure 'image' and other keys

      // Define the keys you want to include in the new object
      const keysToInclude = ["image1", "image2", "image3", "image4"]; // Add the keys you need

      // Filter the 'otherKeys' object to include only specified keys
      const filteredKeys = Object.keys(otherKeys)
        .filter((key) => keysToInclude.includes(key))
        .reduce((obj, key) => {
          obj[key] = otherKeys[key];
          return obj;
        }, {});

      // Construct the final object with 'image' and the filtered keys
      const resultObject = { ...filteredKeys };
      return resultObject;
    }
  }

  //   const [validateErr, setvalidateErr] = useState(false);

  //   const [quantity, setQuantity] = useState(1);

  //   function handleChange(e) {
  //     setQuantity(e.target.value);
  //   }

  //   const [address, setAddress] = useState("");

  //   function handleAddressChange(e) {
  //     setAddress(e.target.value);
  //     setvalidateErr(false);
  //   }

  const [totalAmount, setTotalAmount] = useState(
    Number(`${currentProduct?.price?.split(".")[0]}00`)
  );

  useEffect(() => {
    setTotalAmount(Number(`${currentProduct?.price?.split(".")[0]}00`));
  }, [currentProduct]);

  const config = {
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: totalAmount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_74fb23bf07aaa6560c4d8c4f46820f9694ebcf6b", //pk_live_bbea94d6349d7df61fcbfcf7ea48cd999e3042da
  };

  console.log("config", config);

  const onSuccess = (reference) => {
    console.log(reference);
    // localStorage.setItem(
    //   "productDetails",
    //   JSON.stringify({
    //     ...currentProduct,
    //     quantity,
    //     totalAmount: totalAmount?.toString()?.slice(0, -2),
    //     address,
    //   })
    // );
    // navigate(
    //   `/product/${currentProduct?.title}/success/${reference?.reference}`
    // );
  };

  const onClose = () => {
    window.alert("Transaction terminated!");
  };

  const PaystackButton = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          className="bg-black rounded-md text-white px-5 py-3 mt-4"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Proceed to payment
        </button>
      </div>
    );
  };

  //======================================================to handle image display
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(imageArr[index]);

  useEffect(() => {
    setImage(imageArr[index]);
  }, [index, currentPage, allArtpieces]);

  function next() {
    const lastIndex = imageArr?.length - 1;
    if (image === imageArr[lastIndex]) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  function prev() {
    const lastIndex = imageArr?.length - 1;
    if (image === imageArr[0]) {
      setIndex(lastIndex);
    } else {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <>
      <main className="bg-white w-full min-h-screen">
        <Header />
        <section
          className={`w-full h-[200px] md:h-[400px] bg-cover bg-top relative z-0 bg-shop`}
        >
          <div className="w-full h-full absolute top-0 left-0 bg-black/60 px-3 py-[60px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
            <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative">
              <h1
                className={`w-full text-[2rem] md:text-[3rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
              >
                {currentProduct?.name}
              </h1>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8 md:pl-[5%] my-[80px]">
          <div className="md:w-[45%]">
            <div className="w-full flex justify-center border-2 border-black relative">
              <img
                src={image}
                alt="product image"
                className="w-auto h-[300px] md:h-[500px]"
              />
              <div className="w-full absolute top-[50%] translate-y-[-50%] flex justify-between">
                <div
                  onClick={prev}
                  className="w-10 h-10 flex justify-center items-center cursor-pointer border-2 border-black bg-white"
                >
                  {"<"}
                </div>
                <div
                  onClick={next}
                  className="w-10 h-10 flex justify-center items-center cursor-pointer border-2 border-black bg-white"
                >
                  {">"}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-wrap mt-5 gap-4">
              {imageArr?.map((img, ind) => {
                return (
                  <img
                    key={ind}
                    src={img}
                    alt="product image"
                    className={`w-[100px] h-[100px] object-contain cursor-pointer border-black ${
                      ind === index ? "border-2 bg-black/20" : "border"
                    }`}
                    onClick={() => setIndex(ind)}
                  />
                );
              })}
            </div>
          </div>
          <div className="md:w-[50%] flex flex-col gap-5 py-10 px-3">
            <p className="font-bold text-[1.75rem]">{currentProduct?.name}</p>
            <p className="text-2xl">NGN {currentProduct?.price}</p>
            <p className="text-black/60">
              Availability: <span className="text-black">In stock</span>
            </p>
            {/* <div className="flex flex-col gap-1">
              <p>QTY</p>
              <input
                type="number"
                id="number"
                className="w-[100px] p-2 border border-black"
                onChange={handleChange}
                value={quantity}
              />
            </div> */}

            {/* <div className="flex flex-col gap-1">
              <p>Delivery Address</p>
              <textarea
                id="address"
                className="w-full md:w-[300px] p-2 border border-black"
                onChange={handleAddressChange}
                value={address}
              />
            </div>

            {validateErr && (
              <p className="text-red-500">Delivery address is required!</p>
            )} */}

            <PaystackButton />

            <p className="">
              NOTE: After successful payment.. <br /> Download the payment
              reciept for reference purposes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ArtpieceDetails;
