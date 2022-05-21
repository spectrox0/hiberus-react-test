

export const endpoints = {
    'users': 'users/',
    'me': 'users/me',
    'user': (id: string) => `users/${id}`,
    'login': "auth/log-in",
    'signUp': "auth/sign-up"
}