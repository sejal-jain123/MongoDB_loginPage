import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [pass, setPass]  = useState('');
  const [user, setUser]  = useState('');

  const handleChnageUser = (event)=>{
    // console.log(event.target.value)
    setUser(event.target.value);
  };

  const handleChnage = (event)=>{
    // console.log(event.target.value)
    setPass(event.target.value);
  };

  const login = ()=>{
    let userName = user;
    let passWord = pass;
    const url = 'http://localhost:9000/login';
    const data = {
      userName: user,
      passWord: pass
    };

    fetch(url, {
      method: 'POST', // Specify the request method
      headers: {
      'Content-Type': 'application/json', // Define the content type if sending JSON
      },
      body: JSON.stringify(data) // Convert data to JSON
    })
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  
  const signup = ()=>{
    let userName = user;
    let passWord = pass;
    const url = 'http://localhost:9000/signup';
    const data = {
      'userName' : user,
      'passWord' : pass
    };

    fetch(url, {
      method: 'POST', // Specify the request method
      headers: {
      'Content-Type': 'application/json', // Define the content type if sending JSON
      },
      body: JSON.stringify(data) // Convert data to JSON
    })
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  
  const delUser = ()=>{
    let userName = user;
    let passWord = pass;
    const url = 'http://localhost:9000/delete';
    const data = {
      userName: user,
      passWord: pass
    };

    fetch(url, {
      method: 'POST', // Specify the request method
      headers: {
      'Content-Type': 'application/json', // Define the content type if sending JSON
      },
      body: JSON.stringify(data) // Convert data to JSON
    })
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <>
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <input placeholder='Enter Username' onChange={handleChnageUser} className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
        <input placeholder='Enter Password' onChange={handleChnage} className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
        <button onClick={login} className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"> Login</button>
        <button onClick={signup} className="w-full p-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"> Sign Up</button>
        <button onClick={delUser} className="w-full p-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"> Delete User</button>
      </div>
    </div>
    </>
  )
}

export default App
