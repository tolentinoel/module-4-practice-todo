import React from 'react';

class Category extends React.Component {

    render(){
        return(
            <button onClick={this.props.handleClick} value={this.props.buttonName} className={this.props.class}>{this.props.buttonName}</button>
        )
    }

}
export default Category;