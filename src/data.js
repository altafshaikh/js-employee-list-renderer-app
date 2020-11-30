let url =
  "https://niravkpatel28.github.io/json-data-server/employees/employees.json ";

const getUsers = async (url) => {
  let response = await axios.get(url);
  return response.data;
};

export let Trainees = getUsers(url);
