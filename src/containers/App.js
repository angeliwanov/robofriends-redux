import React from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import {setSearchField} from "../actions";
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToPorps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }


    render() {
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
        return (!robots.length)? 
        <h1>Loading...</h1> : 
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <Searchbox SearchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
            
    } 
}

export default connect(mapStateToProps, mapDispatchToPorps)(App);