const notes = [{
    title: 'Got a new email',
    body: 'I should got a new email by the noon.'
}, {
    title: 'Food!!!',
    body: 'gotta eat something for the dinner'
}, {
    title: 'My university fees',
    body: 'university fees has to paid off before next semester'
}, {
    title: 'Watering the garden',
    body: 'the garden seems so dry, need some water!'
}];

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