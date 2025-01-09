

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
