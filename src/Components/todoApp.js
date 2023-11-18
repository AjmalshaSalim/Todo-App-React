import React, { Component } from "react";
import "./todoApp.css"


class TodoApp extends Component {


    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
        console.log(this.state.input);
    }

    deleteData = (index) => {
        const allDatas = this.state.datas;
        allDatas.splice(index, 1);
        this.setState({
            datas: allDatas
        })
    }

    saveData = (event) => {
        event.preventDefault();
        const { input } = this.state;
        const allDatas = this.state.datas;
        allDatas.push(input);
        this.setState({
            datas: allDatas,
            input: ""
        })
    }


    state = {
        input: "",
        datas: []
    }

    render() {
        const { input, datas } = this.state;
        console.log(datas);
        return (
            <div className='todoContainer'>


                <form className='inputContainer' onSubmit={this.saveData}>
                    <h1>Todo App</h1>
                    <input maxlength={30} className='inputSection' placeholder="Enter Here" value={input} onChange={this.handleChange} required></input>
                </form>

                <ul>
                    {datas.map((data, index) => (
                        <li key={index}>{data}<i className="fa-regular fa-trash-can" ></i><button className="toTrash" onClick={() => this.deleteData(index)}>Delete</button></li>
                    )
                    )}
                </ul>
                


            </div>
        )
    }
}
export default TodoApp;