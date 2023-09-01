export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.user.name;

export const getLoading = state => state.auth.isLoading;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getToken = state => state.auth.token;
