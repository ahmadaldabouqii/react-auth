import React from 'react';
import './LoginForm.css';

function LoginForm(props) {
  const users = [];
  const submitHandler = e => {
    e.preventDefault();

    if (!props.name || !props.email || !props.password) return;

    const user_data = {
      name: props.name,
      email: props.emaile,
      password: props.password,
    };

    users.push(user_data);

    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      let data = JSON.parse(localStorage.getItem('users'));
      data.push(user_data);
      localStorage.setItem('users', JSON.stringify(data));
    }
  };

  const showError = type => {
    if (type.length > 0 && type.length < 7) {
      return props.error;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                id="name"
                onChange={props.Login}
                value={props.name}
              />
              <span className="error">{showError(props.name)}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Email:</label>
            </td>
            <td>
              <input
                type="email"
                name="email"
                onChange={props.Login}
                value={props.email}
                id="email"
              />
              <span className="error">{showError(props.email)}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password:</label>
            </td>
            <td>
              <input
                type="password"
                name="password"
                id="password"
                onChange={props.Login}
                value={props.password}
              />
              <span className="error">{showError(props.password)}</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input type="submit" value="Login" />
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export default LoginForm;
