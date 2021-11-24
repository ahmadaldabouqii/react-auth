import React from 'react';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = { name: '', email: '', password: '', error: 'too low!' };

  adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  emailChecked = false;
  passwordChecked = false;

  Login = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });

    if (name === 'email' && value === this.adminUser.email) {
      this.emailChecked = true;
    }

    if (name === 'password' && value === this.adminUser.password) {
      this.passwordChecked = true;
    }

    if (this.passwordChecked && this.emailChecked) {
      this.passwordChecked = false;
      this.emailChecked = false;
      console.log('Admin!!');
    }
  };

  Logout = () => {
    console.log('Logout!');
  };

  render() {
    return (
      <>
        {this.passwordChecked && this.emailChecked ? (
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
