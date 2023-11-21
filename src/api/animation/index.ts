import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import {
  ISingleAnimation,
  IAnimation,
  PatchAnimation,
  PostAnimation,
} from "../../types/animation";

const postAnimation = async (val: PostAnimation) => {
  const { data } = await axiosInstance.post(routes.animation, val);
  return data;
};

const editAnimation = async (val: PatchAnimation) => {
  let editData = { ...val };
  delete editData?._id;
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.animation}/${val?._id ?? val?.id}`,
    editData
  );
  return data;
};

const deleteAnimation = async (val: { id: string }) => {
  const { data } = await axiosInstance.delete(`${routes.animation}/${val?.id}`);
  return data;
};

const allAnimation = async (
  page?: number,
  limit?: number,
  sort?: string
): Promise<IAnimation> => {
  const { data } = await axiosInstance?.get(routes.animation, {
    params: {
      ...(page && { page, limit }),
      ...(sort?.length && { sort }),
    },
  });
  return data;
};

const singleAnimation = async (id: string): Promise<ISingleAnimation> => {
  const { data } = await axiosInstance?.get(`${routes.animation}/${id}`);
  return data;
};

export const useCreateAnimation = () => {
  return useMutation({
    mutationFn: postAnimation,
  });
};

export const useEditAnimation = () => {
  return useMutation({
    mutationFn: editAnimation,
  });
};

export const useDeleteAnimation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAnimation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routes["animation"]] });
    },
  });
};

export const useAnimation = (page?: number, limit?: number, sort?: string) => {
  return useQuery({
    queryKey: [routes["animation"], page, limit, sort],
    queryFn: () => allAnimation(page, limit, sort),
  });
};

export const useGetAnimation = (AnimationId: string) => {
  return useQuery({
    queryKey: [`${routes["animation"]}/${AnimationId}`],
    queryFn: () => singleAnimation(AnimationId),
    refetchOnWindowFocus: true,
  });
};
