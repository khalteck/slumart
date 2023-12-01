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
const AdminArtPiece = lazy(() => import("./admin/AdminArtPiece"));
const AdminProjectDetails = lazy(() => import("./admin/AdminProjectDetails"));
const AdminAddProject = lazy(() => import("./admin/AdminAddProject"));
const AdminEditProject = lazy(() => import("./admin/AdminEditProject"));

const AdminArtDetails = lazy(() => import("./admin/AdminArtDetails"));
const AdminAddArt = lazy(() => import("./admin/AdminAddArt"));
const AdminEditArt = lazy(() => import("./admin/AdminEditArt"));
const AdminRegister = lazy(() => import("./admin/AdminRegister"));

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
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN PROTECTED ROUTES */}
        <Route path="/admin" element={isAdmin ? <AdminHome /> : <Login />} />
        <Route
          path="/admin/art-piece"
          element={isAdmin ? <AdminArtPiece /> : <Login />}
        />
        <Route
          path="/admin/project/:id"
          element={isAdmin ? <AdminProjectDetails /> : <Login />}
        />
        <Route
          path="/admin/create-project"
          element={isAdmin ? <AdminAddProject /> : <Login />}
        />
        <Route
          path="/admin/project/:id/edit"
          element={isAdmin ? <AdminEditProject /> : <Login />}
        />

        <Route
          path="/admin/art/:id"
          element={isAdmin ? <AdminArtDetails /> : <Login />}
        />
        <Route
          path="/admin/create-art"
          element={isAdmin ? <AdminAddArt /> : <Login />}
        />
        <Route
          path="/admin/art/:id/edit"
          element={isAdmin ? <AdminEditArt /> : <Login />}
        />
        <Route
          path="/admin/add-admin"
          element={isAdmin ? <AdminRegister /> : <Login />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
