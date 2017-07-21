import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom'; //rendering agent for a browser vs. a mobile app, etc.
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

    this.getApp = this.getApp.bind(this); //binds App to the constructor
  }

  componentDidUpdate(){ //lifecyscle hook
    console.log('::::STATE-CHANGE::::', this.state);
  }

  //sending chinldren data to parent
  getApp(){
    //retuns an object with state properties
    return{
      //returns current state
      state: this.state,
      //immutable overwrite proeprites of constructor state -always updates the App state
      setState: this.setState.bind(this),
    };
  }

  render(){
    return(
      <main className='app'>
        <div>
          <NoteItem app={this.getApp()}
          />
          <NoteList notes={this.state.notes} /> //passes NoteList props into the App render
          <div className="inputBox"> </div>
        </div>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
