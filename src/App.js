import React,{Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import './App.css';


class  App extends Component{
    constructor(){
        super()
        this.state={
            robots : [],
            searchfield : ''
        }
    }
    onSeachChange=(event)=>{
        this.setState({ searchfield : event.target.value })
        
        }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                return response.json();
            })
            .then(users=>{
                this.setState({robots: users})
            });
    }
    


    render(){
            const filterRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())});
            if(this.state.robots.length===0){
                return <h1>Loading....</h1>
            }
            else{
                return(
                <div className='tc'>
                    <h1 className='f1'>RoboFrineds</h1>
                    <SearchBox searchChange={this.onSeachChange}/>
                    <Scroll>
                        <CardList robots = { filterRobots }/>
                    </Scroll>
                    
                </div>



        );}
    }
}



    export default App;