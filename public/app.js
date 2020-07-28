
function addNote()
{

    var note = document.getElementById('note')
    var noteValue = note.value
    
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    
    var savedNotes = document.getElementById('savedNotes')
    savedNotes.appendChild(tr)
    
    tr.appendChild(td)
    var codeBullet = String.fromCharCode(7)
    td.innerHTML = codeBullet + ' ' + noteValue
    td.setAttribute('class','td')

    var td2 = document.createElement('td')
    td2.innerHTML = ''
    tr.appendChild(td2)

    // creating edit button

    var btnEdit = document.createElement('button')
    btnEdit.setAttribute('class','w3-button w3-khaki w3-round-xlarge')
    btnEdit.setAttribute('onClick','editNote(this)')
    btnEdit.innerHTML = 'Edit'

    // creating delete button

    var btnDel = document.createElement('button')
    btnDel.setAttribute('class','w3-button w3-amber w3-round-xlarge')
    btnDel.setAttribute('onClick','delNote(this)')
    btnDel.innerHTML = 'Delete'

    var td3 = document.createElement('td')
    td3.appendChild(btnEdit)
    td3.appendChild(btnDel)
    tr.appendChild(td3)

    note.value = ''

}

function editNote(e)
{
    
    var btn = e
    
    var cell = btn.parentNode
    var row = cell.parentNode
    var cell1 = row.firstChild
    var valToBeEdited = cell1.innerHTML

    // slicing value to arrange string properly

    var slicedVal = valToBeEdited.slice(2)
    var slicedIndex = valToBeEdited.slice(0,2)
    var updated = prompt('Update your task',slicedVal)
    

    if(updated === null)
    {
        cell1.innerHTML = valToBeEdited
    }
    else
    {
        cell1.innerHTML = slicedIndex + updated
    }

    console.log(btn)
    console.log(cell)
    console.log(row)
    console.log(cell1)
    console.log(note.value)
}

// function for deleting individual note

function delNote(d)
{
    var rowToBeDel = d.parentNode.parentNode
    var ch0 = rowToBeDel.childNodes[0]
    var ch1 = rowToBeDel.childNodes[1]
    var ch2 = rowToBeDel.childNodes[2]
    rowToBeDel.removeChild(ch0)
    rowToBeDel.removeChild(ch1)
    rowToBeDel.removeChild(ch2)
}

// delete all notes

function delAll()
{
    var delAllNotes = document.getElementById('savedNotes')
    delAllNotes.innerHTML = ''
}