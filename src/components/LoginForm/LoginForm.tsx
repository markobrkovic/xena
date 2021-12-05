import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.formHeader}>Login to XENA </h1>
      <form
        className={styles.formLogin}
        onSubmit={(event) => {
          event.preventDefault();
          console.log('MRS');
        }}
      >
        <span>username</span>
        <Input
          className={styles.formLogin_input}
          placeholder="Enter username"
          color="text--contrast"
          size="medium"
          backgroundColor="background--contrast"
        />
        <span>password</span>
        <Input
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
