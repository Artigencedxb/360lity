import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";

const PostUpload = async (val: { image: any }) => {
  console.log(val, "val");

  const { data } = await axiosInstance.post(routes.upload, val, {
    headers: { "Content-type": "multipart/form-data" },
  });
  return data;
};

const PostDelete = async (val: { image: any; folder: string }) => {
  console.log(val, "val");

  const { data } = await axiosInstance.post(routes.delete, val, {
    headers: { "Content-type": "multipart/form-data" },
  });
  return data;
};

export const useUpload = () => {
  return useMutation({
    mutationFn: PostUpload,
  });
};

export const useDelete = () => {
  return useMutation({
    mutationFn: PostDelete,
  });
};
