export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-[#0f0f0f] p-8 rounded-lg text-center shadow-lg">
        <h1 className="text-2xl font-bold text-white">Website Update In Progress</h1>
        <p className="mt-4 text-white">Check back soon for updates!</p>

        <div className="mt-8">Check Out My Previous Website <a href="https://davidyoum.vercel.app/" className="text-blue-500 hover:text-blue-600">Here</a></div>
      </div>
    </div>
  );
}
