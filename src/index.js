import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
	RouterProvider,
	createBrowserRouter,
	Outlet,
	useParams,
	useNavigate,
	useLocation,
} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Body from "./components/Body";
import Dynamicpage from "./components/Dynamicpage";
import Sidebar from "./components/Sidebar";
import FormWithFormike from "./components/FormWithFormike";
import BarChart from "./components/BarChart";
import Chart from "./components/LineChart";
import Clock from "./page/clock";
import PDFViewer from "./components/Pdf";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
	const path = useLocation();
	console.log("path", path.pathname);
	return (
		// <ShowPopup/>
		<>
			{path.pathname != ("/form" && "/chart") && <Header />}
			<Outlet />
		</>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/clock",
				element: <Clock />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/sideBar",
				element: <Sidebar />,
			},
			{
				path: "/form",
				element: <FormWithFormike />,
			},
			{
				path: "/BarChart",
				element: <BarChart />,
			},
			{
				path: "/chart",
				element: <Chart />,
			},
			{
				path: "/:id",
				element: <Dynamicpage />,
			},
			{
				path: "/openpdf",
				element: <PDFViewer />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
