export default props =>
    <div className="col-12 col-md-6">
        <div className="form-group">
            <label htmlFor="">{props.nome}:</label>
            <input type="text" className="form-control"
                name={props.name} value={props.value}
                onChange={props.callBack} placeholder={props.placeholder} />
        </div>
    </div>
