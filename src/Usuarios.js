import React, {useState} from 'react'

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([{nombre:'Nicolas'},{nombre:'Jonatan'}])

    const mariano = {nombre:"Mariano"};

    const agregarMariano = () =>{
        setUsuarios([...usuarios, mariano])
    }

  return (
    <div>
        <h1>Usuarios</h1>
        <button onClick={agregarMariano}>Agregar a Mariano</button>
        {
            usuarios.map((usuario,indice)=>{
                return <h1 key={indice}>{usuario.nombre}</h1>
            })
        }
    </div>
  )
}

