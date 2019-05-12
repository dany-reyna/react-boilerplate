const fakeAuth = {
  isAuthenticated: false,
  signIn(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 300);
  },
  signOut(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 300);
  },
};

export default fakeAuth;
