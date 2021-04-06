const authProvider = {
    login: ({ email, password }) =>  {

        const request = new Request('http://localhost:4000/api/auth/signin', {
            method: 'POST',
            body: { email, password },
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });

        return fetch(request)
            .then(response => {
                // if (response.status < 200 || response.status >= 300) {
                //     throw new Error(response.statusText);
                // }
            
                return response.json();
            })
            .then(auth => {
                console.log(auth);
                
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch(error => {
                console.error(error);
                throw new Error('Network error')
            });
    },

    checkError: (error) => {        console.log('error',error);
},
    checkAuth: () => {
        console.log('checkAuth');
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        console.log('logout');

        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: params => Promise.resolve(),
};

export default authProvider;