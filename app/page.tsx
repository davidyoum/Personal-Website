export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-[#0f0f0f] p-8 rounded-lg text-center shadow-lg">
        <h1 className="text-2xl font-bold text-white">Under Construction</h1>
        <p className="mt-4 text-md text-white">Check back soon for updates!</p>
      </div>
      <div className="mt-8 text-sm text-gray-700">Check Out My Previous Website (Be Kind) <a href="https://davidyoum.vercel.app/" rel="noopener noreferrer" target="_blank" className="text-blue-500 hover:text-blue-600">Here</a></div>
    </div>

  );
}

export const metadata = {
  title: 'David Youm',
  description: 'David Youm Portfolio Website',
}
