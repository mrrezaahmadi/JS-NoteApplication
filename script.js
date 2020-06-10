const notes = getSavedNotes()

const filters = {
    searchText: ''
};

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
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
})