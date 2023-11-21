import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import { ISinglePhotography, IPhotography, PatchPhotography, PostPhotography } from "../../types/photography";

const postPhotography = async (val: PostPhotography) => {
  const { data } = await axiosInstance.post(routes.photography, val);
  return data;
};

const editPhotography = async (val: PatchPhotography) => {
  let editData = { ...val };
  delete editData?._id;
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.photography}/${val?._id ?? val?.id}`,
    editData
  );
  return data;
};

const deletePhotography = async (val: { id: string }) => {
  const { data } = await axiosInstance.delete(`${routes.photography}/${val?.id}`);
  return data;
};

const allPhotography = async (
  page?: number,
  limit?: number,
  sort?: string
): Promise<IPhotography> => {
  const { data } = await axiosInstance?.get(routes.photography, {
    params: {
      ...(page && { page, limit }),
      ...(sort?.length && { sort }),
    },
  });
  return data;
};

const singlePhotography = async (id: string): Promise<ISinglePhotography> => {
  const { data } = await axiosInstance?.get(`${routes.photography}/${id}`);
  return data;
};

export const useCreatePhotography = () => {
  return useMutation({
    mutationFn: postPhotography,
  });
};

export const useEditPhotography = () => {
  return useMutation({
    mutationFn: editPhotography,
  });
};

export const useDeletePhotography = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePhotography,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routes["photography"]] });
    },
  });
};

export const usePhotography = (page?: number, limit?: number, sort?: string) => {
  return useQuery({
    queryKey: [routes["photography"], page, limit, sort],
    queryFn: () => allPhotography(page, limit, sort),
  });
};

export const useGetPhotography = (PhotographyId: string) => {
  return useQuery({
    queryKey: [`${routes["photography"]}/${PhotographyId}`],
    queryFn: () => singlePhotography(PhotographyId),
    refetchOnWindowFocus: true,
  });
};
