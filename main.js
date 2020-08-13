// --------------------- Learn ---------------------

//console.log(document)
document.getElementById("playing-field").style.backgroundColor = "blue"

// 04 Spot check 1
const down = document.getElementById("down")
console.log(down)

//const playingField = document.getElementById("playing-field")
//playingField.innerHTML = "TEXT"

// 06 Spot check 2
document.getElementById("block").style.backgroundColor = "yellow"

// 08 Spot Check 3
const moveRight = function () {
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
}

//moveRight()

// 09 Creating and Adding Elements
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

// 10 Spot Check 4
const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~Tzlil~"
subHeader.setAttribute("class", "sub-header")
subHeader.style.color = "green"
subHeader.style.fontFamily = "arial"
subHeader.style.textShadow = "1px 1px 1px black"
document.body.appendChild(subHeader)

// 12 Spot Check 5
const boxClickMe = document.createElement("div")
boxClickMe.innerHTML = "Click Me!"
boxClickMe.style.backgroundColor = "red"
boxClickMe.style.fontFamily = "arial"
boxClickMe.style.boxShadow = "1px 1px 1px black"
boxClickMe.style.color = "white"
boxClickMe.style.width = "100px"
document.body.appendChild(boxClickMe)

const boxClicked = function () {
    boxClickMe.style.backgroundColor = "#8e44ad"
    boxClickMe.style.color = "white"
    boxClickMe.innerHTML = "Thanks!"
}

// Set attribute onclick for the box
boxClickMe.setAttribute("onclick", "boxClicked()")

// 13 Spot Check 6
// Adding the unordered list element
const list = document.createElement("ul")
list.setAttribute("id", "list")
list.setAttribute("onclick", "addListItem()")
list.style.display = "inline-block"
document.body.appendChild(list)

// Add a new item into the list function
const addListItem = function () {
    const listNewItem = document.createElement("li")
    listNewItem.innerHTML = "A new item!"
    list.appendChild(listNewItem)
}

// Adding the starter item in the list
const listStarter = document.createElement("li")
listStarter.innerHTML = "List Starter"
list.appendChild(listStarter)

// Adding the second item in the list
const listClickUs = document.createElement("li")
listClickUs.innerHTML = "Click Us!"
list.appendChild(listClickUs)

// 14 Events II
const box = document.createElement("div") // dynamically creating an element
box.setAttribute("class", "box")

box.onclick = function () {       // adding an event to the new element
    if (box.innerHTML ==""){
    box.innerHTML = "I'm alive!"
    } else{
        box.innerHTML = ""
    }
}

box.onmouseenter = function () {
    box.style.backgroundColor = "green";
}
box.onmouseleave = function () {
    box.style.backgroundColor = "red";
}

// Dynamically creating box's parent element before appending
const boxParent = document.createElement("div")
boxParent.setAttribute("id", "some-id")
document.body.appendChild(boxParent)
document.getElementById("some-id").appendChild(box) // now the box will be on the page, and will react to a click!

// --------------------- Apply ---------------------
// Compeleting The Game

// Variablbes Defiition
const rightArrow = document.getElementById("right")
const leftArrow = document.getElementById("left")
const downArrow = document.getElementById("down")
const upArrow = document.getElementById("up")
const block = document.getElementById("block")
const blockWdith = parseInt(window.getComputedStyle(block).getPropertyValue("width"))
const blockStepSize = 18

// Moving block according to clicked arrow
const moveBlock = {
    right: function () {

        // Get the MAX right the block can go within the playing field
        const minR = parseInt(window.getComputedStyle(document.getElementById("playing-field"), null).getPropertyValue("padding"))
        const maxR = parseInt(window.getComputedStyle(document.getElementById("playing-field"), null).getPropertyValue("width")) - minR

        // Get current left's value of block
        let left = parseInt(block.style.left) || 0

        // Move block one full step within borders
        if (maxR > (left + blockWdith + blockStepSize)) {
            left += blockStepSize
        } else {

            // Make a smaller step if too close to border
            left = maxR - blockWdith - minR
        }
        block.style.left = left + "px"
    },
    left: function () {

        // Get the min left the block can go within the playing field
        const minL = parseInt(window.getComputedStyle(document.getElementById("playing-field"), null).getPropertyValue("padding"))

        // Get current left's value of block
        let left = parseInt(block.style.left) || 0

        // Move block one full step within borders
        if (minL < (left - blockStepSize)) {

            // Move one full step within borders
            left = left - blockStepSize
        } else {

            // Make a smaller step if too close to border
            left = minL
        }
        block.style.left = left + "px"
    },
    down: function () {

        // Get the MAX down the block can go within the playing field
        const minD = parseInt(window.getComputedStyle(document.getElementById("playing-field"), null).getPropertyValue("padding"))
        const maxD = parseInt(window.getComputedStyle(document.getElementById("playing-field"), null).getPropertyValue("height")) - minD

        // Get current left's value of block
        let up = parseInt(block.style.top) || 0

        // Move block one full step within borders
        if (maxD > (up + blockWdith + blockStepSize)) {

            // Move one full step within borders
            up += blockStepSize
        } else {

            // Make a smaller step if too close to border
            up = maxD - blockWdith - minD
        }
        block.style.top = up + "px"
    },
    up: function () {

        // Get the min up the block can go within the playing field
        const minU = parseInt(window.getComputedStyle(document.getElementById("playing-field"), null).getPropertyValue("padding"))

        // Get current left's value of block
        let up = parseInt(block.style.top) || 0

        // Move block one full step within borders
        if (minU < (up - blockStepSize)) {

            // Move one full step within borders
            up = up - blockStepSize
        } else {

            // Make a smaller step if too close to border
            up = minU
        }
        block.style.top = up + "px"
    }
}

// Add onclick attribute to all arrows
rightArrow.setAttribute("onclick", "moveBlock.right()")
leftArrow.setAttribute("onclick", "moveBlock.left()")
downArrow.setAttribute("onclick", "moveBlock.down()")
upArrow.setAttribute("onclick", "moveBlock.up()")