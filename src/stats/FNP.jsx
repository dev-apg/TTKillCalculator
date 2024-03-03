function FNP({ title, value, actionType, dispatch, active }) {
const on = active? "on" : "off";
    const rowStyle = {
        display: 'flex'
    }
console.log(active)
    return (
        <div style={rowStyle}>
            <button onClick={() => dispatch({ type: 'update_fnp_active', payload: active})}>
                <p>{title}&nbsp;{on}</p>
                <p>{value}</p>
            </button>
            <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>+1</button>
            <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>-1</button>
            <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>+5</button>
            <button onClick={(e) => { dispatch({ type: actionType, payload: e.target.textContent }) }}>-5</button>
        </div>
    )
}

export default FNP