import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import { ISingleXvt, PatchXvt } from "@/types/xvt";

const editXvt = async (val: PatchXvt) => {
  let editData = { ...val };
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.xvt}/${val?.id}`,
    editData
  );
  return data;
};

const singleXvt = async (): Promise<ISingleXvt> => {
  const { data } = await axiosInstance?.get(`${routes.xvt}/${process.env.NEXT_PUBLIC_XVT_API_ID}`);
  return data;
};

export const useEditXvt = () => {
  return useMutation({
    mutationFn: editXvt,
  });
};

export const useGetXvt = () => {
  return useQuery({
    queryKey: [`${routes["xvt"]}`],
    queryFn: () => singleXvt(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
