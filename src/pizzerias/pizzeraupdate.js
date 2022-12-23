import React, {Component} from 'react';
import axios from 'axios';


class PizzaUpdate extends Component {

    constructor(props){
        super(props);
        this.state = {
            obj_to_update:this.props.pizzariaUpdate,  // url
            description:this.props.pizzariaUpdate.description,
            email:this.props.pizzariaUpdate.email,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        // this.setState({value:event.target.value});
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.patch("http://127.0.0.1:8000".concat(this.state.obj_to_update.update),{
            description:this.state.description,
            email:this.state.email,
        })
        .then((response)=>{
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    render(){
        const {description, email} = this.state;
        return (
            <div style={{color:"red",border:"1px solid red"}}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h6>Updating</h6>
                    </div>

                    <div>
                    Description
                        <input
                            style={{ backgroundColor: "white"}}
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    Email
                        <input
                            style={{ backgroundColor: "white"}}
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input 
                        style={{ backgroundColor: "white"}}
                        type='submit'
                        valude='Submit'
                    />
                </form>
            </div>
        )
    }
}

export default PizzaUpdate;