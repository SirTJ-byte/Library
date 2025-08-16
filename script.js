const mainContainer = document.getElementById("main-container");
const openModal = document.getElementById("open-modal");
const modalContainer = document.getElementById("modal-container");
const modalBox = document.getElementById("modal-box");
const userId = document.getElementById("name");
const userEmail = document.getElementById("email");
const addContact = document.getElementById("add-contact");
const closeModal = document.getElementById("close-modal");
const contacts = document.getElementById("contacts");

openModal.addEventListener("click", function showDetails() {
	modalContainer.style.display = "block";
});
closeModal.addEventListener("click", function showDetails() {
	modalContainer.style.display = "none";
});

function gettingUserInput() {
	let list = document.createElement("li");
	let deleteButton = document.createElement("button");

	let userIdInput = userId.value;
	let userEmailInput = userEmail.value;

	list.textContent = `Name: ${userIdInput};

	Email:${userEmailInput} `;
	deleteButton.textContent = "Delete";

	contacts.appendChild(list);
	list.appendChild(deleteButton);

	deleteButton.style.cssText = "width:90px;height:30px;display:block";
	list.style.cssText =
		"width:15vw;border:2px solid yellow;display:flex;flex-direction:row;padding:40px;margin:10px;height:200px;background-color:green";

	deleteButton.addEventListener("click", function deleteItem(e) {
		e.target.parentElement.remove();
	});

	userId.value = "";
	userEmail.value = "";
	modalContainer.style.display = "none";
}

addContact.addEventListener("click", gettingUserInput);
