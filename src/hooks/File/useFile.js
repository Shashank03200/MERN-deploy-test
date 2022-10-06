import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

import Axios from "../../utils/axios-helper";

const KEY = "file-service";

const useFile = () => {
  const postFile = (values) => {
    return Axios.post("/file", values);
  };

  const queryClient = useQueryClient();

  const {
    data: newFileData,
    mutate: createFile,
    isLoading: createFileLoading,
  } = useMutation(postFile, {
    mutationKey: KEY,
    onSuccess: async () => {
      queryClient.invalidateQueries(KEY);
    },
  });

  const getFiles = () => {
    return Axios.get("/file");
  };

  const {
    data: files,
    isLoading: filesLoading,
    error: filesError,
  } = useQuery(KEY, getFiles, {
    select: (data) => data.data.data,
  });

  return {
    files,
    filesLoading,
    filesError,
    createFile,
    createFileLoading,
  };
};

export default useFile;
