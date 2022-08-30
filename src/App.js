import React from "react"
//import logo from "./logo.svg"
import "./App.css"

import Layout from "./components/layout/Layout";
import About from "./components/templates/About";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

/*
class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

*/

const App = () => {

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}


export default App
