import React,{Component} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundaries from '../components/ErrorBoundaries';
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
                        <ErrorBoundaries>
                            <CardList robots = { filterRobots }/>
                        </ErrorBoundaries>
                    </Scroll>
                    
                </div>



        );}
    }
}



    export default App;