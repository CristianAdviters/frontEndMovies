import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import UserEditReview from "./Components/UserEditReview";
import UserDeleteReview from "./Components/UserDeleteReview";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { SearchMovie } from "./pages/SearchMovie/SearchMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search-movie" element={<SearchMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-edit-review" element={<UserEditReview />} />
          <Route
            path="/user-delete-review"
            element={<UserDeleteReview />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
