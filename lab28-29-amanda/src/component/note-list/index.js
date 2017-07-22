import React from 'react';
import NoteItem from '../note-item';
import NoteForm from '../note-form';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('we are here', this.props.notes);
  }
  render(){
    return(
      <div className='note-list'>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>

              <h1>{item.title}</h1>

              <button onClick={() => this.props.noteRemove(item)}>
              x
              </button>

              <NoteForm
                note={item}
                submitTitle='update note'
                handleSubmit={(note) => {
                  note.id=item.id;
                  this.props.noteUpdate(note);
                }} />

            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
