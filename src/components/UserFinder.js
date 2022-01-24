import {Fragment, useState, useEffect, Component} from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UserContext from "../store/user-context";

class UserFinder extends Component {
    static contextType = UserContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    };

    componentDidMount() {
        // Only runs ones
        this.setState({filteredUsers: this.context.users});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))});
        }
    };

    searchChangeHandler(event) {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        return (
            <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                <Users users={this.state.filteredUsers} />
            </div>
        );
    }
}

export default UserFinder;