const notes = getSavedNotes();

const filters = {
	searchText: "",
};

render(notes, filters);

$("#search-text").on("input", (e) => {
	filters.searchText = $(e.target).val();
	render(notes, filters);
});

// document.querySelector('#search-text').addEventListener('input', e => {
//     filters.searchText = e.target.value;
//     render(notes, filters)
// })

$("#create-note").on("click", () => {
	const id = uuidv4();
	notes.push({
		id: id,
		title: "",
		body: "",
	});
	saveNotes(notes);
	location.assign(`edit.html#${id}`);
});

// document.querySelector('#create-note').addEventListener('click', () => {
//     const id = uuidv4();
//     notes.push({
//         id: id,
//         title: 'undefined',
//         body: 'undefined'
//     })
//     saveNotes(notes)
//     location.assign(`edit.html#${id}`)
// })
