import { FaFacebook, FaLinkedin , FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    
    <>
    
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <div className="flex space-x-4 justify-center cursor-pointer">
                    <FaFacebook size={26} />
                    <FaLinkedin size={26} />
                    <FaTwitter size={26} />

                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex font-bold flex-col items-center">
                    <p>© 2024 Your Company. All rights reserved.</p>
                    <p>Supportive Partner ❤️ Akhil.</p>

                </div>
            </div>
       </div>
      </footer>
    </>
  )
}
export default Footer;
