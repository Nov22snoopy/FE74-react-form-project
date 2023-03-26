import React, { Component } from "react";
import { connect } from "react-redux";
export class StudentUnit extends Component {

  render() {
    const {student} = this.props
    return ( 
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.phoneNumber}</td>
      <td>
        <button className="btn btn-info" onClick={()=>{this.props.onEdit(student)}}>Edit</button>
        <button className="btn btn-danger" onClick={()=>{this.props.onDelete(student.id)}}>Delete</button>
      </td>
    </tr>

    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onDelete: (student) =>{
      const action = {
        type: "DELETE_STUDENT",
        payload: student
      };
      dispatch(action);
    },
    onEdit: (student) =>{
      const action = {
        type: "EDIT_STUDENT",
        payload: student
      };
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatchToProps) (StudentUnit);
