// src/components/Rating.tsx
import { useRef } from "react";

// src/hooks/useHandleClick.ts
var useHandleClick = () => {
  const handleClick = (ev, index, isReadonly = true, onChange) => {
    if (isReadonly || !onChange) return;
    const rectangle = ev.currentTarget.getBoundingClientRect();
    const x = ev.clientX - rectangle.left;
    const isLeft = x < rectangle.width / 2;
    const newValue = index + (isLeft ? 0.5 : 1);
    onChange(newValue);
  };
  return { handleClick };
};

// src/hooks/useHandleMouseMove.ts
import { useState } from "react";
var useHandleMouseMove = () => {
  const [hoverValue, setHoverValue] = useState(null);
  const handleMouseMove = (ev, index, isReadonly = true) => {
    if (isReadonly) return;
    const rectangle = ev.currentTarget.getBoundingClientRect();
    const x = ev.clientX - rectangle.left;
    const isLeft = x < rectangle.width / 2;
    const newValue = index + (isLeft ? 0.5 : 1);
    setHoverValue(newValue);
  };
  const handleMouseLeave = (isReadonly = true) => {
    if (isReadonly) return;
    setHoverValue(null);
  };
  return {
    hoverValue,
    handleMouseMove,
    handleMouseLeave
  };
};

// src/utils/getStarType.ts
var getStarType = (rating, index) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const half = 0.5;
  if (roundedRating >= index + 1) return "full";
  if (roundedRating >= index + half) return "half";
  return "empty";
};

// src/components/EmptyStar.tsx
import { Star } from "lucide-react";
import { jsx } from "react/jsx-runtime";
var EmptyStar = ({ ...props }) => {
  return /* @__PURE__ */ jsx(Star, { ...props, className: "empty-star" });
};

// src/components/FullStar.tsx
import { Star as Star2 } from "lucide-react";
import { jsx as jsx2 } from "react/jsx-runtime";
var FullStar = ({ ...props }) => {
  return /* @__PURE__ */ jsx2(Star2, { ...props, className: "full-star" });
};

// src/components/HalfFullStar.tsx
import { Star as Star3 } from "lucide-react";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var HalfFullStar = ({ ...props }) => {
  return /* @__PURE__ */ jsxs("div", { className: "half-star-container", children: [
    /* @__PURE__ */ jsx3(EmptyStar, { ...props }),
    /* @__PURE__ */ jsx3("div", { className: "half-filled-star-container", children: /* @__PURE__ */ jsx3(Star3, { ...props, className: "half-filled-star" }) })
  ] });
};

// src/components/Rating.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Rating = ({
  starAmount = 5,
  defaultValue = 0,
  isReadonly = true,
  onChange
}) => {
  const { handleClick } = useHandleClick();
  const { handleMouseMove, handleMouseLeave } = useHandleMouseMove();
  const stars = Array.from({ length: Math.round(starAmount) });
  const keysRef = useRef(
    Array.from({ length: Math.round(starAmount) }, () => crypto.randomUUID())
  );
  return /* @__PURE__ */ jsx4("div", { className: "rating-container", children: stars.map((_, index) => {
    const starType = getStarType(defaultValue, index);
    return /* @__PURE__ */ jsx4(
      "div",
      {
        style: { cursor: isReadonly ? "cursor-default" : "cursor-pointer" },
        onClick: (ev) => handleClick(ev, index, isReadonly, onChange),
        onMouseMove: (ev) => handleMouseMove(ev, index, isReadonly),
        onMouseLeave: () => handleMouseLeave(isReadonly),
        children: starType === "full" ? /* @__PURE__ */ jsx4(FullStar, {}) : starType === "half" ? /* @__PURE__ */ jsx4(HalfFullStar, {}) : /* @__PURE__ */ jsx4(EmptyStar, {})
      },
      keysRef.current[index]
    );
  }) });
};
export {
  Rating
};
