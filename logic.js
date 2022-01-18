// all select constant
const formInput = document.querySelector(".form_input");
const btn = document.querySelector(".btn1");
const apendDiv = document.querySelector(".input_container ");
const todolist = document.querySelector(".todolist ");
const dm = document.querySelector(".btn-toogle");

// add class to the body
const bdy = document.body;
bdy.classList.add("dark-mode");
console.log(bdy.classList);

// Add user name
let span = document.querySelector(".name");
const userName = prompt(" Enter Your Name ");
span.textContent = userName;

// event listner for apend new div
btn.addEventListener("click", (e) => {
	e.preventDefault();

	// function start here

	const newli = document.createElement("div");
	newli.classList.add("todo");

	// create li
	const li = document.createElement("li");
	li.innerText = formInput.value;
	li.classList.add("todoli");
	newli.append(li);

	// buttons
	const done = document.createElement("button");
	done.classList.add("done");
	done.innerText = "Done";
	newli.append(done);

	const notdone = document.createElement("button");
	notdone.classList.add("notdone");
	notdone.innerText = "Cancel";
	newli.append(notdone);

	//append it to the main ul
	todolist.append(newli);

	//todo inpput value
	formInput.value = "";
});

// event listner for buttons that we have
todolist.addEventListener("click", (e) => {
	const item = e.target;
	const todo = item.parentElement;
	const textOfLi = todo.children[0];

	//  done button
	if (item.classList[0] === "done") {
		textOfLi.style.textDecoration = "line-through";
		todo.style.opacity = "0.5";
	}

	//  cancel buttons
	if (item.classList[0] === "notdone") {
		//addiing class so we can add animation
		todo.classList.add("side-ways");

		//triger after transition over u can alse use 'transitionanimation'
		todo.addEventListener("transitionend", () => {
			todo.remove();
		});
	}
});

// adding dark mode
dm.addEventListener("click", (e) => {
	e.preventDefault();
	if (bdy.classList.contains("dark-mode")) {
		bdy.classList.remove("dark-mode");
		dm.textContent = "Dark-Mode";
	} else {
		bdy.classList.add("dark-mode");
		dm.textContent = "Light-Mode";
	}
});
