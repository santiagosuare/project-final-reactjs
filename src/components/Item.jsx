import React from 'react'

const Item = ({item}) => {
    return (
        <div key={item.id} className="card w-50 mt-3">
                                    <div className="card-header">{item.title}</div>
                                    <div className="card-body">
                                        <img src={item.pictureURL} width="300" height="300" alt="pic"/>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-outline-primary btn-block">Detalle</button>
                                    </div>
                              </div>
    )
}

export default Item
