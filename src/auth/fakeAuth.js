const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const fakeAuth = {
  isAuthenticated: false,
  async signIn() {
    await timeout(300);
    this.isAuthenticated = true;
  },
  async signOut() {
    await timeout(300);
    this.isAuthenticated = false;
  },
};

export default fakeAuth;
