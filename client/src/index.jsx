import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.search = this.search.bind(this);
    this.clear = this.clear.bind(this);    
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    $.ajax({
      url: 'http://localhost:1128/repos/',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log('GET data', data);

        this.setState({
          repos: data
        });
        console.log('GET success');
      },
      error: function (err) {
        console.log(err);
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: 'http://localhost:1128/repos/import',
      method: 'POST',
      data: {username: term},
      dataType: 'json',
      success: (data) => {
        console.log('data', data);
        this.setState({
          repos: data
        });
        console.log('POST success');
      },
      error: function (err) {
        console.log(err);
      }
    })

    this.fetch();
  }

  clear () {
    $.ajax({
      url: 'http://localhost:1128/clear',
      method: 'POST',
      success: (data) => {
        console.log('data', data);
        this.setState({
          repos: []
        });
        console.log('CLEAR POST success');
      },
      error: function (err) {
        console.log(err);
      }
    })    
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search} onClear={this.clear}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));