import React from 'react';
import NoteForm from 'note-form';

let renderIf = (t, c) => t ? c : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };
  }
  render() {
    let{note} = this.state;
    return (

      <li
        className='note-item'
        onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>

        {renderIf(!this.state.editing,
          <div>
            <p> title: {note.title} </p>
            <button onClick={() => this.props.noteRemove(note)}>
    delete
            </button>
          </div>)}

        {renderIf(this.state.editing,
          <NoteForm
            note={note}
            submitTitle='update'
            handleSubmit={(data) => {
              data.id = note.id;
              this.props.noteUpdate(data);
            }}/> )}
      </li>

    );
  }
}

export default NoteItem;
