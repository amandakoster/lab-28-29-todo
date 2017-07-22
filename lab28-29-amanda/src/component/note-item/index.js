import React from 'react';
import uuid from 'uuid';
import NoteForm from '../note-form';
import NoteList from '../note-list';

let renderIf = (t, c) => t ? c : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    console.log('testing', this.props);
    this.noteCreate=this.noteCreate.bind(this);
    this.noteRemove=this.noteRemove.bind(this);
    this.noteUpdate=this.noteUpdate.bind(this);
  }
  noteCreate(note){
    note.id = uuid();
    this.props.app.setState(state =>
      ({
        notes: [...state.notes, note],
      }));
  }

  noteRemove(note){
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
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
      <li
        className='note-item'>
        onDoubleClick={() => this.props.app.setState({editing: !state.editing}))}>

          <NoteForm
            submitTitle='add note'
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

this.props.app.setState;
this.props.app.state.edidint;


export default NoteItem;
