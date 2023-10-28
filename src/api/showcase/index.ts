import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import {
  IShowcase,
  ISingleShowcase,
  PatchShowcase,
  PostShowcase,
} from "@/types/showcase";

const postShowcase = async (val: PostShowcase) => {
  const { data } = await axiosInstance.post(routes.showcase, val);
  return data;
};

const editShowcase = async (val: PatchShowcase) => {
  let editData = { ...val };
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.showcase}/${val?.id}`,
    editData
  );
  return data;
};

const deleteShowcase = async (val: { id: string }) => {
  const { data } = await axiosInstance.delete(`${routes.showcase}/${val?.id}`);
  return data;
};

const allShowcase = async (): Promise<IShowcase> => {
  const { data } = await axiosInstance?.get(routes.showcase);
  return data;
};

const singleShowcase = async (id: string): Promise<ISingleShowcase> => {
  const { data } = await axiosInstance?.get(`${routes.showcase}/${id}`);
  return data;
};

export const useCreateShowcase = () => {
  return useMutation({
    mutationFn: postShowcase,
  });
};

export const useEditShowcase = () => {
  return useMutation({
    mutationFn: editShowcase,
  });
};

export const useDeleteShowcase = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteShowcase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routes["showcase"]] });
    },
  });
};

export const useShowcase = () => {
  return useQuery({ queryKey: [routes["showcase"]], queryFn: allShowcase });
};

export const useGetShowcase = (showcaseId: string) => {
  return useQuery({
    queryKey: [`${routes["showcase"]}/${showcaseId}`],
    queryFn: () => singleShowcase(showcaseId),
    refetchOnWindowFocus: true,
  });
};
