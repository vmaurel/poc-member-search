import http from "./httpService";

export function getMembers() {
  const membersEndPoint =
    "https://poc-react-member-search-api.herokuapp.com/api/members";
  return http.get(membersEndPoint);
}
