function Basic({ title, value, actionType, dispatch }) {
    const rowStyle = {
        display: 'flex',
        width: '100%'
    }
    const colStyle = {
        flexGrow: 1
    }
    return (
        <div style={rowStyle}>
            <div style={colStyle}>
                <p>{title}&nbsp;</p>
                <p>{value}</p>
            </div>
            <div style={colStyle}>
                <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>+1</button>
            </div>
            <div style={colStyle}>
                <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>-1</button>
            </div>
            <div style={colStyle}>
                <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>+5</button>
            </div>
            <div style={colStyle}>
                <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>-5</button>
            </div>
        </div>
    )
}

export default Basic