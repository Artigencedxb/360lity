import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import { ISingleArVr, PatchArVr } from "@/types/arvr";

const editArVr = async (val: PatchArVr) => {
  let editData = { ...val };
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.arvr}/${val?.id}`,
    editData
  );
  return data;
};

const singleArVr = async (): Promise<ISingleArVr> => {
  const { data } = await axiosInstance?.get(
    `${routes.arvr}/655a0abc8ac629dc263eca3d`
  );
  return data;
};

export const useEditArVr = () => {
  return useMutation({
    mutationFn: editArVr,
  });
};

export const useGetArVr = () => {
  return useQuery({
    queryKey: [`${routes["arvr"]}`],
    queryFn: () => singleArVr(),
    refetchOnMount: true,
  });
};
