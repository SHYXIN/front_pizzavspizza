import React, {Component} from 'react';
import PizzaUpdate from './pizzeraupdate'
import axios from 'axios';

class PizzaDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            showComponent:false,
        };
        this.updatePizzeriaDetails=this.updatePizzeriaDetails.bind(this);
        this.deletePizzeria=this.deletePizzeria.bind(this);

    }

    updatePizzeriaDetails(){
        this.setState({ showComponent:true});
    }

    deletePizzeria(obj){
        // obj 是url
        console.log(obj);
        axios.delete('http://127.0.0.1:8000'.concat(obj))
        .then((response)=>{
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        const obj = this.props.pizzariaDetail;
        return (
            <div style={{ color: 'yellow', border:'1px solid yellow'}}>
                <h4>{obj.pizzeria_name}</h4>
                <img src= {obj.logo_image} alt="logo" />

                <h5>
                    Address:{obj.street} {obj.city} {obj.state} {obj.zip_code}</h5>
                <h6>Phone:{obj.phone_number}</h6>
                <p>{obj.description}</p>
                <button style={{ backgroudColor: 'white'}} onClick={()=>{this.updatePizzeriaDetails()}}>
                    Update
                </button>
                {this.state.showComponent ? <PizzaUpdate pizzariaUpdate={obj}/>: null}
                <button
                    style={{backgroundColor: "white"}}
                    onClick={()=>this.deletePizzeria(obj.delete)}>
                    Delete
                </button>

            </div>
        )
    }

}
export default PizzaDetail;
