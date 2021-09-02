import Alert from './alert';
import '../style/loginStyle.css';

export default function LoginForm(){
    return(
        <main className="Login__main">
            <h1 className="Login__header">Log ind</h1>
            
            <form className="Login__form" >
                <div className="Login__inputGroup">
                    {/* <label htmlFor="email"> Email </label> */}
                    <input type="email"  id="email" className="Login__mail" placeholder="F.eks. ole@mail.dk"/>
                </div>

                <div className="Login__inputGroup">
                    {/* <label htmlFor="password"> Password </label> */}
                    <input type="password" id="password"  className="Login__pass" placeholder="meget hemmeligt"  />

                </div>

                <div className="Login__inputGroup">
                    <input type="checkbox" id="remember" className="Login__rememberCheck"/>
                    <label htmlFor="remember" className="Login__remember"> Husk mig </label>
                </div>

                <div className="Login__inputGroup">
                    <button type="submit" className="Login__log" onClick={Alert}> Log Ind </button>
                </div>

                <div className="Login__inputGroup">
                <p className="Login__copy">© 2021</p>
                </div>
            </form>
        </main>
    )

}
