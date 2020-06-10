const getSavedNotes = () => {
	const notesJSON = localStorage.getItem("notes");

	return notesJSON ? JSON.parse(notesJSON) : [];
};

const saveNotes = (notes) => {
	localStorage.setItem("notes", JSON.stringify(notes));
};

const removeNote = (id) => {
	const noteIndex = notes.findIndex((note) => {
		return note.id === id;
	});

	if (noteIndex > -1) notes.splice(noteIndex, 1);
};

const generateNoteDOM = (note) => {
	const noteEl = document.createElement("div");
	const textEl = document.createElement("a");
	const button = document.createElement("button");

	// Setup the note title text
	textEl.textContent = note.title;
	textEl.setAttribute("href", `/edit.html#${note.id}`);
	noteEl.appendChild(textEl);

	// Setup the remove button
	button.textContent = "x";
	noteEl.appendChild(button);
	button.addEventListener("click", () => {
		removeNote(note.id);
		saveNotes(notes);
		render(notes, filters);
	});

	return noteEl;
};

const render = (notes, filters) => {
	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});

	document.querySelector("#notes").innerHTML = ``;

	filteredNotes.forEach((note) => {
		document.querySelector("#notes").appendChild(generateNoteDOM(note));
	});
};
