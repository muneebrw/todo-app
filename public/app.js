console.log(firebase)

// create location
var loc = firebase.database().ref('todos')

// get data from DB
loc.on('child_added', function(data){
  console.log(data.val().toDo)
  var noteValueDB = data.val().toDo  

  
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    
    var savedNotes = document.getElementById('savedNotes')
    savedNotes.appendChild(tr)
    
    tr.appendChild(td)
    var codeBullet = String.fromCharCode(7)
    td.innerHTML = codeBullet + ' ' + noteValueDB
    td.setAttribute('class','td')

    var td2 = document.createElement('td')
    td2.innerHTML = ''
    tr.appendChild(td2)

    // creating edit button

    var btnEdit = document.createElement('button')
    btnEdit.setAttribute('class','w3-button w3-khaki w3-round-xlarge')
    btnEdit.setAttribute('onClick','editNote(this)')
    btnEdit.setAttribute('id',data.val().key)
    btnEdit.innerHTML = 'Edit'

    // creating delete button

    var btnDel = document.createElement('button')
    btnDel.setAttribute('class','w3-button w3-amber w3-round-xlarge')
    btnDel.setAttribute('onClick','delNote(this)')
    btnDel.setAttribute('id',data.val().key)
    btnDel.innerHTML = 'Delete'

    var td3 = document.createElement('td')
    td3.appendChild(btnEdit)
    td3.appendChild(btnDel)
    tr.appendChild(td3)

})

function addNote()
{
    // targetting value
    var note = document.getElementById('note')
    var noteValue = note.value

    // create key
    var key = loc.push().key
    console.log(key)

    // create object
    var todoData = {key:key, toDo:noteValue}
    
    // create DB
    loc.child(key).set(todoData)

    
    note.value = ''

}

function editNote(e)
{
    
    var btn = e
    // console.log(btn.id)

    var keyID = btn.id
    var cell = btn.parentNode
    var row = cell.parentNode
    var cell1 = row.firstChild
    var valToBeEdited = cell1.innerHTML

    // slicing value to arrange string properly

    var slicedVal = valToBeEdited.slice(2)
    var slicedIndex = valToBeEdited.slice(0,2)
    var updated = prompt('Update your task',slicedVal)

    // send updated value to DB
    var updatedObj = {key: keyID, toDo:updated}
    loc.child(keyID).set(updatedObj)

    if(updated === null)
    {
        cell1.innerHTML = valToBeEdited
    }
    else
    {
        cell1.innerHTML = slicedIndex + updated
    }
}

// function for deleting individual note

function delNote(d)
{
    // get key as id, then remove that object from DB
    var keyToDel = d.id
    loc.child(keyToDel).remove()

    // delete from web page
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
    // remove all from DB
    loc.remove()

    // remove all from web page
    var delAllNotes = document.getElementById('savedNotes')
    delAllNotes.innerHTML = ''
}