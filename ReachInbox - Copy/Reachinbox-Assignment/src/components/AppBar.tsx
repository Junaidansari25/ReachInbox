import logo from '../assets/Logo 13.png';

function AppBar() {
  return (
    <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
      <div className="log">
       <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default AppBar;
