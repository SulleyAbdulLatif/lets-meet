'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Home = () => {
  // Initialize the router
  const router = useRouter();

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    // If authentication is successful, redirect to the dashboard
    // Replace the following line with your actual authentication logic
    if (email === 'sulleyabdullatif2@gmail.com' && password === 'admin1234') {
      router.push('/dashboard');
    }
  };

  // JSX for the component
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/letsmeet-logo.png" alt="LetsMeet Logo" width={100} height={40} />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:underline">
            Sign Up
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
          <a href="#" className="hover:underline">
            English
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-grow">
        {/* Left Division */}
        <div className="flex-1 bg-gray-200 p-8">
          <Image src="/meeting-image.jpg" alt="Meeting Image" layout="responsive" width={600} height={400} />
        </div>

        {/* Right Division */}
        <div className="flex-1 bg-white p-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4">Sign In</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-700 text-sm font-semibold" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500
                             text-sm" 
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500
                             text-sm" 
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Sign In
              </button>
            </form>

            {/* Sign In With Icons */}
            <div className="mt-6">
              <p className="text-gray-600">Or sign in with:</p>
              <div className="flex space-x-4 mt-2">
                {/* Add relevant sign-in options with icons */}
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FaGoogle />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FaFacebook />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;







