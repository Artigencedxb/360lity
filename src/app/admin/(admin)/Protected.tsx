import { useAuth } from "@/store/use-auth";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect } from "react";

const Protected: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.replace("/admin");
    }
  }, [loggedIn, router]);

  return <Fragment>{children}</Fragment>;
};

export default Protected;
