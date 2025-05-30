import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import MenuIcon from "../../icons/MenuIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { closeDrawer, openDrawer } from "../../reducers/leftSection";
import { useUtils } from "../../hooks/utils";
import ChevronOutline from "../../icons/ChevronOutline";
import SettingsIconSolid from "../../icons/SettingsIconSolid";
import Logo from "../../images/Logo-HUMG.jpg";
import { useEffect } from "react";

const Header = () => {
  const drawerOpen = useAppSelector((state) => state.leftSection.drawOpen);
  const { isSettings } = useUtils();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openDrawerClick = () => {
    dispatch(openDrawer());
  };

  const closeDrawerClick = () => {
    dispatch(closeDrawer());
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  };

  return (
    <header
      id="header"
      className="select-none border-b fixed top-0 left-0 w-full bg-white z-10"
    >
      <div className="px-6 flex justify-between  items-center py-3">
        <div className="items-center w-[260px] hidden desktopMode:flex">
          <a
            className="inline-flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img className="w-8" src={Logo} alt="logo" />
          </a>
        </div>
        {!isSettings && (
          <div className="items-center flex desktopMode:hidden mr-4">
            <div className="inline-flex items-center justify-center cursor-pointer">
              {drawerOpen ? (
                <ChevronOutline
                  id="menu-icon"
                  onClick={closeDrawerClick}
                  className="text-primary w-9 rotate-90"
                />
              ) : (
                <MenuIcon
                  id="menu-icon"
                  onClick={openDrawerClick}
                  className="text-primary w-9"
                />
              )}
            </div>
          </div>
        )}
        <SearchBar />

        <div className="btn-UIMode">
          <button
            style={{
              width: 85,
              height: 30,
              marginLeft: 450,
              border: "3px solid #3C85EE",
              borderRadius: 45,
              transition: "all 0.3s",
              cursor: "pointer",
              background: "#3C85EE",
              fontSize: "1.0em",
              fontWeight: 550,
              color: "#fff",
            }}
            onClick={toggleTheme}
          >
            UI Mode
          </button>
        </div>

        <div className="justify-end w-[260px] hidden desktopMode:flex">
          <div>
            <div>
              <a
                onClick={() => navigate("/settings")}
                className="cursor-pointer"
              >
                <SettingsIconSolid className="w-6 h-6 text-gray-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
