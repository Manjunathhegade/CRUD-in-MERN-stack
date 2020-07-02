import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    Redirect
} from "react-router-dom";


class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee:[],
            editEmp:{isClicked:false,id:null}
            
        };
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {

        axios.get('http://localhost:4000/employee')
        .then(user =>{this.setState({ employee: user.data });})
        
            .catch(err => console.log(err));
             console.log(this.state.employee);
            
    }

    onDelete(empId){
        axios.delete(`http://localhost:4000/employee/${empId}`)
        .then(res=>this.componentDidMount())
        .catch(err => console.log(err));
    }
    onEdit(Id){
        this.setState({editEmp : {isClicked:true,id:Id} })
    }

    render() {
      if(this.state.editEmp.isClicked){
          return <Redirect to={`/editEmployee/${this.state.editEmp.id}`} />
      }
      else{
        return (
            <TableContainer component={Paper} style={{ margin: 20 }}>
                <h2 style={{ marginLeft: 500 }}>Employee List</h2>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: 20 }}><strong>Full Name</strong></TableCell>
                            <TableCell style={{ fontSize: 20 }}><strong>User Name</strong></TableCell>
                            <TableCell style={{ fontSize: 20 }}><b>Email</b></TableCell>
                            <TableCell style={{ fontSize: 20 }}><b>Phone</b></TableCell>
                            <TableCell style={{ fontSize: 20 }}><b>Designation</b></TableCell>
                            <TableCell style={{ fontSize: 20 }}><b>Update</b></TableCell>
                            <TableCell style={{ fontSize: 20 }}><b>Delete</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.employee.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                    {row.fullname}
                                </TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.mobile}</TableCell>
                                <TableCell>{row.designation}</TableCell>
                                <TableCell><button onClick={()=>this.onEdit(row._id)} style={{width:70,backgroundColor:'#9ccc2d',height:30}}>Edit</button></TableCell>
                                <TableCell><button onClick={()=>this.onDelete(row._id)} style={{width:70,backgroundColor:'red',height:30}}>Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
}
export default EmployeeList;