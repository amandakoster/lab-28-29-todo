import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);
    let title = props.note ? props.note.title : '';
    this.state = {title};
    this.handelChange=this.handelChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  handleChange(e) {this.setState({ [e.target.name]: e.target.value });}

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <div className='note-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            name='content'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
