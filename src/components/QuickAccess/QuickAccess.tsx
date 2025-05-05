import QuickAccessItem from "../QuickAccessItem/QuickAccessItem";
import { memo, useState } from "react";
import { useQuickFiles } from "../../hooks/files";
import classNames from "classnames";
import { useUtils } from "../../hooks/utils";
import ChevronOutline from "../../icons/ChevronOutline";

const QuickAccess = memo(() => {
  const { data: quickfilesList } = useQuickFiles(false);
  const [quickAccessExpanded, setQuickAccessExpanded] = useState(false);
  const { isHome } = useUtils();

  return (
    <div
      className="overflow-hidden select-none item-box rounded-md h-19"
      style={isHome ? { display: "block" } : { display: "none" }}
    >
      <div className="flex flex-row items-center justify-between mb-5">
        <h2
          className="text-[#212b36] text-xl font-medium"
          style={{ borderRadius: "2.375rem" }}
        >
          Quick Access
        </h2>
        <ChevronOutline
          onClick={() => setQuickAccessExpanded(!quickAccessExpanded)}
          className={classNames(
            "cursor-pointer animate-movement text-primary",
            {
              "rotate-180": quickAccessExpanded,
            }
          )}
        />
      </div>

      <div
        className={classNames(
          "grid animate-movement grid-cols-[repeat(auto-fit,minmax(47%,45%))] xs:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-[16px]",
          quickfilesList?.length === 1
            ? "justify-normal"
            : "justify-center xs:justify-normal",
          {
            // Create animation for the height of the div when it is expanded or collapsed
            " max-h-0 overflow-hidden transition-all duration-2000 ease-in-out":
              !quickAccessExpanded,
            "max-h-[655px] quickAccessOne:max-h-[990px] quickAccessTwo:max-h-[660px] quickAccessThree:max-h-[490px]":
              quickAccessExpanded,
          }
        )}
      >
        {quickfilesList?.map((file) => (
          <QuickAccessItem key={file._id} file={file} />
        ))}
      </div>
    </div>
  );
});

export default QuickAccess;
