import React from 'react';
import './App.css';

class Todolist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo_content:'',
      data:[],
      showChecked:false,
      listItems:false
   } }

    handleTodo =(event)=>{
     this.setState( {todo_content:event.target.value})
    }

    onSumbitTodo = (event) => {
      event.preventDefault()
          this.setState({
           data:[ ...this.state.data, {todo_content:this.state.todo_content}], showChecked:true,listItems:true})
        }

        onCheck = () =>{
          this.setState({showChecked:false})
        }

    render(){
      return(
        <div>
        <h1>TODO LIST</h1>
        <h2>Things to be done</h2>
        <div><input type='text' onChange={(event)=> {this.handleTodo(event,"todo_content")}}/>
       
          <button
        type='submit'
        onClick={this.onSumbitTodo}
        >SUMBIT   TODO   ITEM</button>
        </div>
           
             <div>
               {this.state.listItems ?

                 <div>
                   <h2>To-do LIST:</h2>
                   <h3>TICK ON ITEMS TO CLOSE THE ITEM</h3>
                       {this.state.data.map((item)=>{
                           return (<div key={item}>
                          
                             <div>
                             {this.state.showChecked ?
                             <div><input type="checkbox"  onChange={this.onCheck}/>{item.todo_content}</div>:null}
                             </div>
                           </div>);
                         
                       })}
                 </div>:null}
                 </div>
               </div>
           
      )
    } 
}

export default Todolist;
