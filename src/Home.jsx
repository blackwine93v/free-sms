import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {number: '', content: ''};
    this.setNumber = this.setNumber.bind(this);
    this.setContent = this.setContent.bind(this);
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.API_URL = "http://sms.vuongdq.tech/api/v1"; 
  }

  setNumber(e){
    if(e.target.value && e.target.value.match(/\b\d{1,}\b/)){
      this.setState({number: e.target.value});
    }
  }

  setContent(e){
    if(e.target.value && e.target.value.length){
      this.setState({content: e.target.value});
    }
  }

  onSubmit(){
    if(this.validate()){
      axios.post(this.API_URL, this.state)
      .then((res)=>{
          if(res && res.data && res.data.status === 'success'){
            alert('Your message have been sent');
          }
          else{
            alert("Your message haven't been sent");
          }
        })
      .catch((er)=>{
        console.error(er);
        })
    }
  }

  validate(){
    if(this.state.number.match(/\b^0\d{9,10}\b/) && 
        this.state.content != null)
      return true;
    return false;
  }


  render(){
    console.log(this.state);
    return <div>
      <input onChange={this.setNumber}  value={this.state.number} type="input" className="" placeholder="Phone number (0909xxxxxxx)"/>
      <textarea onChange={this.setContent} rows="4" cols="50" defaultValue="Delete this stuff, then type your message here">
      </textarea>
      <button onClick={this.onSubmit}>Send</button>
    </div>
  }
}

module.exports = Home