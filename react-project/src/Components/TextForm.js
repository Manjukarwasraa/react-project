import React, { useState } from 'react'


export default function TextForm(props) {
	const handleUpClick = () => {
		console.log("uppercase is clicked");
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Upper Case", "success");
	}
	const handleLoClick = () => {
		console.log("lowercase is clicked");
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to Lower Case", "success");
	}

	const handleClClick = () => {
		console.log("Text is cleared");
		let newText = " ";
		setText(newText);
		props.showAlert("Text is Cleared", "success");
	}

	const handleCpClick = () => {
		console.log("Text is copyied");
		let newText = text;
		setText(newText);
		props.showAlert("Text is Copyied", "success")
	}


	const handleOnChange = (event) => {
		console.log("Oncahnge is clicked");
		setText(event.target.value);

	}
	const [text, setText] = useState("");
	//setText = "new text"; // this is how we can update text/ change the state in react
	return (
		<>
			<div className='container my-3' style = {{color: props.mode === 'dark'? 'white': '#042743'}}>
				<form>
					<h1>{props.heading}</h1>
					<div className="mb-3">
					<textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'? 'grey': 'white' , color: props.mode === 'dark'? 'white': 'black'}} id="myBox" rows="8"></textarea>


					</div>


				</form>
				<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
				<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
				<button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
				<button className="btn btn-primary mx-1" onClick={handleCpClick}>Copy Text</button>
			</div>
			<div className='container my-3'  style = {{color: props.mode === 'dark'? 'white': '#042743'}}>
				<h1>Your text Summary</h1>
				<p>{text.split(" ").length} words and {text.length} characters</p>
				<p>Read Minutee: {0.008 * text.split(" ").length}</p>
				<h2>Preview</h2>
				<p>{text.length>0?text:"Enter text in textarea to preview it here"}</p>

			</div>
		</>
	)
}