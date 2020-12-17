import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Category from './Category'
import Task from './Task'

class App extends React.Component {

  state = {
    tasks: [
      {text: 'Buy rice',
        category: 'Food'},
      {text: 'Save a tenner',
        category: 'Money'},
      {text: 'Build a todo app',
        category: 'Code'},
      {text: 'Build todo API',
        category: 'Code'},
      {text: 'Get an ISA',
        category: 'Money'},
      {text: 'Cook rice',
        category: 'Food'},
      {text: 'Tidy house',
        category: 'Misc'}
    ],
    categoryChosen: "All"
  }

  renderCategories = () => {
    return CATEGORIES.map((option) => {
      return <Category handleClick={this.handleClick} buttonName={option} value={option} class={this.state.categoryChosen}/>
    })
  }

  handleClick = (e) => {
    // let keyWord = this.theTasks(e.target.value)
    this.setState({
      categoryChosen: e.target.value
    })
  }

  renderTaskList = () => {
    let list
    if(this.state.categoryChosen === "All"){
      list = this.state.tasks
    } else {
      list =  this.state.tasks.filter(task => {
        return task.category === this.state.categoryChosen
      })
    }
    return list.map(todo => {
      return <Task task={todo}/>
    })
  }

  // theTasks = (term) => {
  //   return this.state.tasks.filter((taskObj)=> taskObj.category === term)
  // }

  render() {
  //  console.log(this.state.tasks.filter((taskObj)=> taskObj.category === "Food"))
    return (
      <div className="App">

        <button className="toggle off">Stretch features disabled</button>
        <h2>My tasks</h2>

        <div key='categories' className="categories">
          <h5>Category filters</h5>
          {this.renderCategories()}
        </div>

        <div key='tasks' className="tasks">
          <h5>Tasks</h5>
          <div>
            {this.renderTaskList()}
          </div>
        </div>

      </div>
    );
  }
}


export default App;
