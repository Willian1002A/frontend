import Rows from "./Rows"
export default props => {
    // const  userUserCrud = props.user;
    // const  listUserCrud = props.list;
    // const  thisUserCrud = props.this;
    const { this: thisUserCrud, list:listUserCrud } = props;
    return (
        <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Rows thisUserCrud={thisUserCrud} listUserCrud={listUserCrud} userUserCrud={userUserCrud}/> */}
                    <Rows thisUserCrud={thisUserCrud} listUserCrud={listUserCrud}/>
                </tbody>
            </table>
        )
}
