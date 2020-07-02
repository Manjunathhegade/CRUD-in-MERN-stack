import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect, withRouter } from "react-router-dom";

class CreateEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            username: '',
            email: '',
            mobile: '',
            designation: ''

        };
        this.EmpId = this.props.match.params.id;
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.EmpId);
        if (this.EmpId) {
            axios.get(`http://localhost:4000/employee/${this.EmpId}`)
                .then(res => this.setState({ ...res.data }))
                .catch(err => console.log(err));
        }
    }

    handleChange(e) {
        const statename = e.target.name;
        this.setState({ [statename]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const newEmployee = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            mobile: this.state.mobile,
            designation: this.state.designation
        }
        if (this.EmpId) {
            axios.post(`http://localhost:4000/employee/editEmployee/${this.EmpId}`, newEmployee)
                .then(res => console.log(res.data));
            alert("Employee Updated Successfully");

            this.setState({
                fullname: '',
                username: '',
                email: '',
                mobile: '',
                designation: ''
            })
        } else {
            axios.post('http://localhost:4000/employee/createEmployee', newEmployee)
                .then(res => {
                    console.log(res.data);
                    alert("Employee added Successfully");
                    this.setState({
                        fullname: '',
                        username: '',
                        email: '',
                        mobile: '',
                        designation: ''
                    })
                }
                )
                .catch(err => {
                    console.log(err)
                    alert("Employee exists...!Try with new");
                });

        }

    }
    render() {

        return (

            <form style={{ marginTop: 80, marginLeft: 500 }}>
                <h2>{this.EmpId ? "Update" : "Create"} Employee</h2>
                <TextField
                    id="standard-name"
                    label="Full Name"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                />
                <br></br><br></br><TextField
                    id="standard-username"
                    label="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <br></br><br></br><TextField
                    id="standard-email"
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <br></br><br></br><TextField
                    id="standard-phone"
                    label="Mobile Number"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.handleChange}
                />
                <br></br><br></br><TextField
                    id="standard-designation"
                    label="Designation"
                    name="designation"
                    value={this.state.designation}
                    onChange={this.handleChange}
                />
                <br></br><br></br><Button variant="contained" color="primary" style={{ width: 200 }} onClick={this.onSubmit} >
                    {this.EmpId ? "UPDATE" : "SUBMIT"}
                </Button>
            </form>
        );
    }
}

export default withRouter(CreateEmployee)