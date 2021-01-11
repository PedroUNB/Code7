import Vue from 'vue';

export function updateUser(state, payload) {
  Vue.delete(state.users, state.users.findIndex(user => user._id == payload._id));
  Vue.set(state.users, state.users.length, payload);
}

export function deleteUser(state, _user) {
  Vue.delete(state.users, state.users.findIndex(user => user._id == _user._id));
}

export function addUser(state, payload) {
  Vue.set(state.users, state.users.length, payload);
}

export function setUsersLoaded(state, value) {
  state.users = value;
}
