import { GoogleButton } from "@/components/GoogleButton";
import { SingInForm } from "@/components/SingInForm";
import { Suspense } from "react";

export default async function Signin() {
  return (
    <section className="stack">
      <h1>SignIn</h1>
      <Suspense fallback={<button disabled>Loading...</button>}>
        <GoogleButton />
      </Suspense>
      <h2>or</h2>
      <SingInForm />
    </section>
  );
}
