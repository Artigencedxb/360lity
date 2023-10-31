import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import {
  IProject,
  ISingleProject,
  PatchProject,
  PostProject,
} from "@/types/project";

const postProject = async (val: PostProject) => {
  const { data } = await axiosInstance.post(routes.project, val);
  return data;
};

const editProject = async (val: PatchProject) => {
  let editData = { ...val };
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.project}/${val?.id}`,
    editData
  );
  return data;
};

const deleteProject = async (val: { id: string }) => {
  const { data } = await axiosInstance.delete(`${routes.project}/${val?.id}`);
  return data;
};

const allProjects = async (
  page?: number,
  limit?: number
): Promise<IProject> => {
  const { data } = await axiosInstance?.get(routes.project, {
    params: {
      ...(page && { page, limit }),
    },
  });
  return data;
};

const singleProject = async (id: string): Promise<ISingleProject> => {
  const { data } = await axiosInstance?.get(`${routes.project}/${id}`);
  return data;
};

export const useCreateProject = () => {
  return useMutation({
    mutationFn: postProject,
  });
};

export const useEditProject = () => {
  return useMutation({
    mutationFn: editProject,
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routes["project"]] });
    },
  });
};

export const useProjects = (page?: number, limit?: number) => {
  return useQuery({
    queryKey: [routes["project"], page, limit],
    queryFn: () => allProjects(page, limit),
  });
};

export const useGetProject = (projectId: string) => {
  return useQuery({
    queryKey: [`${routes["project"]}/${projectId}`],
    queryFn: () => singleProject(projectId),
    refetchOnMount: true,
  });
};
