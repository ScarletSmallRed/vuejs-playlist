export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user
    state.isLogin = true
  } else {
    localStorage.removeItem("userEmail")
    state.currentUser = null
    state.isLogin = false
  }
}
