export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 text-white shadow-md">
      <h1 className="text-3xl font-bold text-blue-500">
        Resume Rank
      </h1>

      <div className="flex gap-6">
        <a href="/" className="hover:text-blue-400">
          Home
        </a>

        <a href="/login" className="hover:text-blue-400">
          Login
        </a>

        <a href="/signup" className="hover:text-blue-400">
          Sign Up
        </a>
      </div>
    </nav>
  );
}