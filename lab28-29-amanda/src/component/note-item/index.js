import React from 'react';
import uuid from 'uuid/v1';
import NoteForm from '../note-form';
import NoteList from '../note-list';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.noteCreate=this.noteCreate.bind(this);
    this.noteRemove=this.noteRemove.bind(this);
  }

  noteCreate(note){
    note.id = uuid();
    this.props.app.setState( prevState => ({
      notes: [...prevState.notes, note],
    }));
  }
  //
  // noteUpdate(note){
  //   this.props.app.setState(prevState => ({
  //     notes: prevState.notes.map((item) => {
  //       return item.id !== note.id;
  //     }),
  //   }));
  // }

  noteRemove(note){
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }

  render(){
    let {app} = this.props;

    console.log('app', app);
    return(
      <div className='note-item'>
        <NoteForm handleSubmit={this.noteCreate}/>

        <NoteList
          noteRemove={this.noteRemove}
          notes={app.state.notes}
        />
      </div>
    );
  }
}

export default NoteItem;
