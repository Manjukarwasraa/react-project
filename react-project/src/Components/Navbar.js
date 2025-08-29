import React from 'react'
import PropTypes from 'prop-types';



export default function Navbar({ title, aboutText, mode, toggleMode }) {
	return (
		<div>
			<nav className={'navbar navbar-expand-lg navbar-${mode} bg-${mode}'}>
				<div className="container-fluid">
					<link className="navbar-brand" to="#">{title}</link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<link className="nav-link active" aria-current="page" to="#">Home</link>
							</li>



							<li className="nav-item">
								<link className="nav-link disabled" aria-disabled="true" to = "#">{aboutText}</link>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-primary" type="submit">Search</button>
						</form>

					</div>
				</div>
				<div className={'form-check form-switch text-${mode === "light"? "dark":"light"}'}>
					<input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
					<label className="form-check-label"  htmlFor="switchCheckDefault">Enable to Dark Mode</label>
				</div>
			</nav>
		</div>
	)
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	aboutText: PropTypes.string
}

Navbar.defaultProps = {
	title: "Set title here",
	aboutText: "About text here"
}