import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Courses from "./Components/Courses/Courses";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AuthProvider from "../src/contexts/AuthProvider/AuthProvider";
import UserProfile from "./Components/UserProfile/UserProfile/UserProfile";

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/*' element={<NotFound />} />
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/about' element={<About />} />
						<Route path='/courses' element={<Courses />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route path='/userProfile' element={<UserProfile />} />
						<Route path='/dashboard/*' element={<Dashboard />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
