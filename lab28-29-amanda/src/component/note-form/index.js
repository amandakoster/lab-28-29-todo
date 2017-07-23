import './_note-form.scss';
import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };

    this.handelChange=this.handelChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.focus = this.focus.bind(this);
  }

  focus(){
    this.textInput.focus();
  }

  handelChange(e){
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (

      <form
        className='note-form'
        onSubmit={this.handleSubmit}>

        <input
          name='note'
          type='text'
          value={this.state.title}
          onChange={this.handelChange}
          ref={(input) => { this.nameInput = input; }}

        />

        <input
          onChange={this.focus}
        />

        <button type='submit'> {this.props.submitTitle} </button>
      </form>
    );
  }
}

export default NoteForm;
