import React, { Component } from 'react';
// import DummyData from './dummpydata.json'; // 模拟数据
import PizzaDetail from './pizzeriadetail';
import axios from 'axios';
import PizzaForm from './pizzeriaform';


class PizzaList extends Component {
    // Code

    constructor(props){
        // 构造方法
        super(props);
        this.state = {
            pizzeriasData:[],
            pizzeria: " ",
            showComponent: false,
        }
        this.getPizzaDetail=this.getPizzaDetail.bind(this);
        this.showPizzeriaDetails=this.showPizzeriaDetails.bind(this);
    }

    getPizzaDetail(item){
        axios.get(process.env.REACT_APP_URL.concat(item.absolute_url))
        .then((response) => {
            this.setState({pizzeria: response.data})
        })
        .catch(function (error){
            console.log(error);
        })
    }

    showPizzeriaDetails(item){
        this.getPizzaDetail(item);
        this.setState({ showComponent: true});
    }

    componentDidMount(){
        axios.get(process.env.REACT_APP_URL)
        .then((response) =>{
            this.setState({pizzeriasData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        return (
            <div>
                {this.state.pizzeriasData.map((item)=>{
                    return (
                        <h3 key={item.id} onClick={() =>this.showPizzeriaDetails(item)}>
                            {item.pizzeria_name}, {item.city}
                        </h3>
                    );
                })}
                {this.state.showComponent ? (<PizzaDetail pizzariaDetail={this.state.pizzeria}/>):null}
                <div>
                    <PizzaForm/>
                </div>
            </div>
        );
    }
}

export default PizzaList;
