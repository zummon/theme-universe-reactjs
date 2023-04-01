import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("_root");
ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	rootElement
);
