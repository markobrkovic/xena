import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.formHeader}>Login to XENA </h1>
      <section className={styles.formLogin}>
        <span>username</span>
        <Input
          placeholder="Enter username"
          color="text--contrast"
          size="small"
          backgroundColor="background--contrast"
        />
        <span>password</span>
        <Input
          placeholder="Enter password"
          color="text--contrast"
          size="small"
          backgroundColor="background--contrast"
        />
        <Button
          text="Login"
          color="text"
          backgroundColor="quaternary-light"
          size="small"
        />
      </section>
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
