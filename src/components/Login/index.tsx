"use client";
import Input from "@/UI/Input";
import Loader from "@/UI/Loader";
import { useLogin } from "@/api/auth/login-api";
import { Logo } from "@/assets";
import Header from "@/common/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z.object({
  email: z.string().min(1, "Please enter a email").email(),
  password: z.string().min(3, "Please enter a password").max(20),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const Login = () => {
  const { mutate, isPending } = useLogin();
  const router = useRouter();

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
      <div className="flex items-center mb-5">
        <button
          className="relative w-[25px] h-[25px] md:w-[37px] md:h-[37px]"
          onClick={() => router.back()}
        >
          <Image fill src={Logo} alt="" />
        </button>
        <h1 className="text-center ml-6">Admin</h1>
      </div>

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
          className="disabled:opacity-80 flex items-center justify-center gap-2 rounded-x w-full bg-[#0060E4] font-medium py-3 text-white"
        >
          {isPending && (
            <Loader className="!border-[3px] border-t-white w-4 h-4" />
          )}
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
