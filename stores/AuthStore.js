import create from "zustand";

const useAuth = create(set => ({
  authenticated: false,
  jwt: null,
  login: () => set(() => ({authenticated: true})),
  logout: () => set(() => ({authenticated: false})),
  setJWT: (token) => set(() => ({jwt: token}))
}))

export default useAuth;