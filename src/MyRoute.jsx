import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmailVerify from "./auth/EmailVerify";
import AdminHeader from "./components/adminComponents/AdminHeader";
import Cart from "./components/userComponents/Cart";
import CourseDashboard from "./components/userComponents/CourseDashboard";
import Demo from "./components/userComponents/Demo";
import Gifts from "./components/userComponents/Gifts";
import GradientBanner from "./components/userComponents/GradientBanner";
import LovedProducts from "./components/userComponents/LovedProducts";
import ProductCarousel from "./components/userComponents/ProductCarousel";
import SATSection from "./components/userComponents/SatSection";
import UserLayout from "./components/userComponents/UserLayout";
import AddCategories from "./pages/adminPages/AddCategories";
import AddProduct from "./pages/adminPages/AddProduct";
import CategoryList from "./pages/adminPages/CategoryList";
import Dashboard from "./pages/adminPages/Dashboard";
import ProductList from "./pages/adminPages/ProductList";
import Team from "./pages/adminPages/Team";
import UpdateProduct from "./pages/adminPages/UpdateProduct";
import Homepage from "./pages/Homepage";
import CreateProfile from "./pages/userPages/CreateProfile";
import Feed from "./pages/userPages/Feed";
import GoLiveNow from "./pages/userPages/GoLiveNow";
import ProductDetail from "./pages/userPages/ProductDetail";
import Products from "./pages/userPages/Products";
import SignInPage from "./pages/userPages/SignInPage";
import SignUpPage from "./pages/userPages/SignUpPage";
import UserDashboard from "./pages/userPages/UserDashboard";

// const ProductDetail = lazy(() => import("./pages/userPages/ProductDetail"));
// import { lazy } from "react";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        {/* outer route */}
        <Route path="userdashboard" element={<UserDashboard />} />
        <Route path="golivenow" element={<GoLiveNow />} />

        <Route path="/profile" element={<CreateProfile />} />

        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Products />} />
          <Route path="demo" element={<Demo />} />
          <Route path="gradientbanner" element={<GradientBanner />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="satsection" element={<SATSection />} />
          <Route path="coursedashboard" element={<CourseDashboard />} />
          {/* <Route path="login" element={<SignInPage />} /> */}
          <Route path="/email/confirmation/:token" element={<EmailVerify />} />
          <Route path="login" element={<SignInPage />} />

          <Route path="/" element={<Products />} />
          <Route path="feed" element={<Feed />} />
          <Route path="team" element={<Team />} />
          <Route path="productcarousel" element={<ProductCarousel />} />
          <Route path="lovedproducts" element={<LovedProducts />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetail/:productId" element={<ProductDetail />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin/" element={<AdminHeader />}>
          <Route index element={<Dashboard />} />
          <Route path="addproducts" element={<AddProduct />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="addcategory" element={<AddCategories />} />
          <Route path="categorylist" element={<CategoryList />} />
          <Route path="updateproduct/:productId" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
