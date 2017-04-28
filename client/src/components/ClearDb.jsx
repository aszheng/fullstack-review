import React from 'react';

class ClearDb extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onChange.bind(this);
  }

  clear () {

  }

  render() {
    return (<div>
      Clear Database       
      <button onClick={this.clear}> Clear Database </button>
    </div>) 
  }
}

export default ClearDb;