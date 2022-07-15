import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";
import Form from "./renderForm/Form";
import Button from "./utilities/Button";
import Table from "./renderTable/Table";
import Rows from "./renderTable/Rows";
import Forms from "./renderForm/Forms";
// import RenderForm from "./renderForm/RenderForm";
const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
}
// const baseUrl = "http://localhost:3001/users";
const baseUrl = "https://crudbackendreact.herokuapp.com/users";
const initialState = {
    user: { name: "", email: "" },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState };

    componentWillMount() {
        axios(baseUrl)
            .then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear () {
        this.setState({ user: initialState.user});
    }

    save() {
        const user = this.state.user;//Não é bom alterar o user direto do state, o recomendado é criar um clone e então alterar o clone do usuario
        const method = user.id ? "put" : "post";
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)//Enviou a informação do user para o json baseado no method inserido
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.clear();//Limpa o user do state
                this.setState({ list });//Insere a lista atualizada no state
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);//Insere toda lista do state com exceção do usuario informado nos parametros desta função, caso o usuario exista na lista de state;
        if(add) list.unshift(user);//Adiciona na posição de inicio da lista da função o usuario informado nos parametros.
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };//Cria clone do state.user;
        user[event.target.name] = event.target.value;//Altera ou nome, ou email do clone, baseado nos atributos do elemento em que é aplicado este metodo inserido nos parametros da função;//Melhorar explicação.
        return this.setState({ user });
    }

    renderForm() {
        // Converter para componentes os elementos internos abaixo//Olhar aula 426 para ver o que é preciso refatorar
        return (
            <div className="form">
                <div className="row">
                    {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Nome: </label>
                            <input type="text" className="form-control"
                                name="name" value={this.state.user.name}
                                onChange={e => this.updateField(e)} placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail:</label>
                            <input type="text" className="form-control"
                                name="email" value={this.state.user.email} 
                                onChange={e => this.updateField(e)} placeholder="Digite o email..." />
                        </div>
                    </div> */}
                    <Form nome="Nome" name="name" value={this.state.user.name} callBack={e => this.updateField(e)} placeholder="Digite o nome..." />
                    <Form nome="E-mail" name="email" value={this.state.user.email} callBack={e => this.updateField(e)} placeholder="Digite o email..." />
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        {/* <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button> */}
                        <Button styled="primary" callBack={e => this.save(e)} type="Salvar" />
                        <Button styled="secondary ml-2" callBack={e => this.clear(e)} type="Cancelar" />
                    </div>
                </div>
            </div> 
        )
    }

    load(user) {
        // console.log("teste")
        this.setState({ user });
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = this.getUpdatedList(user, false);
                if(this.state.user.id != null) this.clear();
                this.setState({ list });
            })
    }

    renderTable() {
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
                    {this.renderRows(this.state.list)}
                    {/* <Rows this={this} list={this.state.list} user={this.state.user}/> */}
                </tbody>
            </table>
        )
    }

    renderRows(listaDeUsuarios) {
        return (
            listaDeUsuarios.map(user => {
                return (
                    <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button styled="warning" callBack={e => this.load(user)} type={<i className="fa fa-pencil"></i>} />
                                <Button styled="danger ml-2" callBack={e => this.remove(user)} type={<i className="fa fa-trash"></i>} />
                                {/* <button className="btn btn-warning"
                                    onClick={() => this.load(user)}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger ml-2"
                                    onClick={() => this.remove(user)}>
                                    <i className="fa fa-trash"></i>
                                </button> */}
                            </td>
                    </tr>
                )
            })
        )
    }

    // Converter para componentes os elementos internos abaixo//Olhar aula 422 para ver o que é preciso refatorar
    render() {
        // console.log(this.state.list)
        return (
            <Main {...headerProps}>
                {/* {this.renderForm()} */}
                {/* {this.renderTable()} */}
                <Forms callBackForm={e => this.updateField(e)} callBackSave={e => this.save(e)}
                            callBackClear={e => this.clear(e)} nameValue={this.state.user.name}
                            emailValue={this.state.user.email} />
                <Table this={this} list={this.state.list} user={this.state.user}/>
            </Main>
        )
    }
}