function Multi({ title, value, actionType, dispatch, profileArray, profileIndex, profileActionType }) {

    const rowStyle = {
        display: 'flex'
    }

    return (
        <div style={rowStyle}>
            <button onClick={() => dispatch({ type: profileActionType, payload: { array: profileArray, index: profileIndex }})}>
                <p>{title}&nbsp;</p>
                <p>{profileArray[profileIndex].name}</p>
                <p>{value}</p>
            </button>
            <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>+1</button>
            <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>-1</button>
            <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>+5</button>
            <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>-5</button>
        </div>
    )
}

export default Multi