export const selectTasks = state => state.contacts.items;

export const selectStatusFilter = state => state.filters;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
