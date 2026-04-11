import { useEffect, useState } from "react";
import {
  createApplicationApi,
  getApplicationsApi,
  deleteApplicationApi,
} from "../api/applicationApi";

interface Application {
  _id: string;
  company: string;
  role: string;
  description: string;
  status: string;
}

export const useApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  const fetchApplications = async () => {
    try {
      const data = await getApplicationsApi();
      setApplications(data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const createApplication = async (payload: Omit<Application, "_id">) => {
    try {
      await createApplicationApi(payload);
      fetchApplications();
    } catch (error) {
      console.error("Create Error:", error);
    }
  };

  const deleteApplication = async (id: string) => {
    try {
      await deleteApplicationApi(id);
      fetchApplications();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return {
    applications,
    createApplication,
    deleteApplication,
  };
};
