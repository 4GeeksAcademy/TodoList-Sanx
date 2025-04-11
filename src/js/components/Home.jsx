import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [input, setInput] = useState("");
	const [tareas, setTareas] = useState([]);

	const handleKeyDown = (e) => {
		if (e.key == "Enter" && input && !tareas.includes(input)) {
			setTareas([...tareas, input])
			setInput("")
		}
	}

	const handleDelete = (tarea) => {
		setTareas(tareas.filter((item) => item != tarea))
	}

	return (
		<div className="container">
			<div className="TodoList">
				<div className="Title"><h1>ToDo's</h1></div>
				<div className="form-control">
					<input type="text" className="CustomInput" placeholder="What needs to be done?" onChange={(e) => setInput(e.target.value)} value={input} onKeyDown={(e) => handleKeyDown(e)} />
					{/*<button onClick={handleClick}>Send</button>*/}
					<ul>
						{tareas.map((tarea, index) => (
							<li key={index} className="d-flex justify-content-between align-items-center">
								<span>{tarea}</span>
								<button className="btn btn-sm CustomButton" onClick={() => handleDelete(tarea)}><i className="bi bi-x"></i></button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;