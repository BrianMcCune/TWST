const Login = () => {

  const handleGoogleLogin = (user) => {
    window.location.href = 'http://localhost:3000/auth/google';
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = '/courses'; 
  };

  return ( 
    <>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </>
   );
}
 
export default Login;