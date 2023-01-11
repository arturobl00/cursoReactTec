import React, { useState } from "react";
import shortid from "shortid";

function App() {
  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([])
  const [idcount, setIdCount] = useState(1)
  const [bandera, setBandera] = useState(false)
  const [id, setId] = useState("")
  const [by, setBy] = useState("")
  
  console.log(tarea)
  
  const agregar = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Campo vacio')
      alert('Campo Vacio')
      return
    }
    setTareas([
      ...tareas, 
      {
        tarea, 
        //id: shortid.generate(),
        id: idcount,
        by: 'Arthur'
      }
    ])

    setTarea('')
    setIdCount(idcount + 1)

    console.log(tareas)
  }


    const editar = item => {
      setBandera(true)
      setTarea(item.tarea)
      console.log("La tarea es ", item.tarea)
      console.log("el id es ", item.id)
      setId(item.id)
      setBy(item.by)
    }
  
    const editarDato = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Campo vacio')
      alert('Campo Vacio')
      return
    }
    
    const arrayEditado = tareas.map(item => item.id === id ? {id, tarea, by} : item)
    setTareas(arrayEditado)
    setBandera(false)
    setTarea("")
    setId("")
  }

  const eliminar = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }
  
  return (
    <div className="container mt-5">
      <h1 className="text-center">OPERACIONES CRUD</h1>
      <div className="row">
        
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {
              tareas.map((item) => {
                return(
                  <li className="list-group-item" key={item.id}>
                    <p className="lead">ID:{item.id} TAREA:{item.tarea} BY:{item.by}</p>
                    <button className="btn btn-danger float-right mx-4" onClick={()=>eliminar(item.id)}>Eliminar</button>
                    <button className="btn btn-warning float-right" onClick={()=>editar(item)}>Editar</button>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">Agregar Tarea</h4>
          <form onSubmit={bandera ? editarDato : agregar}>
            <input type="text" 
            className="form-control-sm float-right mx-2" 
            placeholder="Escribe aquí tu tarea"
            onChange={(e)=>setTarea(e.target.value)}
            value={tarea}
            /> 
            {
              bandera ? <button className="btn btn-info">Editar</button> : <button className="btn btn-success">Agregar</button>
            }
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
