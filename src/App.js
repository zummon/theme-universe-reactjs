import React from "react";
import { SVGbootstrap, SVGunDraw } from "./SVGs";
import themes from "./themes";

export default function App() {
	var [theme, setTheme] = React.useState(themes[0]);

	function handleTheme(type) {
		// find the theme in themes variable
		var filtered = themes.filter(function (item) {
			return item.type === type;
		});
		// get ready to set current theme
		var object = {};

		// get the actual existing theme
		if (filtered.length >= 1) {
			object = filtered[0];
		} else {
			object = themes[0];
		}
		// do stuff on this website
		document.documentElement.className = object.plate;
		document.getElementById("_root").className = "p-sm-5 " + object.plate;

		// save the setting
		setTheme(object);
		// localStorage.setItem("theme", object.type)
	}

	// get viewer's setting once this website load
	React.useEffect(function () {
		handleTheme(/*localStorage.getItem("theme")*/);
	}, []);

	return (
		<>
			<div
				className={"card mb-4 mx-auto " + theme.plate}
				style={{ maxWidth: "640px" }}
			>
				<div className="card-body">
					<div className="row">
						<div className="col-sm-auto text-center">
							<SVGbootstrap />
						</div>
						<div className="col-sm text-center text-sm-end mt-4 mt-sm-0">
							<h1>Theme Universe</h1>
							<a
								className={"btn " + theme.button}
								href="https://zummon.page/"
								target="_blank"
								rel="noreferrer"
							>
								Made by zummon
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-sm-8 col-lg-6">
					<div className={theme.svgcolor}>
						<SVGunDraw className="img-fluid" />
					</div>
					<div className={"card " + theme.card}>
						<div className="card-body">
							<div className="row">
								<div className="col-sm">
									<h1>How does it work?</h1>
									<h4>Select one of the options to see</h4>
								</div>
								<div className="col-sm-auto">
									<select
										className="form-select form-select-lg"
										size={themes.length}
										value={theme.type}
										onChange={function (event) {
											handleTheme(event.currentTarget.value);
										}}
									>
										{themes.map(function (item) {
											return (
												<option key={item.type} value={item.type}>
													{item.name}
												</option>
											);
										})}
									</select>
								</div>
							</div>
							<p className="mt-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repellendus tempora possimus ullam tenetur atque temporibus,
								praesentium pariatur quibusdam sunt voluptate quaerat repellat,
								suscipit cum assumenda ea reiciendis accusantium debitis
								expedita!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
