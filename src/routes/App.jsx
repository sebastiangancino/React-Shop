import React from "react";
import "../styles/global.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SendEmail from "../pages/SendEmail"
import NotFound from "../pages/NotFound";
import NewPassword from "../pages/NewPassword";
import CreateAccount from "../pages/CreateAccount";
import Orders from "../pages/Orders";
import MyAccount from "../pages/MyAccount";
import Checkout from "../pages/Checkout";
import PasswordRecovery from "../pages/PasswordRecovery";
import AppContext from '../context/AppContext';
import useInitialState from "../../hooks/useInitialState";


const App = () => {
	const initialState = useInitialState ();	
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/send-email" element={<SendEmail />} />
						<Route path="/new-password" element={<NewPassword />} />
						<Route path="/create-account" element={<CreateAccount />} />
						<Route path="/login" element={<Login />} />
						<Route path="/orders" element={<Orders />} />
						<Route path="/my-account" element={<MyAccount />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/password-recovery" element={<PasswordRecovery />} />
						<Route path="/" element={<NotFound />} />

					</Routes>
				</Layout>

			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;