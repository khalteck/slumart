import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { useAppContext } from "./contexts/AppContext";
import Banner from "./components/Banner";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Countries = lazy(() => import("./pages/Countries"));
const Volunteers = lazy(() => import("./pages/Volunteers"));
const Shop = lazy(() => import("./pages/Shop"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const AdminHome = lazy(() => import("./admin/AdminHome"));

// const Construction = lazy(() => import("./pages/Construction"))

function App() {
  const { regSuccess, isAdmin } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      {regSuccess && <Banner message={regSuccess} />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        <Route path="/admin" element={isAdmin ? <AdminHome /> : <Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
