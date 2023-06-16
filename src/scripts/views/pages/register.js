const Register = {
  async render() {
    return `
      <div class="login">
        <div class="login-content">
          <div class="login-img">
            <img class="img-login" src="./img/img-login.svg" alt="Login Image">
          </div>

          <div class="login-forms">
            <form action="" class="login-create" id="login-up">
              <h1 class="login-title">Register</h1>

              <div class="login-box">
                <i class='fa fa-user login-icon'></i>
                <input type="text" placeholder="Username" class="login-input" required>
              </div>

              <div class="login-box">
                <i class='fa fa-at login-icon'></i>
                <input type="text" placeholder="Email" class="login-input" required>
              </div>

              <div class="login-box">
                <i class='fa fa-lock login-icon'></i>
                <input type="password" placeholder="Password" class="login-input" required>
              </div>

              <a href="#/explore" class="login-button">Register</a>

              <div>
                <span class="login-account">Already have an Account?</span>
                <a href="#/login" class="login-sign-up" id="sign-in">Sign In</a>
              </div>

              <div class="login-social-media">
                <a href="#/register" class="login-social-media-icon"><i class='fab fa-facebook' ></i></a>
                <a href="#/register" class="login-social-media-icon"><i class='fab fa-instagram' ></i></a>
                <a href="#/register" class="login-social-media-icon"><i class='fab fa-google' ></i></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },
};

export default Register;
