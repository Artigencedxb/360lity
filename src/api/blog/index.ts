import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import {
  Blog,
  IBlog,
  IBlogs,
  ISingleBlog,
  PatchBlog,
  PostBlog,
} from "@/types/blog";

const postBlog = async (val: PostBlog) => {
  const { data } = await axiosInstance.post(routes.blog, val);
  return data;
};

const editBlog = async (val: PatchBlog) => {
  let editData = { ...val };
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.blog}/${val?.id}`,
    editData
  );
  return data;
};

const deleteBlog = async (val: { id: string }) => {
  const { data } = await axiosInstance.delete(`${routes.blog}/${val?.id}`);
  return data;
};

const allBlog = async (): Promise<IBlogs> => {
  const { data } = await axiosInstance?.get(routes.blog);
  return data;
};

const singleBlog = async (id: string): Promise<ISingleBlog> => {
  const { data } = await axiosInstance?.get(`${routes.blog}/${id}`);
  return data;
};

export const useCreateBlog = () => {
  return useMutation({
    mutationFn: postBlog,
  });
};

export const useEditBlog = () => {
  return useMutation({
    mutationFn: editBlog,
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routes["blog"]] });
    },
  });
};

export const useBlog = () => {
  return useQuery({ queryKey: [routes["blog"]], queryFn: allBlog });
};

export const useGetBlog = (blogId: string) => {
  return useQuery({
    queryKey: [`${routes["blog"]}/${blogId}`],
    queryFn: () => singleBlog(blogId),
    refetchOnWindowFocus: true,
  });
};
