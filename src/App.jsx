//import Login from "./Components/Login";
import { Login } from "./pages/Login/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import UserEditReview from "./Components/UserEditReview";
import UserDeleteReview from "./Components/UserDeleteReview";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { SearchMovie } from "./pages/SearchMovie/SearchMovie";
import MovieProfile from "./pages/SearchMovie/MovieProfile/MovieProfile";
import { AdminProfile } from "./pages/AdminProfile/AdminProfile";
import { EditUser } from "./pages/AdminProfile/EditUser/EditUser";
import { AuthProvider } from "./utils/AuthProvider";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRoutes />}>
          {" "}
          <Route path="/search-movie" element={<SearchMovie />} />
          <Route path="/user-profile" element={<UserProfile />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}></Route>
          
          <Route path="/movie/:id" element={<MovieProfile />} />
          <Route path="/user-edit-review" element={<UserEditReview />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route
            path="/user-delete-review"
            element={<UserDeleteReview />}
          ></Route>
        </Route>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
