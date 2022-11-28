import React from 'react'

function Item = ({product} =>) {
  return (
    <div>
      <img  alt="" src={} />
      <h1>{product.title}</h1>
      {/* <span>{product.description}</span> */}
      <h2>{product.price}</h2>
    </div>
  )
}
export default Item




  {/* <div style={estilosItems.superContainer}>
                {
                    products.map((products) => {
                        return <>
                            <div key={products.id}>
                                <div style={estilosItems.contenedor}>
                                    <img alt="" src={products.image} style={estilosItems.imagen} />
                                    <h6 style={estilosItems.cardTexto}>{products.title}</h6>
                                    <span style={estilosItems.cardTexto}>Detalle</span>
                                    <h6 style={estilosItems.cardTexto}>{products.price}</h6>
                                </div>
                            </div>
                        </>
                    })
                }
            </div> */}