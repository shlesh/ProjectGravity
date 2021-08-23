import React from "react";
import "../assets/about.css";

function About() {
	return (
		<div className="App">
			<div className="App-text about">
				<div className="about-text__title">
					Hello, We're <span className="about-text__title-big">Priyal and shlesh</span>.
				</div>
				<div className="about-text__title">
					We're just making a site for <span className="about-text__title-big">Gravity</span>
				</div>
				<div className="about-text__body">
					We're gawds XD
					<br />
					<br />
					Gotta do what needs to be done😉
				</div>
				<div className="about-social">
					<div className="about-social__title">You cant find us XD</div>
					<div className="about-social__links">
						<a
							className="about-social__link"
							href="https://github.com/Priyal-Saxena"
							rel="noopener noreferrer"
							target="_blank"
						>
							Github1
						</a>
						<a
							className="about-social__link"
							href="https://github.com/shlesh"
							rel="noopener noreferrer"
							target="_blank"
						>
							Github2
						</a>
						<a
							className="about-social__link"
							href="mailto:iib2020001@iiita.ac.in"
							rel="noopener noreferrer"
							target="_blank"
						>
							email1
						</a>
						<a
							className="about-social__link"
							href="mailto:iec2020123@iiita.ac.in"
							rel="noopener noreferrer"
							target="_blank"
						>
							email2
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
