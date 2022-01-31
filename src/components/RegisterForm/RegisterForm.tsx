import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './RegisterForm.module.css';
import { useState } from 'react';
import userRegisterAPI from '../../utils/userRegisterAPI';
import { useNavigate } from 'react-router-dom';
import Line from '../design-components/Line/Line';

export default function RegisterForm() {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.formHeader}>Register to XENA </h1>
        <Line width="viewport" highestOpacityPoint="middle" />
        <form
          className={styles.formLogin}
          onSubmit={async (event) => {
            event.preventDefault();
            console.log({ username, password });
            if (username != null && password != null) {
              const auth = await userRegisterAPI({ username, password });
              if (auth) {
                console.log('Registration Complete');
              } else {
                console.log('User already in use');
              }
            } else {
              console.log('Something went wrong');
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
            type="password"
            className={styles.formLogin_input}
            placeholder="Enter password"
            color="text--contrast"
            size="medium"
            backgroundColor="background--contrast"
          />
          <Button
            text="Register"
            color="text"
            backgroundColor="quaternary-light"
            size="small"
          />
        </form>
        <section className={styles.formRegister}>
          <span>Already have an account?</span>

          <Button
            onClick={() => navigate(`/`)}
            text="Login"
            color="text"
            backgroundColor="quaternary-light"
            size="small"
          />
        </section>
      </div>
    </div>
  );
}
