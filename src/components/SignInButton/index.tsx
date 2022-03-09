import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  console.log(session);

  return session ? (
    <button
      className={styles.signInButton}
      onClick={() => signOut()}
      type="button"
    >
      <FaGithub color="#04d361" /> {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      onClick={() => signIn("github")}
      type="button"
    >
      <FaGithub color="#eba417" /> Sign in With Github
    </button>
  );
};

export default SignInButton;
