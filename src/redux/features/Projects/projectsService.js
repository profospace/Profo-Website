import axios from "axios";
import { projects_base_url} from "../../../utils/base_url";

const getAllProjects = async () => {
  const response = await axios.get(`${projects_base_url}`);
  // console.log(response)
  return response.data;
};

const getSingleProject = async (projectId) => {
  // console.log(projectId)
  const response = await axios.get(`${projects_base_url}/${projectId}`);
  // console.log(response)
  return response.data;
};

const projectsService = {
  getAllProjects, getSingleProject
};

export default projectsService;
