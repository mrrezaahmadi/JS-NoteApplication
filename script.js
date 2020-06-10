const notes = JSON.parse(localStorage.getItem('notes'))

const filters = {
    searchText: ''
};

const removeNote = (id) => {
    const noteIndex = notes.findIndex(note => {
        return note.id === id;
    })

    if (noteIndex > -1) notes.splice(noteIndex, 1)
}

const render = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ``

    filteredNotes.forEach(note => {
        const noteEl = document.createElement('div')
        const textEl = document.createElement('a')
        const button = document.createElement('button');

        // Setup the note title text
        textEl.textContent = note.title;
        textEl.setAttribute('href', '#')
        noteEl.appendChild(textEl);

        // Setup the remove button
        button.textContent = 'x'
        noteEl.appendChild(button)
        button.addEventListener('click', () => {
            removeNote(note.id);
            localStorage.setItem('notes', JSON.stringify(notes))
            render(notes, filters)
        })

        document.querySelector('#notes').appendChild(noteEl)
    });
}

render(notes, filters)

document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value;
    render(notes, filters)
})

document.querySelector('#create-note').addEventListener('click', () => {
    const id = uuidv4();
    notes.push({
        id: id,
        title: 'undefined',
        body: 'undefined'
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    render(notes, filters)
})