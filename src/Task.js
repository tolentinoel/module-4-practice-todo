import React from 'react';

class Category extends React.Component {

    render(){
        return(
            <div className="task">
                <div className="label">{this.props.task.category}</div>
                <div className="text">{this.props.task.text}</div>
            </div>
        )
    }

}
export default Category;


 
