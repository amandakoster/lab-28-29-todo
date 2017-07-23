import React from 'react';
import NoteItem from '../note-item';
import NoteForm from '../note-form';
import './_note-list.scss';

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

              <h4>{item.title}</h4>

              <button
                className="delete-button"
                onClick={() => this.props.noteRemove(item)}>
                remove
              </button>

              <NoteForm
                className="note-form"
                note={item}
                submitTitle='update'
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
