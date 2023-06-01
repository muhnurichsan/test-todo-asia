import callAPI from "@/config/api";

export const CREATE_TODOS = async (data: any) => {
  const url = "/api/todo/create";
  return callAPI({
    url,
    method: "POST",
    data,
  });
};

export const UPDATE_TASK = async (id: string, data: any) => {
  const url = `/api/todo/edit/${id}`;
  return callAPI({
    url,
    method: "PUT",
    data,
  });
};
export const UPDATE_COMPLETE_TASK = async (id: string, data: any) => {
  const url = `/api/todo/edit/${id}`;
  return callAPI({
    url,
    method: "PUT",
    data,
  });
};

export const DELETE_TASK = async (id: string) => {
  const url = `/api/todo/delete/${id}`;
  return callAPI({
    url,
    method: "DELETE",
  });
};
