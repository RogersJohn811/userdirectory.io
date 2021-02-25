import React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios"
import Form from "./Form"

const styles = () =>
    createStyles({
        table: {
            minWidth: "85%",
        },
    });

    class BasicTable extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                users: [],
                search: ""
            }
    
        }
        componentDidMount() {
            axios.get("https://randomuser.me/api/?results=25&nat=us").then(res => {
                console.log(res.data)
                this.setState({ users: res.data.results })
            })
        }
    
        handleInputChange = event => {
            // Getting the value and name of the input which triggered the change
            let { name, value } = event.target;
    
            // Updating the input's state
            this.setState({
                [name]: value
            });
        };
    
        sortByName(){
            this.setState({
                users: this.state.users.sort((a, b) => a.name.last > b.name.last ? 1:-1)
            })
        }