import { useContext, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../useDarkside";
const Header = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <nav className="sticky top-0">
        <div
          className={`flex flex-col gap-4 sticky top-0 md:flex-row md:items-center md:justify-between  lg:justify-between bg-foreground text-text w-full h-24 p-10 shadow-md`}
        >
          <div>
            <h1 className="font-bold text-4xl ">Where is the world!</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <DarkModeSwitch 
              checked={darkSide}
              onChange={toggleDarkMode}
              size={20}
            />
            <h1 className=" text-sm md:text-2xl">Dark mode</h1>
          </div>
        </div>
        {/* Dark mode */}
      </nav>
    </>
  );
};
export default Header;
