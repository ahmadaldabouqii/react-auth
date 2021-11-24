import React from 'react';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = { name: '', email: '', password: '', error: 'too low!' };

  adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  Login = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  Logout = () => {
    console.log('Logout!');
  };

  render() {
    return (
      <>
        {this.state.email !== '' ? (
          <div className="welcome">
            <h2>
              Welcome, <span>{this.state.name}</span>
            </h2>
            <button>Logout</button>
          </div>
        ) : (
          <LoginForm
            Login={this.Login}
            name={this.state.name}
            password={this.state.password}
            email={this.state.email}
            error={this.state.error}
          />
        )}
      </>
    );
  }
}

export default App;
