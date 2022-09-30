import React from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import {setSearchField, requestRobots} from "../actions";
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToPorps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobot: () => dispatch(requestRobots())
    }
}

class App extends React.Component {
    componentDidMount () {
        this.props.onRequestRobot()
    }


    render() {
        const {robots, searchField, onSearchChange, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
        return isPending ? 
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