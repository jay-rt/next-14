import { register } from "@/lib/actions";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.register}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type="text" name="username" placeholder="username" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input
            type="password"
            name="retypePassword"
            placeholder="retype password"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
