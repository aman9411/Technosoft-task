import React, { Component } from 'react';
import { Button, Row, Col } from "reactstrap";
import { Control ,LocalForm ,Errors} from 'react-redux-form';
import { Link } from 'react-router-dom';


const required = (val) => val && val.length;

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            todoValue: localStorage.getItem("todoValue") ? JSON.parse(localStorage.getItem("todoValue")) : [],
        }
    }

    handleInput = (values) =>{
        if(values.todo ==+ null) {
            window.alert("Please enter some text");
        } else {
            const todoValue = this.state.todoValue;
            const todo = {
                name: values.todo
            };
            console.log(todo);
            todoValue.push({...todo});
            this.setState({ todoValue });
            localStorage.setItem("todoValue", JSON.stringify(todoValue));
            console.log(todoValue);
            window.location.reload(false);
        }
    };

    removeTodo = (todo) => {
        const todoValue = this.state.todoValue;
        this.setState({
            todoValue: todoValue.filter(x=>x.name !== todo.name) 
        });
        localStorage.setItem(
          "todoValue",
          JSON.stringify(todoValue.filter(x=>x.name !== todo.name))
        );
    };

    render () {
        return (
            <div className="container text-light">
            <div className="row">
                <div className="col-md m-5">
                    <h1 className="m-5 text-center">Create Your To-Do.....</h1>
                    <div className="col-md m-5">
                    <LocalForm className="d-flex"  onSubmit={(values) => {this.handleInput(values)} }>

                        <Row className="form-group col-md m-3">
                                <Col md={12}>
                                <Control.text model=".todo" id="todo" name="todo"
                                placeholder="Enter Task..."
                                className="form-control"
                                validators={{
                                required
                            }} />
                            <Errors 
                            className="text-danger"
                            model=".todo"
                            show="touched"
                            messages={{
                                required: 'Required'
                            }}
                            />
                                </Col>
                            </Row>
                            
                            <Button className="m-3 mb-5 text-white float-right" outline color="success">Add</Button>        
                    </LocalForm>
                    </div>
                    {this.state.todoValue.map((todo) => (
                    <div className="col-md m-3 border border-light d-flex">
                        <div className="col-md-10 m-3"> 
                            <h3>{todo.name}</h3>
                        </div>
                        <Button className="m-3" color="success" ><span className="fa fa-check fa-1x" aria-hidden="true"></span></Button>
                        <Button className="m-3" color="danger" onClick={() => {this.removeTodo(todo)}}><span className="fa fa-times fa-1x" aria-hidden="true"></span></Button>
                    </div>
                    ))}
                <Link to="paging">Second Task</Link>
                  </div>
                </div> 
            </div>
        )
    }
}

export default ToDo;