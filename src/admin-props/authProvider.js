const authProvider = {
  login: ({ username, password }) => {
    debugger;
    const request = new Request("http://localhost:4000/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((token) => {
        localStorage.setItem("token", JSON.stringify(token));
      })
      .catch((error) => {
        console.error(error);
        throw new Error(error);
      });
  },

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject({ redirectTo: "/credentials-required" });
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () => {
    console.log("checkAuth");
    console.log(localStorage.getItem("token"));
    console.log("found");

    //return getCookie("token");
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  logout: () => {
    console.log("logout");

    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { id, fullName, avatar } = JSON.parse(
        localStorage.getItem("token")
      );
      console.log("id, fullName, avatar :", id, fullName, avatar);
      return Promise.resolve({ id, fullName, avatar });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // authorization
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;
