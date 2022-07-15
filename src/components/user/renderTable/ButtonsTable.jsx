import Button from "../utilities/Button";
export default props => {
    const { thisUserCrud, userListUserCrud } = props
    return  (
        <td>
            <Button styled="warning" callBack={e => thisUserCrud.load(userListUserCrud)} type={<i className="fa fa-pencil"></i>} />
            <Button styled="danger ml-2" callBack={e => thisUserCrud.remove(userListUserCrud)} type={<i className="fa fa-trash"></i>} />
        </td>
    )
}
    
    // import React, { Component } from "react";
// import axios from "axios";
// const baseUrl = "http://localhost:3001/users";
// export default class RenderButtons extends Component {
//     state = {
//         // userUserCrud: this.props.user,
//         // listUserCrud: this.props.listUserCrud,
//         thisUserCrud: this.props.this,
//         userListUserCrud: this.props.userListUserCrud
//     }
    
//     // getUpdatedList(user, add = true) {
//     //     const list = this.state.listUserCrud.filter(u => u.id !== user.id);
//     //     if(add) list.unshift(user);
//     //     return list;
//     // }
//     // load(userUserCrud) {
//     //     this.setState({ userUserCrud });
//     // }
//     // remove(user) {
//     //     axios.delete(`${baseUrl}/${user.id}`)
//     //         .then(resp => {
//     //             const listUserCrud = this.getUpdatedList(user, false);
//     //             this.setState({ listUserCrud });
//     //         })
//     // }
//     render() {
//         const { thisUserCrud, userListUserCrud } = this.state;
//         // if(userListUserCrud.id == 3)console.log(userListUserCrud.id)
//         return (
//             <td>
//                 <Button styled="warning" callBack={e => thisUserCrud.load(userListUserCrud)} type={<i className="fa fa-pencil"></i>} />
//                 <Button styled="danger ml-2" callBack={e => thisUserCrud.remove(userListUserCrud)} type={<i className="fa fa-trash"></i>} />
//             </td>
//         )
//     }
// }