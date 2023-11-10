import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../axios.config";
import { routes } from "../routes";
import {
  IContact,
  ISingleContact,
  PatchContact,
  PostContact,
} from "@/types/contact";

const editContact = async (val: PatchContact) => {
  let editData = { ...val };
  delete editData?.id;
  const { data } = await axiosInstance.patch(
    `${routes.contact}/${val?.id}`,
    editData
  );
  return data;
};



const singleContact = async (id: string): Promise<ISingleContact> => {
  const { data } = await axiosInstance?.get(`${routes.contact}/${id}`);
  return data;
};

export const useEditContact = () => {
  return useMutation({
    mutationFn: editContact,
  });
};

export const useGetContact = (ContactId: string) => {
  return useQuery({
    queryKey: [`${routes["contact"]}/${ContactId}`],
    queryFn: () => singleContact(ContactId),
    refetchOnMount: true,
  });
};
