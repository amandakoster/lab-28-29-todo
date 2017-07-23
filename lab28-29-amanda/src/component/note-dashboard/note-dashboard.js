import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../note-form';
import NoteList from '../note-list';

let renderIf = (test, component) => test ? component : undefined;

class NoteDashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showErrors: true,
    };

    this.noteCreate=this.noteCreate.bind(this);
    this.noteRemove=this.noteRemove.bind(this);
    this.noteUpdate=this.noteUpdate.bind(this);
  }

  noteCreate(note){
    note.id = uuid();
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.concat([note]),
    }));
  }

  noteRemove(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !==note.id;
      }),
    }));
  }


  noteUpdate(note){
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item;
      }),
    }));
  }

  render(){
    let {app} = this.props;
    console.log(this, 'this.props');
    return(
      <li>
        <div className='note-item'>
          <NoteForm
            className='button-add'
            submitTitle='add'
            handleSubmit={this.noteCreate}
          />

          <NoteList
            noteRemove={this.noteRemove}
            noteUpdate={this.noteUpdate}
            notes={app.state.notes} />
        </div>
      </li>
    );
  }
}

export default NoteDashboard;
