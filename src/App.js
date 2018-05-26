import React, { Component } from 'react';
//import logo from ‘./logo.svg’;
import './App.css';
import web3 from './web3';
import ipfs from './ipfs';
import storehash from './storehash';
import {Table, Grid, Button, Form } from 'react-bootstrap';
class App extends Component {
 
    state = {
      ipfsHash:null,
      buffer:'',  
    };
captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };
 convertToBuffer = async(reader) => {
        const buffer = await Buffer.from(reader.result);
        this.setState({buffer});
    };
onSubmit = async (event) => {
      event.preventDefault();
      const accounts = await web3.eth.accounts;
      console.log('Sending from Metamask account: ' + accounts[0]);
      const ethAddress= await accounts;
      this.setState({ethAddress});
    console.log(this.state.buffer);
          await ipfs.add(this.state.buffer,(err, ipfsHash) => {
        console.log(ipfsHash);
        this.setState({ ipfsHash:ipfsHash[0].hash });
        alert("done");
        console.log("result");
      }) 
    }; 
render() {
            return (
        <div className="App">
          <header className="App-header">
            <h1> Ethereum and IPFS with Create React App</h1>
          </header>
            <hr />
<Grid>
          <h3> Choose file to send to IPFS </h3>
          <Form onSubmit={this.onSubmit}>
            <input 
              type = "file"
              onChange = {this.captureFile}
            />
             <Button 
             bsStyle="primary" 
             type="submit"> 
             Send it 
             </Button>
          </Form>
<hr/>
 
        </Grid>
     </div>
      );
    } //render
} //App
export default App;