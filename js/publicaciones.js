//variables
var comerciantes;
var cardContainer1;
var createTaskCard1;
var card1;
var col2;
var cardImg1;
var cardBody1;
var descripcion1;
var precio;
var disponibilidad;
var title1;
var boton1;
var initListOfTasks1;
var dato1;

function cargarJson() {
	const xhttp1 = new XMLHttpRequest();
	xhttp1.open('GET', 'publicaciones.json', true);
	xhttp1.send();
	xhttp1.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//console.log(this.responseText);
			 dato1 = JSON.parse(this.responseText);
             cargarPublicaciones(dato1);
             console.log(dato1);
		}
	}
}
cargarJson();

function cargarPublicaciones(){

    createTaskCard1 = (task) => {
        //creamos un elemento DIV con la clase card de Bootstrap4
        col2 = document.createElement('div');
        col2.className = 'col col-sm-12 col-md-4 col-lg-4';
        col2.setAttribute('style','padding: 15px 15px; text-align:center;');
        card1 = document.createElement('div');
        card1.className = 'card';
        card1.setAttribute('style','background: #f8efdf; border:none; margin-bottom:40px;');
        //Creamos un elemento imagen 
        cardImg1 = document.createElement('img');
        cardImg1.className = 'card-img-top';
        //Obtenemos la ruta de la imagen del Json y se lo agregamos al src del elemento img
        cardImg1.src=task.img;
        cardImg1.setAttribute('style','padding: 15px 15px;');
        //Creamos un DIV con la clase card-body
        cardBody1 = document.createElement('div');
        cardBody1.className = 'card-body';
        //Creamos un H5 con la clase card-title
        title1 = document.createElement('h5');
        //Obtenemos del Json el nombre del publicaciones y se asigna
        title1.innerText = task.nombreComerciante;
        title1.className = 'card-title';
        title1.setAttribute('style','text-transform: uppercase; font-weight:300;');
        //Creamos un p para agregar la descripción del publicaciones del Json
        descripcion1 = document.createElement('p');
        descripcion1.innerText = task.Descripcion;
        //el parrafo es de la clase card-text
        descripcion1.className = 'card-text';
        //Creamos un p para agregar la descripción del cpublicaciones del Json
        precio = document.createElement('p');
        precio.innerText ='Precio por kilo: '+ task.precioVenta ;
        //el parrafo es de la clase card-text
        precio.className = 'card-text';
        //Creamos un p para agregar la descripción del publicaciones del Json
        disponibilidad = document.createElement('p');
        disponibilidad.innerText = 'Disponibilidad: '+task.disponibilidad ;
        //el parrafo es de la clase card-text
        disponibilidad.className = 'card-text';
        //Creamos un boton
        boton1 = document.createElement("button");
        boton1.innerHTML = 'Ver publicación';
        //Asiganos clases de Bootstrap
        boton1.className = 'btn btn-primary';
        boton1.setAttribute('style','padding: 15px 15px;');
        //Agregamos lo correspondiente
        col2.appendChild(card1);
        card1.appendChild(cardImg1);
        cardBody1.appendChild(title1);
        cardBody1.appendChild(descripcion1);
        cardBody1.appendChild(precio);
        cardBody1.appendChild(disponibilidad);
        card1.appendChild(cardBody1);
        card1.appendChild(boton1);
        cardContainer1.appendChild(col2);
    }
    initListOfTasks1 = () => {
        if (cardContainer1) {
            document.getElementById('card-publicaciones').replaceWith(cardContainer1);
            return;
        }
    
        cardContainer1 = document.getElementById('card-publicaciones');
        //Iteración del Json de comerciantes
        dato1.forEach((task) => {
            //Llamando a la función para crear las tarjetas de los comerciantes
            createTaskCard1(task);
        });
    };
    initListOfTasks1();
}