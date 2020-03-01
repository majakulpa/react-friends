import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from "./../actions";

//const PageLazy = React.lazy(() => import("../components/CardList"));

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  // state = {
  //   robots: []
  // };

  componentDidMount() {
    //console.log(this.props.store.getState);
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => this.setState({ robots: users }));
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const style = {
      textAlign: "center"
    };

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <Header />
    ) : (
      <div style={style}>
        <h1>My Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );

    // return (
    //   <div style={style}>
    //     <Header />
    //     <SearchBox searchChange={onSearchChange} />
    //     <Scroll>
    //       <ErrorBoundry>
    //         <Suspense fallback={<h1>Loading...</h1>}>
    //           <PageLazy robots={filteredRobots} />
    //         </Suspense>
    //       </ErrorBoundry>
    //     </Scroll>
    //   </div>
    // );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
