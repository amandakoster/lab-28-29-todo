// import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import NoteDashboard from './component/note-dashboard';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate(){
    console.log('::::STATE::::', this.state);
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return(
      <main className='app'>
        <BrowserRouter>

          <div>
            <Route exact path='/'
              component={() => <NoteDashboard app={this.getApp()}
              />
              }
            />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App title='React Note Form'/>, document.getElementById('root'));
