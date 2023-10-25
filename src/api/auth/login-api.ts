import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import { useAuth } from "@/store/use-auth";

interface loginType {
  email: string;
  password: string;
}

const PostLogin = async (val: loginType) => {
  const { data } = await axiosInstance.post(routes.login, val);
  return data;
};

export const useLogin = () => {
  const { setAuth } = useAuth();
  const router = useRouter();
  return useMutation({
    mutationFn: PostLogin,
    onSuccess: (res) => {
      // if (res.data.data.user.role === "user") {
      //   return;
      // }
      const token = res.token;
      setAuth(token);
      router.push("/admin/showcase");
    },
  });
};
