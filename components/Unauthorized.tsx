import { signIn } from "next-auth/client";
import styles from "./Unauthorized.module.css";

export default function Unauthorized() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>
          Hey There, looks like you reached an area you currently dont have
          access to.
        </p>

        <p className={styles.text}>Please sign in here.</p>

        <p>
          <button className="btn btn-secondary" onClick={() => signIn("okta")}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
