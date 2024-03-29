"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

type Props = {
  text: string;
};

const SignInButton = ({ text }: Props) => {
  return (
    <Button
      onClick={() => {
        signIn("google").catch((error: unknown) => console.error(error));
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
