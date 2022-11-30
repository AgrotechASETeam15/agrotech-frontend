import { useRouter } from "next/router";
import LogIn from "../components/login/LogIn";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <LogIn />
    </div>
  );
}
