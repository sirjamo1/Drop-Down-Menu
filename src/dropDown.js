const dropDown = () => {
 const dropDownContainer = document.createElement('div');
  dropDownContainer.id = 'drop-down-container';
 const hamburgerContainer = document.createElement('div');
 hamburgerContainer.id = 'hamburger-container'
 for (let i = 0; i < 3; i += 1) {
  const line = document.createElement('div')
  line.classList.add('burger-lines');
  line.id = `line${i}`
  hamburgerContainer.appendChild(line)
 }
 dropDownContainer.appendChild(hamburgerContainer)
 let listActive = false
   const listContainer = document.createElement("div");
   listContainer.style.visibility = 'hidden'
   listContainer.classList.add('list-container')
   const uL = document.createElement("ul");
   listContainer.appendChild(uL);
   uL.appendChild(createListItem('white'));
   uL.appendChild(createListItem('blue'));
   uL.appendChild(createListItem('green'));
   dropDownContainer.appendChild(listContainer);
 hamburgerContainer.onclick = () => {
  listActive = !listActive
  if (listActive === true) {
   listContainer.style.cssText = `
   visibility: visible;
   opacity: 1;
   font-size: 2rem;`
      hamburgerContainer.style.transform = "rotate(0deg)";
  } else {
   listContainer.style.cssText = `
   visibility: hidden;
   opacity: 0;
   font-size: 0rem;`;
      hamburgerContainer.style.transform = "rotate(90deg)";
  }
      }
return dropDownContainer
}
const createListItem = (name) => {
 const item = document.createElement('li');
 item.classList.add('list-items')
 item.innerHTML = name
 item.onclick = () => {
  document.body.style.backgroundColor = name
 }
 return item

}
document.body.appendChild(dropDown())