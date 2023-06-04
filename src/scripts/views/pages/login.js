const Login = {
  async render() {
    return `
    <div class="login">
    <div class="login__content">
        <div class="login__img">
            <img src="./img/img-login.svg" alt="Login Image">
        </div>

        <div class="login__forms">
            <form action="" class="login__registre" id="login-in">
                <h1 class="login__title">Sign In</h1>

                <div class="login__box">
                    <i class='fa fa-user login__icon'></i>
                    <input type="text" placeholder="Username" class="login__input">
                </div>

                <div class="login__box">
                    <i class='fa fa-lock login__icon'></i>
                    <input type="password" placeholder="Password" class="login__input">
                </div>

                <a href="#" class="login__forgot">Forgot password?</a>

                <a href="#" class="login__button">Sign In</a>

                <div>
                    <span class="login__account">Don't have an Account ?</span>
                    <a href="#/register" class="login__signin" id="sign-up">Sign Up</a>
                </div>
            </form>
        </div>
    </div>
</div>
    `;
  },
};

export default Login;
