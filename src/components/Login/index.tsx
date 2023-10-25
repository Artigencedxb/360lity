"use client";
import Input from "@/UI/Input";
import { useLogin } from "@/api/auth/login-api";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z.object({
  email: z.string().min(1, "Please enter a email").email(),
  password: z.string().min(3, "Please enter a password").max(20),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const Login = () => {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <div className="bg-white rounded-[10px] p-10">
      <h1 className="text-center">Admin</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id={"email"}
          name="email"
          register={register}
          label="Email"
          error={errors?.email?.message}
        />
        <Input
          id={"password"}
          name="password"
          type="password"
          register={register}
          label="Password"
          error={errors?.password?.message}
        />
        <button
          disabled={isPending}
          className="disabled:opacity-80 rounded-[15px] w-full bg-[#0060E4] font-medium py-3 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
