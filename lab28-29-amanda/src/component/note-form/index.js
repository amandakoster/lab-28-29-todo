import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };

    this.handelChange=this.handelChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handelChange(e){
    this.setState({
      title: e.target.value, //[e.target.name]: e.target.value] ISSUE
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state); //note create ISSUE
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
        />

        <button type= 'submit'> add note </button>
        <button type= 'submit'> remove note </button>
      </form>
    );
  }
}


export default NoteForm;
