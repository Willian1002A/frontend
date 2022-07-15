import ButtonsTable from "./ButtonsTable";
export default props =>
{
    // const userUserCrud = props.UserCrud;
    const { thisUserCrud, listUserCrud } = props;
    return listUserCrud.map(userList => 
        <tr key={userList.id}>
            <td>{userList.id}</td>
            <td>{userList.name}</td>
            <td>{userList.email}</td>
            {/* <ButtonsTable this={thisUserCrud} listUserCrud={listUserCrud} user={userUserCrud} userListUserCrud={userList}/> */}
            <ButtonsTable thisUserCrud={thisUserCrud} userListUserCrud={userList}/>
        </tr>
    )
}