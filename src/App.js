import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Category from './Category'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  renderCategories = () => {
    return CATEGORIES.map(option => {
      return <Category onClick={this.handleClick} buttonName={option}/>
    })
  }

  handleClick = (e) => {
    console.log(e.target)
  }
  
  render() {
    return (
      <div className="App">
        <button className="toggle off">Stretch features disabled</button>
        <h2>My tasks</h2>

        <div className="categories">
            <h5>Category filters</h5>
            {this.renderCategories()}
          </div>

        <div className="tasks">
          <h5>Tasks</h5>
          <div>
            {/* <div class="task">
              <div class="label">Food</div>
              <div class="text">Buy rice</div>
            </div> */}

          </div>
        </div>
      </div>
    );
  }
}


export default App;
