"use client";
import Loader from "@/UI/Loader";
import { Modal } from "@/UI/Modal";
import cn from "classnames";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useEditProject } from "../../api/project";
import { useEditShowcase } from "../../api/showcase";
import { PatchProject, Project } from "../../types/project";
import { PatchShowcase, Showcase } from "../../types/showcase";
import { toast } from "sonner";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useQueryClient } from "@tanstack/react-query";
import { routes } from "../../api/routes";
import { useEditBlog } from "../../api/blog";
import { Blog, PatchBlog } from "../../types/blog";
import { PatchTeam, Team } from "../../types/team";
import { useEditTeam } from "../../api/team";

const prioritySchema = z.object({
  priority: z.coerce.number().gte(1, "Please enter a priority"),
});

type ProjectSchemaType = z.infer<typeof prioritySchema>;

const PriorityModal: React.FC<{
  open: boolean;
  initialValues: Project | Showcase | Blog | Team;
  type: string;
  onClose: () => void;
}> = ({ open, type, initialValues, onClose }) => {
  const buttonText = "Update";
  const { mutate: editProject, isPending: editProjectLoader } =
    useEditProject();
  const { mutate: editShowcase, isPending: editShowcaseLoader } =
    useEditShowcase();
  const { mutate: editTeam, isPending: editTeamLoader } = useEditTeam();
  const { mutate: editBlog, isPending: editBlogLoader } = useEditBlog();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    control,
    formState: { errors },
  } = useForm<ProjectSchemaType>({
    resolver: zodResolver(prioritySchema),
  });

  const onSubmit: SubmitHandler<ProjectSchemaType> = (data) => {
    if (type === "project") {
      return editProject(
        { ...initialValues, priority: data?.priority } as PatchProject,
        {
          onSuccess: (res) => {
            toast.success("Priority updated.");
            queryClient.invalidateQueries({ queryKey: [routes?.["project"]] });
            onClose();
          },
        }
      );
    } else if (type === "blog") {
      return editBlog(
        { ...initialValues, priority: data?.priority } as PatchBlog,
        {
          onSuccess: (res) => {
            toast.success("Priority updated.");
            queryClient.invalidateQueries({ queryKey: [routes?.["blog"]] });
            onClose();
          },
        }
      );
    } else if (type === "team") {
      return editTeam(
        { ...initialValues, priority: data?.priority } as PatchTeam,
        {
          onSuccess: (res) => {
            toast.success("Priority updated.");
            queryClient.invalidateQueries({ queryKey: [routes?.["team"]] });
            onClose();
          },
        }
      );
    } else {
      return editShowcase(
        { ...initialValues, priority: data?.priority } as PatchShowcase,
        {
          onSuccess: (res) => {
            toast.success("Priority updated.");
            queryClient.invalidateQueries({ queryKey: [routes?.["showcase"]] });
            onClose();
          },
        }
      );
    }
  };
  return (
    <Modal open={open} onClose={onClose as any} title={`Set priority`}>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl space-y-4 mt-5"
      >
        <Controller
          name="priority"
          control={control}
          defaultValue={initialValues.priority}
          render={({ field: { onChange, value } }) => (
            <Input
              id={"priority"}
              name="priority"
              register={register}
              label="New Priority"
              error={errors?.priority?.message}
              className="w-full"
              type="tel"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <div className="inline-flex items-center gap-6 justify-end w-full mt-6">
          <button
            type="button"
            className="text-sm font-medium"
            onClick={onClose}
          >
            No
          </button>
          <Button
            loading={
              editProjectLoader ||
              editShowcaseLoader ||
              editBlogLoader ||
              editTeamLoader
            }
            disabled={
              editProjectLoader ||
              editShowcaseLoader ||
              editBlogLoader ||
              editTeamLoader
            }
            type="submit"
            text={buttonText}
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default PriorityModal;
