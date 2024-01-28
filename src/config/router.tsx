import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  Shopping,
  Orders,
  Checkout,
  StorePage,
  Electricity,
  Internet,
  Mobile,
  Cable,
  FundWallet,
  AddNewCard,
  Send,
} from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/" element={<Home />} />
      <Route path="send" element={<Send />} />
      <Route path="shopping">
        <Route index element={<Shopping />} />
        <Route path=":id" element={<StorePage />} />
      </Route>
      <Route path="/orders" element={<Orders />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/electricity" element={<Electricity />} />
      <Route path="/internet" element={<Internet />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/cable" element={<Cable />} />
      <Route path="/fund-wallet" element={<FundWallet />} />
      <Route path="/add-new-card" element={<AddNewCard />} />

      {/* 404 Page */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

export default router;
