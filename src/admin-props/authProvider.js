import { isConditionalExpression } from "typescript";

const authProvider = {
  login: ({ email, password }) => {
    const request = new Request("http://localhost:4000/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((auth_token) => {
        localStorage.setItem("auth_token", JSON.stringify(auth_token));
      });
  },

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth_token");
      return Promise.reject({ redirectTo: "/login" });
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () => {
    //return getCookie("auth_token");
    return localStorage.getItem("auth_token")
      ? Promise.resolve()
      : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("permissions");
    localStorage.removeItem("organizations");

    return Promise.resolve();
  },
  getIdentity: () => {
    const request = new Request("http://localhost:4000/api/auth/currentUser", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("auth_token")}`,
      }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((current_user) => {
        localStorage.setItem(
          "permissions",
          current_user.currentUser.isAdmin ? "admin" : "user"
        );
        localStorage.setItem(
          "organizations",
          JSON.stringify(
          current_user.currentUser.organizations ? current_user.currentUser.organizations : [])
        );
         
        const { id, name, avatar } = current_user.currentUser;
        return Promise.resolve({
          id: id,
          fullName: name,
          avatar: avatar,
        });
      });
  },
  // authorization
  getPermissions: (params) => {
    const role = localStorage.getItem("permissions");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export default authProvider;
