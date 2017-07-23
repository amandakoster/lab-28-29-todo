// import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import NoteForm from './component/note-form';
import NoteItem from './component/note-item';
import NoteList from './component/note-list';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate(){
    console.log('::::STATE::::', this.state);
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return(
      <main className='app'>
        <div>
          <NoteItem app={this.getApp()} />
        </div>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
