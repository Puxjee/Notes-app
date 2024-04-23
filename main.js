const newNoteEl = document.querySelector('.new-note')
const notesEmpty = document.querySelector('.empty')
const notesEl = document.querySelector('.not-empty')
const noteContentEl = document.querySelector('.note-view')
const container = document.querySelector('.container')


let notes = []

const noteColors = ['#FD99FF', '#FF9E9E', '#91F48F', '#FFF599', '#9EFFFF', '#B69CFF']

const backBtn = document.querySelectorAll(".back")
const newNoteBtn = document.querySelector(".add")



container.addEventListener('click', (event) => {
    if (event.target.classList.contains('back') || event.target.classList.contains('back-img')) {
        showNotes()
    }
})

newNoteBtn.addEventListener("click", () => {
    showNewNoteForm()
})




function showNotes(){
    if (notes !== null && notes.length < 1) {
        notesEl.style.display = 'none'
        notesEmpty.style.display = 'flex'
        newNoteEl.style.display = 'none'
        noteContentEl.style.display = 'none'
    } else {
        newNoteEl.style.display = 'none'
        notesEl.style.display = 'block'
        notesEmpty.style.display = 'none'
        noteContentEl.style.display = 'none'
    }
}

function showNewNoteForm() {
    newNoteEl.style.display = 'block'
    notesEl.style.display = 'none'
    notesEmpty.style.display = 'none'
    noteContentEl.style.display = 'none'
}




function showNoteContent(note){
    if (!note) {
        console.error('Note not found')
        return
    }
    noteContentEl.innerHTML = ''
    let noteView = document.createElement('div')
    noteView.classList.add('note-view')
    let noteBtns = document.createElement('div')
    noteBtns.classList.add('view-note-btns')
    let backBtn = document.createElement('button')
    backBtn.classList.add('back')
    let backImg = document.createElement('img')
    backImg.src = 'assets/back.png'
    backBtn.appendChild(backImg)
    let editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    let editImg = document.createElement('img')
    editImg.src = 'assets/edit.png'
    editBtn.appendChild(editImg)
    noteBtns.appendChild(backBtn)
    noteBtns.appendChild(editBtn)
    noteView.appendChild(noteBtns)
    let noteContent = document.createElement('div')
    noteContent.classList.add('note-content')
    let noteTitle = document.createElement('h2')
    noteTitle.classList.add('note-title')
    noteTitle.textContent = note.title
    let noteText = document.createElement('p')
    noteText.classList.add('note-text')
    noteText.textContent = note.content
    noteContent.appendChild(noteTitle)
    noteContent.appendChild(noteText)
    noteView.appendChild(noteContent)
    noteContentEl.innerHTML = noteView.innerHTML
    noteContentEl.style.display = 'block'
    notesEl.style.display = 'none'
    notesEmpty.style.display = 'none'
    newNoteEl.style.display = 'none'
    return noteView
}

let index = 0

function createNoteElement() {
    notesEl.innerHTML = ''
    notes.forEach((note, i) => {
        let newNote = document.createElement('div')
        let h2 = document.createElement('h2')
        newNote.classList.add('note')
        h2.classList.add('note-title')
        h2.textContent = note.title
        newNote.appendChild(h2)
        newNote.style.backgroundColor = noteColors[i % noteColors.length]
        notesEl.appendChild(newNote)
    })

}

notesEl.addEventListener('click', (event) => {
    if (event.target.classList.contains('note') || event.target.classList.contains('note-title')) {
        const title = event.target.textContent
        const note = notes.find(note => note.title === title)
        showNoteContent(note)
    }
});



const saveBtn = document.querySelector(".save")

function saveNote() {
    let titleInput = document.getElementById("title")
    let contentInput = document.getElementById("content")
    const title = titleInput.value.trim()
    const content = contentInput.value.trim()

    if (!title) {
        titleInput.style.borderBottom = '1px solid #ff9494'
        contentInput.style.border = ''
        return
    } else if (!content) {
        contentInput.style.borderBottom = '1px solid #ff9494'
        titleInput.style.border = ''
        return
    } else {
        titleInput.style.border = ''
        contentInput.style.border = ''
        notes.push({ title: title, content: content })

        createNoteElement()
        showNotes()
        titleInput.value = ''
        contentInput.value = ''
    }

    
}

saveBtn.addEventListener("click", saveNote)

showNotes()

const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("search-input")

searchBtn.addEventListener("click", () => {
    searchInput.style.display = 'block'
    searchBtn.style.display ="none"
    searchInput.focus()
})

searchInput.addEventListener("blur", () => {
    searchInput.style.display = 'none'
    searchBtn.style.display = 'block'
}) 

//search function

