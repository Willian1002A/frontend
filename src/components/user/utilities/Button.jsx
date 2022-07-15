export default props => 
    <button className={`btn btn-${props.styled}`}
        onClick={props.callBack}>
        {props.type}
    </button>