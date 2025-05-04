

/*function allowDrop(ev) {
    ev.preventDefault(); 
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.dataset.occupied==="false"){
        ev.target.appendChild(document.getElementById(data));
    }
    ev.dataset.occupied="true";
    }
  */

function allowDrop(ev) {
    ev.preventDefault(); 
    }

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    }        


const optiunile = document.querySelectorAll('.optiune');
const dropLocuri = document.querySelectorAll('.raspuns-box');

optiunile.forEach(varianta => {
    varianta.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
  });

  // varianta.classList.add("optiune-animatie"); Animația la opțiuni
  // function animatiaOptiune()
  // {
  //   optiunile.forEach(varianta =>{
  //     varianta.classList.add("optiune-animatie");

  //   });
  // }

dropLocuri.forEach(dropLoc => {
    dropLoc.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropLoc.addEventListener('drop', (e) => {
        e.preventDefault();
        
        const draggedElementId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedElementId);

        if (dropLoc.dataset.occupied === "false") {
            dropLoc.appendChild(draggedElement);

            dropLoc.dataset.occupied = "true";
        }
    });
});

dropLocuri.forEach(dropLoc => {
    dropLoc.addEventListener('dragstart', (e) => {
        const draggedElement = e.target;

        // Reset the data-occupied attribute of the old container
        if (draggedElement.parentElement) {
            const oldDroppable = draggedElement.parentElement;
            oldDroppable.dataset.occupied = "false";
        }
    });
});



    /*
    const optiunile = document.querySelectorAll('.optiune');
    const droppableContainers = document.querySelectorAll('.raspuns-box');
    
    optiunile.forEach(item => {
      item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData("text/plain", item.id);
      });
    });
    
    droppableContainers.forEach(container => {
      container.addEventListener('drop', (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const draggedItem = document.getElementById(data);
    
        const existingItem = container.querySelector(`#${data}`);
        if (!existingItem) {
          container.appendChild(draggedItem);
        }
      });
    
      container.addEventListener('dragover', (event) => {
        event.preventDefault();
      });
    });*/


/*Verificare raspunsuri  */
var btnVerif = document.getElementById("verifica-Raspunsuri");

btnVerif.addEventListener("click",afPunctaj);

function afPunctaj()
{   
  for (let i = 0; i < dropLocuri.length; i++)
     {
       if(dropLocuri[i].dataset.occupied === "false")
          {
            dropLocuri[i].style.backgroundColor = "#ff6666";
          }
       else 
       /*dropLocuri[i].style.backgroundColor = "#66ff99"; */

           /* if(dropLocuri[i].dataset.occupied === "true") */
            
              if(dropLocuri[i].dataset.corect !== optiunile[i].dataset.corect)
                {
                 dropLocuri[i].style.backgroundColor = "#ff6666";
                 console.log(dropLocuri[i].dataset.corect);
                 console.log(optiunile[i].dataset.corect);
                }
              else
                {
                 dropLocuri[i].style.backgroundColor = "#66ff99";
                }  
     }
    const x =  document.getElementById("text-rezultat");
    x.innerHTML = 'Totul este corect!' ;
}

/*AUTO-SCROLLER-UL*/

/*BACKGROUND ANIMATION */
// const icons = ["&#xf6e6", "&#xea0b", "&#xeb43"]; // Example icons. Use correct codes.
// const numIcons = 20;
// const backgroundIconsEffect = document.querySelector('.background-icons-effect');

// for (let i = 0; i < numIcons; i++) {
//     const span = document.createElement('span');
//     span.classList.add('material-symbols-rounded');
//     span.textContent = String.fromCodePoint(parseInt(icons[i % icons.length], 16)); // Correct way to add icons
//     span.style.left = `${Math.random() * 100}vw`;
//     span.style.top = `${Math.random() * 100}vh`;
//     span.style.animationDelay = `${Math.random() * 8}s`;
//     backgroundIconsEffect.appendChild(span);
// }


//Functi pentru denumirea muschiilor din imagine
function afDenumireMuschi(event, text) {
  let tooltip = document.getElementById("denumire-muschi");
  tooltip.style.display = "block";
  tooltip.textContent = text;
  tooltip.style.left = event.pageX + 10 + "px";
  tooltip.style.top = event.pageY + 10 + "px";
}

function hideDenumireMuschi() {
  document.getElementById("denumire-muschi").style.display = "none";
}

//functie pentru schimbarea imaginii
function schimbaImg() {
  let img1 = document.getElementById("corp-uman-frontal");
  let img2 = document.getElementById("corp-uman-spate");
  if(img1.style.display == 'block')
    {
      img1.style.display ='none';
      img2.style.display ='block';
    }
  else
    {
      img2.style.display ='none';
      img1.style.display ='block';
    }  

} 
