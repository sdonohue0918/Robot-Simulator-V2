document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  document.addEventListener('keydown', function(e){
    if (e.key === "ArrowRight") {
      const ul = document.getElementById('moves-container')
      let ele = document.createElement('li')
      ul.append(ele)
      ele.innerHTML = "right"
      ele.classList.add('move')
    }
    if (e.key === "ArrowLeft") {
      const ul = document.getElementById('moves-container')
      let ele = document.createElement('li')
      ul.append(ele)
      ele.innerHTML = "left"
      ele.classList.add('move')
    }
    if (e.key === "ArrowUp") {
      const ul = document.getElementById('moves-container')
      let ele = document.createElement('li')
      ul.append(ele)
      ele.innerHTML = "up"
      ele.classList.add('move')
    }
    if (e.key === "ArrowDown") {
    const ul = document.getElementById('moves-container')
      let ele = document.createElement('li')
      ul.append(ele)
      ele.innerHTML = "down" ---> 
      ele.classList.add('move')
      
    }
  })
  const moves = document.getElementsByClassName('move')
  console.log(moves)




  const moveButton = document.getElementById('move-button')
  moveButton.addEventListener("click", function(e) {
    const board = document.getElementById('board')
    renderBot()
  })
  





})



//$$$ Deliverable 2




// function addListElement(li) {
//   const ul = document.getElementById('moves-container')
//   let ele = document.createElement('li')
//   ul.append(ele)
//   ele.innerHTML = li
// }


// document.addEventListener('keydown', function(e){
//   if (e.key === "ArrowRight") {
//     const ul = document.getElementById('moves-container')
//     let ele = document.createElement('li')
//     ul.append(ele)
//     ele.innerHTML = "Move Right"
//   }
//   if (e.key === "ArrowLeft") {
//     const ul = document.getElementById('moves-container')
//     let ele = document.createElement('li')
//     ul.append(ele)
//     ele.innerHTML = "Move Left"
//   }
//   if (e.key === "ArrowUp") {
//     const ul = document.getElementById('moves-container')
//     let ele = document.createElement('li')
//     ul.append(ele)
//     ele.innerHTML = "Move Up"
//   }
//   if (e.key === "ArrowDown") {
//   const ul = document.getElementById('moves-container')
//     let ele = document.createElement('li')
//     ul.append(ele)
//     ele.innerHTML = "Move Down"
//   }
// })