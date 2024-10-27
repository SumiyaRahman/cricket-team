import "./Footer.css";

const Footer = () => {
  return (
    <div className="relative mt-72">
      {/* Newsletter */}
      <div className="container mx-auto px-5 text-center relative">
        <div className="news-bg py-6 md:py-10 lg:py-20 rounded-lg backdrop-blur-lg bg-white bg-opacity-70 p-10 shadow-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#131313]">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm md:text-=lg lg:text-xl font-medium text-[#121212b3] mt-4 mb-6">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 p-1 lg:p-2 rounded-lg placeholder:text-xs md:placeholder:text-sm placeholder:text-[#12121266] outline-none me-0 md:me-2"
            />
            <button className="w-full md:w-1/3 p-1 lg:p-2 text-xs md:text-sm text-[#131313] font-bold bg-gradient-to-r from-pink-400 to-yellow-400 rounded-lg outline-none mt-2 md:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#06091A] pt-60">
        <div className="footer container mx-auto px-5">
          <nav>
            <h6 className="mb-4 text-white text-lg font-semibold">About Us</h6>
            <p className="w-72 leading-6 text-[#ffffff99] text-sm">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav>
            <h6 className="mb-4 text-white text-lg font-semibold">Quick Links</h6>
            <a className="link link-hover text-[#ffffff99] text-sm">Home</a>
            <a className="link link-hover text-[#ffffff99] text-sm">Services</a>
            <a className="link link-hover text-[#ffffff99] text-sm">About</a>
            <a className="link link-hover text-[#ffffff99] text-sm">Contact</a>
          </nav>
          <form>
            <h6 className="mb-4 text-white text-lg font-semibold">Subscribe</h6>
            <p className="text-[#ffffff99] text-sm w-72 mb-3">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex justify-center items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs placeholder:text-sm placeholder:text-[#12121266] outline-none"
              />
              <button className="py-4 px-9 text-sm text-[#131313] font-bold bg-gradient-to-r from-pink-400 to-yellow-400 rounded-lg outline-none">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-xs md:text-sm py-8 text-[#ffffff99] border-t border-[#ffffff1e] mt-16">
          &copy; 2024 Cricket Team Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
