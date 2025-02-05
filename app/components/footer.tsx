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
                    </div>
                </div> 
            </div>
        </div>
    );
}