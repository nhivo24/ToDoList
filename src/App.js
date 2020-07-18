import React,{Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

import tick from './components/img/tick.svg';

class App extends Component {
  constructor(){
    super();
    this.state={
      newItem: '',
      TodoItems:
      [
        {title:'Đi xem phim', isComplete: true},
        { title:'Đi chơi'}
    ]
}
this.onKeyUp =this.onKeyUp.bind(this);
this.onChange=this.onChange.bind(this);
}

onItemClicked(item){
 
 return(event)=>{
   const isComplete =item.isComplete;
   const { TodoItems } = this.state;
   const index= TodoItems.indexOf(item);
   this.setState({
     TodoItems: [
     ...TodoItems.slice(0,index),
     {
       ...item,
       isComplete :! isComplete

     },
     ...TodoItems.slice(index +1)

     ]

   });
 };

}
onKeyUp(event){
    let text= event.target.value;
  if (event.keyCode ===13){


  if(!text){
    return;
  }
  text =text.trim();
  if(!text){
    return;
  }
  this.setState({
    newItem:'',
    TodoItems:[
    {
      title: text, isComplete:false 
    },
    ...this.state.TodoItems
    ]
  });
} 

}

onChange(event){
  this.setState({
     newItem: event.target.value
   });
}
 render(){
 const { TodoItems,newItem } =this.state;

  if(TodoItems.length){

  return (
    <div className="App">
    <div className="Header"> 
    <img src={tick} width={32}/>
    <input 
      type="text" 
      placeholder="Add new item"
      value={newItem} 
      onChange={this.onChange}
      onKeyUp={this.onKeyUp}/>

    </div>
       { TodoItems.length > 0 && TodoItems.map((item,index) => 
           <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />
            )
       }
       </div>
       );
    } else {
         return( 
         <div className="App">Nothing here.</div>
       );
     }
  }
}
export default App;
