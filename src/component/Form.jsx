import React, { Component } from "react";
import { connect } from "react-redux";
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      phoneNumber: "",
    };
  }
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (nextProps && nextProps.editedStudent) {
      this.setState({
        ...nextProps.editedStudent
      })
    } else {
      this.setState ({
        id: "",
        name: "",
        email: "",
        phoneNumber: "",  
      })
    }
  }
  
  // static getDerivedStateFromProps(nextProps, currentState) {
  //   if (currentState !== nextProps.editedStudent) {
  //     return {
  //        ...nextProps.editedStudent
  //     }
  //   }
  // }// cach nay lam ko dc
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
   
    this.props.onSubmit(this.state);

  };

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-xl-6 col-sm-12 form-left">
              <div className="form-group">
                <label>Student ID</label>
                <input
                  onChange={this.handleOnChange}
                  type="text"
                  name="id"
                  className="form-control"
                  value={this.state.id}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  onChange={this.handleOnChange}
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  value={this.state.phoneNumber}
                />
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 form-right">
              <div className="form-group">
                <label>Student Name</label>
                <input
                  onChange={this.handleOnChange}
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  onChange={this.handleOnChange}
                  type="text"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                className="btn btn-success ml-3"
                type="submit"
                value={"Add new student"}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    editedStudent: state.studentReducer.editedStudent,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (student) => {
      const action = {
        type: "SUBMIT_STUDENT",
        payload: student,
      };
      dispatch(action);
    },

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
