import React from 'react';
import {ref, onValue} from 'firebase/database';
import {Table} from "react-bootstrap";
import Startfirebase from '../firebaseConfig/index';
import { render } from '@testing-library/react';

const db= Startfirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state={
            tableData:[]
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'app');

        onValue(dbRef,(snapshot)=>{
            let records =[];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName,"data":data});
            });
            this.setState({tableData:records});
        });
    }

render (){
        return(
            <div className="container-fluid  text-center">
                <h1> Welcome To The Project Developed By DAT </h1>
            
            <Table className='container' bordered striped variant='dark' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Device</th>
                        <th>Describe Power Consumption (Watt)</th>
                        <th>Actual Power Consumption (Watt)</th>
                    </tr>
                </thead>
                <tbody>
                      {this.state.tableData.map((row,index)=>{
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{row.data.dev}</td>
                            <td>{row.data.dpc}</td>
                            <td>{row.data.apc.watt}</td>
                        </tr>
                        )
                  })}   
                 
                </tbody>
            </Table>
            </div>
        )
    }
}
export default RealtimeData;