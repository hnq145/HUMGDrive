import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClickOutOfBounds, useUtils } from "../../hooks/utils";
import AddNewDropdown from "../AddNewDropdown/AddNewDropdown";
import TrashIcon from "../../icons/TrashIcon";
import classNames from "classnames";
import PhotoIcon from "../../icons/PhotoIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { closeDrawer } from "../../reducers/leftSection";
import SettingsIcon from "../../icons/SettingsIcon";
import ChevronSolid from "../../icons/ChevronSolid";
import HomeIconOutline from "../../icons/HomeIconOutline";
import { addNavigationMap } from "../../reducers/selected";

const LeftSection = ({
  scrollDivRef,
}: {
  scrollDivRef: React.RefObject<HTMLDivElement>;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const leftSectionOpen = useAppSelector((state) => state.leftSection.drawOpen);
  const { isHome, isHomeFolder, isTrash, isMedia, isSettings } = useUtils();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addNewDisabled = useRef(false);
  const closeDropdownDisabled = useRef(true);

  const openDropdown = () => {
    if (addNewDisabled.current) return;
    addNewDisabled.current = true;
    closeDropdownDisabled.current = true;
    setIsDropdownOpen(true);
    setTimeout(() => (closeDropdownDisabled.current = false), 300);
  };

  const closeDropdown = useCallback(() => {
    if (closeDropdownDisabled.current) return;
    addNewDisabled.current = true;
    closeDropdownDisabled.current = true;
    setIsDropdownOpen(false);

    // Clicking out of bounds on the add new button will cause it to reopen
    setTimeout(() => (addNewDisabled.current = false), 300);
  }, []);

  const goHome = () => {
    dispatch(closeDrawer());
    dispatch(
      addNavigationMap({
        url: window.location.pathname,
        scrollTop: scrollDivRef.current?.scrollTop || 0,
      })
    );
    navigate("/home");
  };

  const goTrash = () => {
    dispatch(closeDrawer());
    dispatch(
      addNavigationMap({
        url: window.location.pathname,
        scrollTop: scrollDivRef.current?.scrollTop || 0,
      })
    );
    navigate("/trash");
  };

  const goMedia = () => {
    dispatch(closeDrawer());
    dispatch(
      addNavigationMap({
        url: window.location.pathname,
        scrollTop: scrollDivRef.current?.scrollTop || 0,
      })
    );
    navigate("/media");
  };

  const goSettings = () => {
    dispatch(closeDrawer());
    dispatch(
      addNavigationMap({
        url: window.location.pathname,
        scrollTop: scrollDivRef.current?.scrollTop || 0,
      })
    );
    navigate("/settings");
  };

  const closeDrawerEvent = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!leftSectionOpen) return;

      const target = e.target as HTMLElement;

      const idsToIgnore = ["search-bar", "menu-icon", "header"];

      if (!target || idsToIgnore.includes(target.id)) {
        return;
      }

      dispatch(closeDrawer());
    },
    [leftSectionOpen, dispatch]
  );

  const { wrapperRef } = useClickOutOfBounds(closeDrawerEvent, leftSectionOpen);

  return (
    <div
      ref={wrapperRef}
      className={classNames(
        "left-section-bg p-6 fixed desktopMode:relative border-r w-[270px] min-w-[270px] bg-white h-full z-20 desktopMode:z-0 animate-movement mt-4",
        {
          "-left-[270px] desktopMode:left-0": !leftSectionOpen,
          "left-0": leftSectionOpen,
        }
      )}
    >
      <div
        className="flex flex-col h-full select-none text-sm"
        id="custom-leftSection"
      >
        <div>
          <div className="relative mb-7">
            <a
              onClick={openDropdown}
              className="flex items-center hover:dm-hover justify-center bg-primary hover:bg-primary-hover no-underline rounded-full px-2 py-2.5"
            >
              <p
                className="m-0 w-full text-center text-white font-medium text-sm cursor-pointer"
                style={{ borderRadius: "2.375rem" }}
              >
                ADD NEW
              </p>
              <ChevronSolid
                className={`text-white mr-1 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </a>
            <AddNewDropdown
              closeDropdown={closeDropdown}
              isDropdownOpen={isDropdownOpen}
            />
          </div>
        </div>

        <div
          className={classNames(
            "dm-hover pl-2 mr-5 py-2 hover:dm-hover hover:bg-white-hover rounded-full cursor-pointer animate flex flex-row items-center w-full",
            (isHome || isHomeFolder) && "bg-primary-selected text-white"
          )}
          id="custom-bg-leftSection"
          onClick={goHome}
        >
          <HomeIconOutline className="w-6 h-6" />
          <p className="ml-3">Home</p>
        </div>

        <div
          className={classNames(
            "dm-hover pl-2 mr-5 py-2 hover:dm-hover hover:bg-white-hover rounded-full cursor-pointer animate flex flex-row items-center mt-5 w-full",
            isMedia && "bg-primary-selected text-white"
          )}
          onClick={goMedia}
        >
          <PhotoIcon className="w-6 h-6" />
          <p className="ml-2.5">Media</p>
        </div>

        <div
          className={classNames(
            "dm-hover pl-2 mr-5 py-2 hover:dm-hover hover:bg-white-hover rounded-md cursor-pointer animate flex flex-row items-center desktopMode:hidden mt-1 w-full",
            isSettings ? "bg-primary-selected text-white" : "text-gray-primary"
          )}
          onClick={goSettings}
        >
          <SettingsIcon className="w-6 h-6" />
          <p className="ml-2.5">Settings</p>
        </div>

        <div
          className={classNames(
            "dm-hover pl-2 mr-5 py-2 hover:dm-hover hover:bg-white-hover rounded-full cursor-pointer animate flex flex-row items-center mt-5 w-full",
            isTrash && "bg-red-100 text-red-500"
          )}
          onClick={goTrash}
        >
          <TrashIcon className="w-6 h-6" />
          <p className="ml-2.5">Trash</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
