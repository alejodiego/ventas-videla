import React, { useState, useEffect } from 'react'

const estilos = {
    botonera: {
        display: "flex",
        height: 30,
    },
    btnreset: {
        width: 200,
    },
    btnera: {
        width: 60,
        textAlign: "center",
        padding: 0,
        margin: 0,
    },
    contador: {
        width: 80,
        height: "100%",
        textAlign: "center",
        marginTop: 2,
        marginBottom: 0,
    }
}

export const ComponenteEstados = () => {
    const [contador, setContador] = useState(1);

    useEffect(() => {
        console.log("se ejecuta useEffect");

        // //    const intervalo = setInterval(()=>{
        // //         console.log("ping");
        // //     },1000)

        //     return(()=>{
        //         clearInterval(intervalo);
        //     })
    }, []);

    const handlerClickSumar = () => {
        setContador(contador + 1);
    };

    const handlerClickRestar = () => {
        if (contador === 1) {
            console.log("Contador al minimo");
        } else {
            setContador(contador - 1);
        };
    };

    const handlerClickReset = () => {
        setContador(1);
    };

    return (
        <div>
            <h2>Componente para los estados</h2>
            <div style={estilos.botonera}>
                <button style={estilos.btnera} onClick={handlerClickRestar}>-</button>
                <h3 style={estilos.contador}>{contador}</h3>
                <button style={estilos.btnera} onClick={handlerClickSumar}>+</button>
            </div>

            <button style={estilos.btnreset} onClick={handlerClickReset}>Reset</button>

        </div>
    );

};