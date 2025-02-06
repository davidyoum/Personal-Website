export default function Footer() {
    const currentYear = new Date().getFullYear(); // {{ edit_1 }}

    return (
        <div>
            <div className="h-52 bg-gradient-to-b from-transparent to-[#161616] via-[#161616]">
                <div className="flex items-center justify-center h-full">
                    <div className=" mt-20 text-center">
                        <div className="font-sfpro">
                            © {currentYear} David Youm
                        </div>
                        <div className="font-sfpro text-sm text-gray-600">
                            Made with love and a little bit of procrastination.
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm text-gray-400">v1.0.0a</span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}