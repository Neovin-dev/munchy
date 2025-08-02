import './index.css';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-center text-white p-4">
      <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
        Tailwind CSS is Working!
      </h1>
      <p className="text-lg text-slate-300 mb-8 max-w-md">
        If you can see this text styled with a dark background, large cyan heading, and a button below, your setup is correct.
      </p>
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        Hover Over Me
      </button>
    </div>
  )
}

export default App