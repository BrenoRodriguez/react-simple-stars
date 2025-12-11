"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Rating: () => Rating
});
module.exports = __toCommonJS(index_exports);

// src/components/Rating.tsx
var import_react2 = require("react");

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
var import_react = require("react");
var useHandleMouseMove = () => {
  const [hoverValue, setHoverValue] = (0, import_react.useState)(null);
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
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
var EmptyStar = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Star, { ...props, className: "empty-star" });
};

// src/components/FullStar.tsx
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var FullStar = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Star, { ...props, className: "full-star" });
};

// src/components/HalfFullStar.tsx
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var HalfFullStar = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "half-star-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(EmptyStar, { ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "half-filled-star-container", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react3.Star, { ...props, className: "half-filled-star" }) })
  ] });
};

// src/components/Rating.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Rating = ({
  starAmount = 5,
  defaultValue = 0,
  isReadonly = true,
  onChange
}) => {
  const { handleClick } = useHandleClick();
  const { handleMouseMove, handleMouseLeave } = useHandleMouseMove();
  const stars = Array.from({ length: Math.round(starAmount) });
  const keysRef = (0, import_react2.useRef)(
    Array.from({ length: Math.round(starAmount) }, () => crypto.randomUUID())
  );
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rating-container", children: stars.map((_, index) => {
    const starType = getStarType(defaultValue, index);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        style: { cursor: isReadonly ? "cursor-default" : "cursor-pointer" },
        onClick: (ev) => handleClick(ev, index, isReadonly, onChange),
        onMouseMove: (ev) => handleMouseMove(ev, index, isReadonly),
        onMouseLeave: () => handleMouseLeave(isReadonly),
        children: starType === "full" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FullStar, {}) : starType === "half" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HalfFullStar, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EmptyStar, {})
      },
      keysRef.current[index]
    );
  }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Rating
});
