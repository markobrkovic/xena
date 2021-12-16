import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';
import { useState } from 'react';
import userAuthAPI from '../../utils/userAuthAPI';

export default function LoginForm() {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className={styles.container}>
      <h1 className={styles.formHeader}>Login to XENA </h1>
      <form
        className={styles.formLogin}
        onSubmit={async (event) => {
          event.preventDefault();
          console.log({ username, password });
          if (username != null && password != null) {
            const auth = await userAuthAPI({ username, password });
            console.log(auth);
          } else {
            console.log('Nope');
          }
        }}
      >
        <span>username</span>
        <Input
          onChange={setUserName}
          className={styles.formLogin_input}
          placeholder="Enter username"
          color="text--contrast"
          size="medium"
          backgroundColor="background--contrast"
        />
        <span>password</span>
        <Input
          onChange={setPassword}
          className={styles.formLogin_input}
          placeholder="Enter password"
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
          text="Register"
          color="text"
          backgroundColor="quaternary-light"
          size="small"
        />
      </section>
    </div>
  );
}
