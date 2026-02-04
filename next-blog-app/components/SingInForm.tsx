"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const SingInForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const formData = new FormData(event.currentTarget);
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });
      if (res && !res.error) {
        router.push("/profile");
      } else {
        setError("Неверный email или пароль");
      }
    } catch (error: any) {
      setError("Ошибка при входе");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export { SingInForm };
