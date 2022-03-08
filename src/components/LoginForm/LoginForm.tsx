import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';
import { useEffect, useState } from 'react';
import userAuthAPI from '../../utils/userAuthAPI';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const setCookieFunction = (value: string) => {
    localStorage.setItem('username', value);
    setTimeout(() => {
      navigate('/welcome');
    }, 200);
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.formHeader}>Login to XENA </h1>
        <form
          className={styles.formLogin}
          onSubmit={async (event) => {
            event.preventDefault();
            console.log({ username, password });
            if (username != null && password != null) {
              const auth = await userAuthAPI({ username, password });
              console.log('Hello ' + auth.username);
              setCookieFunction(auth.username);
            } else {
              console.log('Nope');
            }
          }}
        >
          <span>username</span>
          <Input
            onChange={setUserName}
            className={styles.formLogin_input}
            placeholder=""
            color="text--contrast"
            size="medium"
            backgroundColor="background--contrast"
          />
          <span>password</span>
          <Input
            onChange={setPassword}
            type="password"
            className={styles.formLogin_input}
            placeholder=""
            color="text--contrast"
            size="medium"
            backgroundColor="background--contrast"
          />
          <Button
            text="Login"
            color="text"
            backgroundColor="quaternary-light"
            size="small"
          />
        </form>
        <section className={styles.formRegister}>
          <span>Don&apos;t have an account?</span>

          <Button
            onClick={() => navigate(`/register`)}
            text="Register"
            color="text"
            backgroundColor="quaternary-light"
            size="small"
          />
        </section>
      </div>
    </div>
  );
}
