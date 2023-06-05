const Register = {
  async render() {
    return `
      <div class="login">
        <div class="login__content">
          <div class="login__img">
            <img class="img-login" src="./img/img-login.svg" alt="Login Image">
          </div>

          <div class="login__forms">
            <form action="" class="login__create" id="login-up">
              <h1 class="login__title">Register</h1>

              <div class="login__box">
                <i class='fa fa-user login__icon'></i>
                <input type="text" placeholder="Username" class="login__input">
              </div>

              <div class="login__box">
                <i class='fa fa-at login__icon'></i>
                <input type="text" placeholder="Email" class="login__input">
              </div>

              <div class="login__box">
                <i class='fa fa-lock login__icon'></i>
                <input type="password" placeholder="Password" class="login__input">
              </div>

              <a href="#" class="login__button">Register</a>

              <div>
                <span class="login__account">Already have an Account?</span>
                <a href="#/login" class="login__signup" id="sign-in">Sign In</a>
              </div>

              <div class="login__social">
                <a href="#" class="login__social-icon"><i class='fab fa-facebook' ></i></a>
                <a href="#" class="login__social-icon"><i class='fab fa-instagram' ></i></a>
                <a href="#" class="login__social-icon"><i class='fab fa-google' ></i></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },
};

export default Register;
