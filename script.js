const notes = JSON.parse(localStorage.getItem('notes'))


const filters = {
    searchText: ''
};

const render = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ``

    filteredNotes.forEach(note => {
        const noteEl = document.createElement('div')
        const textEl = document.createElement('p')
        const button = document.createElement('button');

        // Setup the note title text
        textEl.textContent = note.title;
        noteEl.appendChild(textEl);

        // Setup the remove button
        button.textContent = 'x'
        noteEl.appendChild(button)

        document.querySelector('#notes').appendChild(noteEl)
    });
}

render(notes, filters)

document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value;
    render(notes, filters)
})

document.querySelector('#create-note').addEventListener('click', () => {
    notes.push({
        title: 'undefined',
        body: 'undefined'
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    render(notes, filters)
})