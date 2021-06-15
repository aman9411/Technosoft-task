import React, { Component } from 'react';
import Header from './HeaderComponent';
import ToDo from './TodoComponent';
import Paging from './PagingComponent';
import Footer from './FooterComponent';
import { Switch, Redirect, Route } from 'react-router-dom';


class Main extends Component {

    render () {
        return (
            <div className="bg-dark">
                <Header />
                <Switch>
                    <Route path="/home" component={() => <ToDo />} />
                    <Route exact path="/paging" component={() => <Paging />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;