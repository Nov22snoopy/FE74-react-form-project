import React, { Component } from "react";
import Form from "./Form";
import Nav from "./Nav";
import StudentList from "./StudentList";

export class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="mt-5 ">
          <h2 className="bg-dark text-white">Student Information</h2>

          <Form />
        </div>
        <div className="mt-3">
          <h2 className="bg-dark text-white">Student List:</h2>
          <StudentList/>
        </div>
      </div>
    );
  }
}

export default Home;
