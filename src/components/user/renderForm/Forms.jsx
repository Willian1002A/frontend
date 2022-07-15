import Form from "./Form";
import Button from "../utilities/Button";
export default props =>
    <div className="form">
        <div className="row">
            <Form nome="Nome" name="name" value={props.nameValue} callBack={props.callBackForm} placeholder="Digite o nome..." />
            <Form nome="E-mail" name="email" value={props.emailValue} callBack={props.callBackForm} placeholder="Digite o email..." />
        </div>
        <hr />
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <Button styled="primary" callBack={props.callBackSave} type="Salvar" />
                <Button styled="secondary ml-2" callBack={props.callBackClear} type="Cancelar" />
            </div>
        </div>
    </div>