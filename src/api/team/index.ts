import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import { ISingleTeam, ITeam, PatchTeam, PostTeam } from "../../types/team";

const postTeam = async (val: PostTeam) => {
  const { data } = await axiosInstance.post(routes.team, val);
  return data;
};

const editTeam = async (val: PatchTeam) => {
  let editData = { ...val };
  delete editData?._id;
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.team}/${val?._id ?? val?.id}`,
    editData
  );
  return data;
};

const deleteTeam = async (val: { id: string }) => {
  const { data } = await axiosInstance.delete(`${routes.team}/${val?.id}`);
  return data;
};

const allTeam = async (
  page?: number,
  limit?: number,
  sort?: string
): Promise<ITeam> => {
  const { data } = await axiosInstance?.get(routes.team, {
    params: {
      ...(page && { page, limit }),
      ...(sort?.length && { sort }),
    },
  });
  return data;
};

const singleTeam = async (id: string): Promise<ISingleTeam> => {
  const { data } = await axiosInstance?.get(`${routes.team}/${id}`);
  return data;
};

export const useCreateTeam = () => {
  return useMutation({
    mutationFn: postTeam,
  });
};

export const useEditTeam = () => {
  return useMutation({
    mutationFn: editTeam,
  });
};

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routes["team"]] });
    },
  });
};

export const useTeam = (page?: number, limit?: number, sort?: string) => {
  return useQuery({
    queryKey: [routes["team"], page, limit, sort],
    queryFn: () => allTeam(page, limit, sort),
  });
};

export const useGetTeam = (TeamId: string) => {
  return useQuery({
    queryKey: [`${routes["team"]}/${TeamId}`],
    queryFn: () => singleTeam(TeamId),
    refetchOnWindowFocus: true,
  });
};
