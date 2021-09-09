

export const ItemListContainer = (props) => {
    return (
        <div>
            <ul>
                <li>{props.catalogo[0]}</li>
                <li>{props.catalogo[1]}</li>
                <li>{props.catalogo[2]}</li>
                <li>{props.catalogo[3]}</li>
            </ul>
        </div>
    )
}

export default ItemListContainer;