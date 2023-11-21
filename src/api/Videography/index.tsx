import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import {
  ISingleVideography,
  IVideography,
  PatchVideography,
  PostVideography,
} from "../../types/videography";

const postVideography = async (val: PostVideography) => {
  const { data } = await axiosInstance.post(routes.videography, val);
  return data;
};

const editVideography = async (val: PatchVideography) => {
  let editData = { ...val };
  delete editData?._id;
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.videography}/${val?._id ?? val?.id}`,
    editData
  );
  return data;
};

const deleteVideography = async (val: { id: string }) => {
  const { data } = await axiosInstance.delete(
    `${routes.videography}/${val?.id}`
  );
  return data;
};

const allVideography = async (
  page?: number,
  limit?: number,
  sort?: string
): Promise<IVideography> => {
  const { data } = await axiosInstance?.get(routes.videography, {
    params: {
      ...(page && { page, limit }),
      ...(sort?.length && { sort }),
    },
  });
  return data;
};

const singleVideography = async (id: string): Promise<ISingleVideography> => {
  const { data } = await axiosInstance?.get(`${routes.videography}/${id}`);
  return data;
};

export const useCreateVideography = () => {
  return useMutation({
    mutationFn: postVideography,
  });
};

export const useEditVideography = () => {
  return useMutation({
    mutationFn: editVideography,
  });
};

export const useDeleteVideography = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteVideography,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routes["videography"]] });
    },
  });
};

export const useVideography = (
  page?: number,
  limit?: number,
  sort?: string
) => {
  return useQuery({
    queryKey: [routes["videography"], page, limit, sort],
    queryFn: () => allVideography(page, limit, sort),
  });
};

export const useGetVideography = (VideographyId: string) => {
  return useQuery({
    queryKey: [`${routes["videography"]}/${VideographyId}`],
    queryFn: () => singleVideography(VideographyId),
    refetchOnWindowFocus: true,
  });
};
