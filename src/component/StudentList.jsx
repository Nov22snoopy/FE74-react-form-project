import React, { Component } from "react";
import { connect } from "react-redux";
import StudentUnit from "./StudentUnit";
export class StudentList extends Component {
  displayStudent = () => {
    let { studentList, keyword } = this.props;
    studentList = studentList.filter((student)=>{
      return student.name.toLowerCase().indexOf(keyword.toLowerCase()) !==-1;
    })
    return studentList.map((student) => {
      return (
        <StudentUnit key={student.id} student={student} />
      );
    });
  };
  handleOnChange=(event)=>{
    this.props.onSearch(event.target.value)    
  }
  render() {
    return (
      <div className="mt-3">
        <div className="search-item text-right mr-5">
          Search Student By Name: <input type="text"  placeholder="search by name..." onChange={this.handleOnChange} />
        </div>
        <table className="table  text-center mt-3">
          <thead className="bg-dark text-white">
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.displayStudent()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    studentList: state.studentReducer.studentList,
    keyword: state.studentReducer.keyword
  };
};
const mapDispatchToProp=(dispatch)=>{
  return {
    onSearch:(key)=>{
      const action={
        type: "SEARCH_USER",
        payload:key, 
      };
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(StudentList);
