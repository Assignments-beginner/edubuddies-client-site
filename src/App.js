import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "../src/Components/Home/About/About";
import Blogs from "../src/Components/Home/Blogs/Blogs";
import Contact from "../src/Components/Contact/Contact";
import Courses from "../src/Components/Home/Courses/Courses";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import Home from "../src/Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Greetings from "../src/Components/Register/Greetings/Greetings";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import UserProfile from "./Components/UserProfile/UserProfile/UserProfile";
import SingleBlogMain from "./Components/Home/SingleBlog/SingleBlogMain";
import TeacherCourses from "../src/Components/Dashboard/TeacherCourses/TeacherCourses";
import ScrollToTop from "../src/Components/ScrollToTop/ScrollToTop";
import AllBlogs from "./Components/Dashboard/AllBlogs/AllBlogs";
import Test from "./Components/Test/Test";
import GetCourses from "./Components/Test/GetCourses";
import CourseDetails from "./Components/Test/CourseDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        {/* This will prevent bottom scroll of every route. */}
        <div className="page-container">
          {/* // This will put the footer always in bottom of the screen */}
          <div className="content-wrap">
            {/* // This will put the footer always in bottom of the screen */}
            <Header />
            <Routes>
              <Route path="/*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/singleblog" element={<SingleBlogMain />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/test" element={<Test />} />
              <Route path="/getCourse" element={<GetCourses />} />
              <Route path="/courseDetail/:id" element={<CourseDetails />} />

              <Route path="/login" element={<Login />} />
              <Route path="/greetings" element={<Greetings />} />
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/blogs" element={<AllBlogs />} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
