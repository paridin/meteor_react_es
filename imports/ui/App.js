import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

// Components
import SearchElastiSearch from './SearchElasticSearch'
import SimpsonsChapters from './SimpsonsChapters'

const App = (props) => console.log(props) ||
<Router>
    <section>
        <header className="header">
            <NavLink exact to='/'>Home</NavLink> |  <NavLink exact to='/search_es'>Search Episodes Using ES</NavLink>
        </header>
        <Switch>
            <Route exact path='/' component={SimpsonsChapters} />
            <Route exact path='/search_es' component={SearchElastiSearch} />
        </Switch>
    </section>
</Router>


export default App



