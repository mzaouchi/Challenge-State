import React from 'react';
import './App.css';
 
class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks : [
        {descr : 'Take shower', isDone : false, id : Math.random() },
        {descr : 'Take yaakoub', isDone : true, id : Math.random() },
        {descr : 'Take amir', isDone : false, id : Math.random() },
      ],
      textP : ''
    }
    console.log(this.state.tasks)
  }

  handleAdd=()=>{ this.setState({tasks : [...this.state.tasks,{descr : this.state.textP,isDone : false, id : Math.random()}]}) ; console.log(this.state.tasks)}
  handelDelete =(a)=> this.setState({tasks : this.state.tasks.filter((el,i,t)=> el.id != a.id) })
  handleEdit=(a)=> this.setState({tasks : this.state.tasks.map((el,i,t)=> el.id == a.id ? {...el,isDone : !el.isDone} : el)}) 
  render(){
    return(
      <>
      <h1>Challange STATE</h1>
      {
        this.state.tasks.map((el,i,t)=> 
        <div key={el.id}>
          <h2 className={el.isDone && 'isYaakoub'}>{el.descr}</h2>
          {/* <h3>{el.isDone ? 'TRUE' : 'FALSE'}</h3> */}
          <button onClick={()=>this.handelDelete(el)}>Delete</button>
          <button onClick={()=>this.handleEdit(el)}>Done</button>
        </div>)
      }

      <input type='text' onChange={(e)=> this.setState({textP : e.target.value})}/>
    
      <button onClick={this.handleAdd}>Add</button>
      </>
    )
  }
}

export default App;
