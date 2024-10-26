
export default function Home() {
  return (
    <div className="container flex flex-col items-center w-[1322px] ml-[59px] bg-[#252B42] overflow-hidden">
      
      {/* Navbar */}
      <div className="navbar-style2 w-full h-[91px] flex flex-row items-center justify-between">
        
        {/* Brand Name */}
        <div className="navbar-brand w-[187px] h-[58px] ml-[136px]">
          <div className="w-[152px] text-2xl font-bold leading-[32px] tracking-[0.1px] text-white">
            BrandName
          </div>
        </div>

        {/* Navbar Links */}
        <div className="CollapseNavbar text-white flex items-center justify-between w-[815px] h-[58px] font-bold text-[14px]">
          <div className="navbar-nav flex space-x-6">
          <span>Home</span>
              <span>Product</span>
              <span>Pricing</span>
              <span>Contact</span>
          </div>
          <div className="flex items-center space-x-7">
            <span className="hover:text-gray-300 mr-2 top-[16px]">Login</span>
            <button className="bg-[#23A6F0] hover:bg-sky-400 w-[110px] h-[52px]">Join Us</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content w-[601px] h-[496px] pt-[40px] pb-[40px] ml-[150px] text-center">
        <h3 className="text-[#23A6F0] text-[16px] font-bold">Welcome</h3>
        <h1 className="text-[58px] font-bold text-white leading-[80px] mt-4">
          Selling on the <br /> internet like a Pro
        </h1>
        <p className="text-white mt-4 leading-[30px]">
        We know how large objects will act, but things on a <br /> small scale just do not act that way.
        </p>
        <div className="flex space-x-4 mt-[40px] justify-center items-center">
          <button className="bg-[#35A6F0] hover:bg-sky-400 px-6 py-2 rounded">Get Quote Now</button>
          <button className="border border-[#35A6F0] text-[#35A6F0] px-6 py-2 rounded">Learn More</button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex space-x-8 mt-8 justify-center">
        
        {/* Card 1 */}
        <div className="card w-[328px] h-[292px] p-[35px] bg-white rounded-lg shadow-md hover:shadow-lg">
          <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-[10px] mx-auto mb-4 ml-2"></div>
          <h2 className="font-bold text-[#252B42]">Training Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040] my-2"></div>
          <p className="text-[#737373] text-[14px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>

        {/* Card 2 */}
        <div className="card w-[328px] h-[292px] p-[35px] bg-white rounded-lg shadow-md hover:shadow-lg">
          <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-[10px] mx-auto mb-4 ml-2"></div>
          <h2 className="font-bold text-[#252B42]">2,769 Online Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040] my-2"></div>
          <p className="text-[#737373] text-[14px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>

        {/* Card 3 */}
        <div className="card w-[328px] h-[292px] p-[35px] bg-[#23A6F0] rounded-lg shadow-md hover:shadow-lg">
          <div className="w-[70px] h-[76px] bg-white rounded-[10px] mx-auto mb-4 ml-2"></div>
          <h2 className="font-bold text-white">2,769 Online Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040] my-2"></div>
          <p className="text-white text-[14px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>

      </div>
    </div>
  );
}
