const Login = {
  async render() {
    return `
      <div class="login">
        <div class="login-content">
          <div class="login-img">
            <img src="./img/img-login.svg" alt="Login Image">
          </div>

          <div class="login-forms">
            <form action="" class="login-register" id="login-in">
              <h1 class="login-title">Sign In</h1>

              <div class="login-box">
                <i class='fa fa-user login-icon'></i>
                <input type="text" placeholder="Username" class="login-input" required>
              </div>

              <div class="login-box">
                <i class='fa fa-lock login-icon'></i>
                <input type="password" placeholder="Password" class="login-input" required>
              </div>

              <a href="#/login" class="login-forgot">Forgot password?</a>
              <a href="#/explore" class="login-button">Sign In</a>

              <div>
                <span class="login-account">Don't have an Account?</span>
                <a href="#/register" class="login-sign-in" id="sign-up">Register</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },
};

export default Login;
