const notes = []


const filters = {
    searchText: ''
};

const render = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ``

    filteredNotes.forEach(note => {
        const p = document.createElement('p')
        p.textContent = note.title;
        document.querySelector('#notes').appendChild(p)
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