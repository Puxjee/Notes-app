const newNoteEl = document.querySelector('.new-note')
const newNoteBtn = document.getElementById("add")

const notesEl = document.querySelector('.not-empty')

const notesEmpty = document.querySelector('.empty')

const notes = []

if (notes.length === 0 ){
    notesEl.style.display = 'none'
    notesEmpty.style.display = 'flex'
}

newNoteBtn.addEventListener('click', () => {
    newNoteEl.style.display = 'block'
    notesEl.style.display = 'none'
    notesEmpty.style.display = 'none'
})

const backBtn = document.getElementById("back")

backBtn.addEventListener("click", () => {
    newNoteEl.style.display = 'none'
    notesEl.style.display = 'none'
    notesEmpty.style.display = 'flex'
})

const saveBtn = document.getElementById("save")

saveBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value

    notes.push({title, content})
    console.log(notes)
    newNoteEl.style.display = 'none'
    notesEl.style.display = 'block'
    notesEmpty.style.display = 'none'
})
