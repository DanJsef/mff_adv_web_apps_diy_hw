import "./App.css";

import {
  AppBar,
  Button,
  Link as LinkStyle,
  TextField,
  Chip,
} from "@mui/material";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrease() {
    if (this.state.counter > 0)
      this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<TextInp />} />
          <Route
            path="/increase"
            element={
              <Increase counter={this.state.counter} increase={this.increase} />
            }
          />
          <Route
            path="/decrease"
            element={
              <Decrease counter={this.state.counter} decrease={this.decrease} />
            }
          />
        </Routes>
      </div>
    );
  }
}

function Nav() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          padding: 1,
        }}
      >
        <nav>
          <LinkStyle
            underline="hover"
            color="inherit"
            component={Link}
            to="/"
            sx={{
              margin: 1,
            }}
          >
            text
          </LinkStyle>
          <LinkStyle
            underline="hover"
            color="inherit"
            component={Link}
            to="/increase"
            sx={{
              margin: 1,
            }}
          >
            increase
          </LinkStyle>
          <LinkStyle
            underline="hover"
            color="inherit"
            component={Link}
            to="/decrease "
            sx={{
              margin: 1,
            }}
          >
            decrease
          </LinkStyle>
        </nav>
      </AppBar>
    </>
  );
}

class TextInp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  clear() {
    this.setState({ text: "" });
  }

  render() {
    return (
      <>
        <form>
          <TextField
            name="text"
            label={this.state.text}
            type="text"
            variant="outlined"
            value={this.state.text}
            onChange={this.handleChange}
            sx={{ marginTop: 2, marginBottom: 1 }}
          />
        </form>
        <Button variant="contained" onClick={this.clear}>
          Clear
        </Button>
      </>
    );
  }
}

function Increase(props) {
  return (
    <>
      <Chip label={"Counter: " + props.counter} sx={{ margin: 1 }} />
      <br />
      <Button variant="contained" onClick={props.increase}>
        Increase
      </Button>
    </>
  );
}

function Decrease(props) {
  return (
    <>
      <Chip label={"Counter: " + props.counter} sx={{ margin: 1 }} />
      <br />
      <Button variant="contained" onClick={props.decrease}>
        Decrease
      </Button>
    </>
  );
}

export default App;
