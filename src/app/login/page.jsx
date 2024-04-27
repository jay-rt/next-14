import { handleGithubLogin } from "@/lib/actions";

const LoginPage = () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button type="submit">Login with GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;
