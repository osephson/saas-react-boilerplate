'use strict';

class Signup {
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required|min:6'
    };
  }

  get data () {
    const requestBody = this.ctx.request.all();
    requestBody.email = (requestBody.email) ? requestBody.email.trim().toLowerCase() : null;
    requestBody.name = (requestBody.name) ? requestBody.name.trim().toLowerCase() : null;
    return requestBody;
  }

  get sanitizationRules () {
    return {
      // it has prblm with dots in email
      // me.amitkhare@gmail.com => meamitkhare@gmail.com
      // email: 'normalize_email'
    };
  }

  get messages () {
    return {
      'email.required': 'Enter email address to be used for login',
      'email.email': 'Email address is not valid',
      'email.unique': 'There\'s already an account with this email address',
      'password.required': 'Choose password for your account',
      'password.min': 'Password needs to be at least 6 characters long.'
    };
  }

  async fails (errors) {
    return this.ctx.response.status(400).json({
      message: 'Shoot! Something is wrong with your request.',
      errors
    });
  }
}

module.exports = Signup;
