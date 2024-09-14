"use client";
import ProjectList from "@/components/layout/project.list";
import useSWR from "swr";

import moment from "moment";
import { GET_ALL_API } from "@/constants/ApiConstant";
import { Spin } from "antd";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProjectsPage = () => {
  const { data, error, isLoading } = useSWR(GET_ALL_API, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  if (isLoading) {
    return (
      <div className="text-center pt-4">
        <Spin tip="Loading" size="large"></Spin>
      </div>
    );
  }
  if (error) {
    return <div>error...</div>;
  }

  return (
    <>
      <ProjectList
        projects={data?.sort(
          (a: IProject, b: IProject) =>
            moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf()
        )}
      />
    </>
  );
};

export default ProjectsPage;
