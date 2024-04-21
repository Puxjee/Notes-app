const newNoteEl = document.querySelector('.new-note')
const notesEmpty = document.querySelector('.empty')
const notesEl = document.querySelector('.not-empty')

let notes = []



function showNotes(){
    if (notes !== null && notes.length < 1) {
        notesEl.style.display = 'none';
        notesEmpty.style.display = 'flex';
        newNoteEl.style.display = 'none';
    } else {
        newNoteEl.style.display = 'none';
        notesEl.style.display = 'block';
        notesEmpty.style.display = 'none';

        const activeNote = notesEl.querySelector('.active-note');
        if (activeNote) {
        activeNote.classList.remove('active-note');
    }
    }
}

function showNewNoteForm() {
    newNoteEl.style.display = 'block';
    notesEl.style.display = 'none';
    notesEmpty.style.display = 'none';
}

const newNoteBtn = document.getElementById("add")
newNoteBtn.addEventListener("click", () => {
    showNewNoteForm()
})

function showNoteContent(noteTitle){
    const noteContent = notes.find(note => note.title === noteTitle).content
    let h2 = document.createElement('h2')
    h2.classList.add("note-title")
    h2.textContent = noteTitle
    let p = document.createElement('p')
    p.classList.add("note-content")
    p.textContent = noteContent
}

function createNoteElement() {
    notesEl.innerHTML = ''
    notes.forEach(note => {
        let newNote = document.createElement('div')
        let h2 = document.createElement('h2')
        newNote.classList.add('note')
        h2.classList.add('note-title')
        h2.textContent = note.title
          
        newNote.appendChild(h2)
        notesEl.appendChild(newNote)
    });
}


const backBtn = document.querySelector(".back")

backBtn.addEventListener("click", () => {
    showNotes()
})

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
