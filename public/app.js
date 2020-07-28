var i = 01
function addNote()
{

    var note = document.getElementById('note')
    var noteValue = note.value
    
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    
    var savedNotes = document.getElementById('savedNotes')
    savedNotes.appendChild(tr)
    
    tr.appendChild(td)
    td.innerHTML = i + '. ' + noteValue
    td.setAttribute('class','td')

    var td2 = document.createElement('td')
    td2.innerHTML = ''
    tr.appendChild(td2)

    var btnEdit = document.createElement('button')
    btnEdit.setAttribute('class','w3-button w3-khaki')
    btnEdit.setAttribute('id','i')
    btnEdit.setAttribute('onClick','editNote(i)')
    btnEdit.innerHTML = 'Edit'

    var btnDel = document.createElement('button')
    btnDel.setAttribute('class','w3-button w3-amber')
    btnDel.innerHTML = 'Delete'

    var td3 = document.createElement('td')
    td3.appendChild(btnEdit)
    td3.appendChild(btnDel)
    tr.appendChild(td3)
    // console.log(td3)

    note.value = ''

    i++
}

function editNote(i)
{
    
    var btn = document.getElementById('i')
    
    var cell = btn.parentNode
    var row = cell.parentNode
    var cell1 = row.firstChild
    note.value  = cell1.innerHTML

    console.log(btn)
    console.log(cell)
    console.log(row)
    console.log(cell1)
    console.log(note.value)
}
