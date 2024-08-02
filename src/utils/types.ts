export interface Project {
  id: number;
  name: string;
  type: string;
  repo: string;
  deploy: string | null;
  image: string;
  description: string;
}

export interface ProjectsData {
  data: Project[];
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Social {
  url: string;
  icon: JSX.Element;
}
