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
import Signup from "./Components/Signup/Signup";
import ResetPass from "./Components/ResetPass/ResetPass";
import AddNewCourse from "./Components/Dashboard/AddNewCourse/AddNewCourse";
import UploadCourseContent from "./Components/Dashboard/UploadCourseContent/UploadCourseContent";
import AllCourses from "./Components/Dashboard/AllCourses/AllCourses";
import SingleCourse from "./Components/Home/SingleCourse/SingleCourse";
import Milestones from "../src/Components/Home/Milestones/Milestones";
import AddTeacher from "./Components/Dashboard/Admin/AddTeacher";
import MakeAdmin from "./Components/Dashboard/Admin/MakeAdmin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        {/* This will prevent bottom scroll of every route. */}
        <div className="page-container">
          {/* // This will put the footer always in bottom of the screen. */}
          <div className="content-wrap">
            {/* // This will put the footer always in bottom of the screen. */}
            <Header />
            <Routes>
              <Route path="/*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/singleblog" element={<SingleBlogMain />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/singlecourse/:id" element={<SingleCourse />} />
              <Route path="/milestone" element={<Milestones />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resetpassword" element={<ResetPass />} />
              <Route path="/greetings" element={<Greetings />} />
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/teachers" element={<TeacherCourses />} />

              {/* //Dashboard Nested Routing */}
              <Route path="/dashboard" element={<Dashboard />}>
                <Route exact path="/dashboard/blogs" element={<AllBlogs />} />
                <Route
                  path="/dashboard/addCourses"
                  element={<TeacherCourses />}
                />
                <Route
                  path="/dashboard/addnewcourse"
                  element={<AddNewCourse />}
                />
                <Route path="/dashboard/allcourses" element={<AllCourses />} />{" "}
                <Route
                  path="/dashboard/allcourses/:id"
                  element={<UploadCourseContent />}
                />
                <Route
                  path="/dashboard/admin/makeTeacher"
                  element={<AddTeacher />}
                />
                <Route
                  path="/dashboard/admin/makeAdmin"
                  element={<MakeAdmin />}
                />
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
