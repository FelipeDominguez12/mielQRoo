//variables
var comerciantes;
var cardContainer;
var createTaskCard;
var card;
var cardImg;
var cardBody;
var descripcionL;
var title;
var boton;
var initListOfTasks;
let dato;
function cargarJson() {
	const xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'usuarios.json', true);
	xhttp.send();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//console.log(this.responseText);
			 dato = JSON.parse(this.responseText);
			 cargarComerciantes(dato);
		}
	}
}
cargarJson();

function cargarComerciantes(){

    createTaskCard = (task) => {
        //creamos un elemento DIV con la clase card de Bootstrap4
        col1 = document.createElement('div');
        col1.className = 'col col-sm-12 col-md-4 col-lg-4';
        col1.setAttribute('style','padding: 15px 15px; text-align:center;');
        card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('style','background: #f8efdf; border:none; margin-bottom:40px;');
        //Creamos un elemento imagen 
        cardImg = document.createElement('img');
        cardImg.className = 'card-img-top';
        //Obtenemos la ruta de la imagen del Json y se lo agregamos al src del elemento img
        cardImg.src=task.fotoPerfil;
        cardImg.setAttribute('style','padding: 15px 15px;');
        //Creamos un DIV con la clase card-body
        cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        //Creamos un H5 con la clase card-title
        title = document.createElement('h5');
        //Obtenemos del Json el nombre del comerciantes y se asigna
        title.innerText = task.nombreComerciante;
        title.className = 'card-title';
        title.setAttribute('style','text-transform: uppercase; font-weight:300;');
        //Creamos un p para agregar la descripción del comerciantes del Json
        descripcionL = document.createElement('p');
        descripcionL.innerText = task.descripcion;
        //el parrafo es de la clase card-text
        descripcionL.className = 'card-text';
        //Creamos un boton
        boton = document.createElement("button");
        boton.innerHTML = 'Ver comerciante';
        //Asiganos clases de Bootstrap
        boton.className = 'btn btn-primary';
        boton.setAttribute('style','padding: 15px 15px;');
        //Agregamos lo correspondiente
        col1.appendChild(card);
        card.appendChild(cardImg);
        cardBody.appendChild(title);
        cardBody.appendChild(descripcionL);
        card.appendChild(cardBody);
        card.appendChild(boton);
        cardContainer.appendChild(col1);
    }
    initListOfTasks = () => {
        if (cardContainer) {
            document.getElementById('card-comerciantes').replaceWith(cardContainer);
            return;
        }
    
        cardContainer = document.getElementById('card-comerciantes');
        //Iteración del Json de comerciantes
        dato.forEach((task) => {
            //Llamando a la función para crear las tarjetas de los comerciantes
            createTaskCard(task);
        });
    };
    initListOfTasks();
}

