
export default function Home() {
  return (
    <div className="container flex flex-col items-center w-[1322px] ml-[59px] bg-[#252B42] overflow-hidden">
      
      {/* Navbar */}
      <div className="navbar-style2 w-full h-[91px] flex flex-row items-center justify-between">
        
        {/* Brand Name */}
        <div className="navbar-brand w-[187px] h-[58px] top-[17px] ml-[136px]">
          <div className="w-[152px] h-32px mt-[13px] text-white font-[700] text-2xl tracking-[0.1px] leading-[32px]">
            BrandName
          </div>
        </div>

        {/* Navbar Links */}
        <div className="CollapseNavbar text-white w-[815px] h-[58px] top-[16px] left-[364px] font-[700] text-[14px] flex justify-between">
          <div className="navbar-nav  w-[275px] h-[24px] mt-[20px]  space-x-6 ">
          <span>Home</span>
              <span>Product</span>
              <span>Pricing</span>
              <span>Contact</span>
          </div>

          <div className="w-[189px] height-[52px] mt-[3px] mr-[200px] space-x-7 ">
            <span className="className='w-[41px] h-[52px] mt-[20px] hover:text-gray-300">Login</span>
            <button className="bg-[#23A6F0] hover:bg-sky-300 w-[110px] h-[52px] left-[25px]">Join Us</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content w-[601px] h-[496px] pt-[40px] pb-[40px] ml-[150px] flex flex-col text-center">
        <h3 className="w-[77px] h-[24px]  text-[#23A6F0] text-[16px] font-bold ml-[250px] text-center">Welcome</h3>
        <h1 className="w-[542px] h-[160px] ml-6 text-[58px] font-bold text-[#ffffff] leading-[80px] mt-4 ">
          Selling on the <br /> internet like a Pro
        </h1>
        <p className="text-[#ffffff] mt-4 max-w-[542px] mx-auto  leading-[30px]">
        We know how large objects will act, but things on a <br /> small scale just do not act that way.
        </p>
        <div className="w-[365px] h-[52px] flex space-x-4 mt-[40px] ml-[100px] justify-center items-center">
          <button className="bg-[#35A6F0] hover:bg-sky-400 px-6 py-2 rounded">Get Quote Now</button>
          <button className="border border-[#35A6F0] text-[#35A6F0] px-6 py-2 rounded ">Learn More</button>
        </div>
      </div>

      {/* Cards */}
      <div className="row w-[900px] h-[2026px] gap-[30px] mt-2 flex justify-between">
        
        {/* Card 1 */}
        <div className="card w-[280px] h-[272px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-white rounded-lg">
          <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-[10px] mx-auto mb-4 ml-2"></div>
          <h2 className="font-bold text-[#252B42]">Training Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040] my-2"></div>
          <p className="w-[222px] h-[60px] text-[#737373] font-[400] text-[14px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>

        {/* Card 2 */}
        <div className="card w-[280px] h-[272px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-white rounded-lg">
          <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-[10px] mx-auto mb-4 ml-2"></div>
          <h2 className="font-bold text-[#252B42]">2,769 Online Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040] my-2"></div>
          <p className="w-[222px] h-[60px] text-[#737373] font-[400] text-[14px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>

        {/* Card 3 */}
        <div className="card w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-[#23A6F0] rounded-lg ">
          <div className="w-[70px] h-[76px] bg-white rounded-[10px] mx-auto mb-4 ml-2"></div>
          <h2 className="font-bold text-white">2,769 Online Courses</h2>
          <div className="h-[2px] w-[50px] bg-[#E74040] my-2"></div>
          <p className="w-[222px] h-[60px] text-white font-[400] text-[14px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>

      </div>
    </div>
  );
}
