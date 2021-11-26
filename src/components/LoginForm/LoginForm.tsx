import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';

// type LoginFormProps = {
//   placeholder: string;
//   color: string;
//   size: string;
//   backgroundColor: string;
// };

export default function LoginForm() {
  return (
    <div className={styles.formContainer}>
      <section className={styles['form--login']}>
        <span>username</span>
        <Input
          placeholder="Enter username"
          color="text--contrast"
          size="medium"
          backgroundColor="background--contrast"
        />
        <span>password</span>
        <Input
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
      </section>
      <section className={styles['form--register']}>
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
