import React, { useState } from 'react';

function App() {
  //Antes del return declaramos constantes
  const [contador, setContador] = useState(100)
  const [nElemento, setNelemento] = useState('')

  //Arreglo estatico
  const frutas = ['🍋','🍊','🍌','🍍','🍎','🍒','🍓','🍉']
  //Areglo Dinamico
  const [verdura, setVerdura] = useState([])

  //Objeto
  const alumno = {
    nombre: "José Antonio toño",
    apellidos: "Morales Flores",
    edad: 25,
    ciudad: "Tehuacán",
    sexo: "Masculino"
  }

  //Arreglo de Objetos
  const alumnos = [
    {
      id: 1,
      nombre: "José Antonio toño",
      apellidos: "Morales Flores",
      edad: 25,
      ciudad: "Tehuacán",
      sexo: "Masculino"
    },
    {
      id: 2,
      nombre: "Edaly",
      apellidos: "Castañeda Mendez",
      edad: 24,
      ciudad: "Tehuacán",
      sexo: "Femenino"
    },
    {
      id: 3,
      nombre: "Cristian",
      apellidos: "Palma Sifuentes",
      edad: 26,
      ciudad: "Tehuacán",
      sexo: "Masculino"
    },
  ]




  const agregaLimpia = () =>{
    setVerdura([...verdura, nElemento])
    setNelemento('')
  }

  return (
    <div className="container d-flex h-100 text-center text-bg-dark">
      <div classname="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header/>
        <Main/>
        <Footer/>
        <h2>Segunda Parte del Curso usando Constantes</h2>
        <p>El valor de mi constante contador es de: {contador}</p>
        <p>
          <button className="mx-1 btn btn-lg btn-light fw-bold border-white bg-white" 
          onClick={() => setContador(contador + 1)}>Click Me Plus</button> 
          <button className="mx-1 btn btn-lg btn-light fw-bold border-white bg-white" 
          onClick={() => setContador(contador - 1)}>Click Me Lesst</button>
        </p>
        <h2>Trabajando con un arreglo estatico metodo map</h2>
        <p>Presentado el contenido de un arreglo mediante un map</p>
        <p>Todo el contenido: {frutas}</p>
        <p>Mostrando solo un elemento Manzana: {frutas[4]}</p>
        {/*
        <ol>
          <li>{frutas[0]}</li>
          <li>{frutas[1]}</li>
          <li>{frutas[2]}</li>
        </ol>
        */}
        <p>Mostrando cada elemento recorrido por un map</p>
        <ul>
          {
            frutas.map((nFruta, index) => {
              return(<li key={index}>{nFruta}</li>)
            })
          }
        </ul>
          <p>Trabajando con un arreglo dinamico y mostrando con un map en tiempo real</p>
          <p>Agrega Verdura: 
            <input type="text" 
            className='form-control-sl' 
            onChange={(e)=>setNelemento(e.target.value)} 
            value={nElemento} />
          </p>
          <p><button onClick={() => setVerdura([...verdura, nElemento])} className='btn btn-success'>Agregar</button></p>
          <p><button onClick={() => agregaLimpia()} className='btn btn-success'>Agregar2</button></p>
          <br/>
          <h3>Contenido del arreglo verduras</h3>
          <ul>
            {
              verdura.map((nVerdura, index) => {
                return(
                  <li key={index}>{nVerdura}</li>
                )
              })
            }
          </ul>
        <h2>Trabajando monstando los datos de un objeto</h2>
        <p>Nombre: {alumno.nombre}</p>
        <p>Apellidos: {alumno.apellidos}</p>
        <p>Edad: {alumno.edad}</p>
        <p>Ciudad: {alumno.ciudad}</p>
        <p>Sexo: {alumno.sexo}</p>

        <h2>Trabajando con un arreglo de objetos</h2>
        {
          alumnos.map((dato) =>{
            return(
              <div>
                <p>Id: {dato.id}</p>
                <p>Nombre: {dato.nombre}</p>
                <p>Apellidos: {dato.apellidos}</p>
                <p>Edad: {dato.edad}</p>
                <p>Ciudad: {dato.ciudad}</p>
                <p>Sexo: {dato.sexo}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

const Header = () =>{
  return(
    <header className="mt-3 mb-5">
        <div>
          <h3 className="float-md-start mb-0">Cover</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <p className="fw-bold py-1 px-3 active" aria-current="page" href="#">Home</p>
            <p className="fw-bold py-1 px-3" href="#">Features</p>
            <p className="fw-bold py-1 px-0" href="#">Contact</p>
          </nav>
        </div>
      </header>
  )
}

const Main = () => {
  return(
    <main>
        <br/>
        <h1>Cover your page.</h1>
        <br/>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <br/>
        <br/>
        <br/>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
        </p>
        <br/>
        <br/>
        <br/>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus veritatis inventore molestias fugit pariatur error ipsa aperiam! Similique tempora odio minus velit adipisci quam. Illum modi debitis cupiditate ex!</p>
      </main>
  )
}

const Footer = () => {
  return(
    <footer className="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer>
  )
}