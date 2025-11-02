import React from "react";
import PropTypes from "prop-types";
import "./AdaptableHeader.css";

export default function AdaptableHeader({
  badge = "Business Listing",
  title = "Profitable businesses ready for acquisition",
  subtitle =
    "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.",
  buttonLabel = "View all listing",
  onButtonClick = () => {},
  image = null,
}) {
  return (
    <header className="ah-header">
      <div className="ah-inner">
        {/* Left content column */}
        <div className="ah-left">
          {badge && (
            <div className="ah-label">
              <span className="ah-label-text">{badge}</span>
            </div>
          )}

          <h1 className="ah-title">{title}</h1>

          {subtitle && <p className="ah-sub">{subtitle}</p>}

          {buttonLabel && (
            <div className="ah-cta-row">
              <button className="ah-btn ah-btn-outline" onClick={onButtonClick}>
                <span>{buttonLabel}</span>
                <svg
                  className="ah-btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="#152B5A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Right visual column */}
        <div className="ah-right" aria-hidden="true">
          {image ? (
            <img src={image} alt="" className="ah-hero-image" />
          ) : (
            <div className="ah-card">
              <div className="ah-card-art" />
              <div className="ah-card-shadow" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

AdaptableHeader.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  image: PropTypes.string,
};

// import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/homepage/AdaptableHeader.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=8b12d010"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
// import * as RefreshRuntime from "/@react-refresh";
// const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
// let prevRefreshReg;
// let prevRefreshSig;
// if (import.meta.hot && !inWebWorker) {
//   if (!window.$RefreshReg$) {
//     throw new Error(
//       "@vitejs/plugin-react can't detect preamble. Something is wrong."
//     );
//   }
//   prevRefreshReg = window.$RefreshReg$;
//   prevRefreshSig = window.$RefreshSig$;
//   window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx");
//   window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
// }
// import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=8b12d010"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
// import __vite__cjsImport4_propTypes from "/node_modules/.vite/deps/prop-types.js?v=8b12d010"; const PropTypes = __vite__cjsImport4_propTypes.__esModule ? __vite__cjsImport4_propTypes.default : __vite__cjsImport4_propTypes;
// import "/src/homepage/AdaptableHeader.css";
// export default function AdaptableHeader({
//   badge = "Business Listing",
//   title = "Profitable businesses ready for acquisition",
//   subtitle = "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.",
//   buttonLabel = "View all listing",
//   onButtonClick = () => {
//   },
//   image = null
// }) {
//   return /* @__PURE__ */ jsxDEV("header", { className: "ah-header", children: /* @__PURE__ */ jsxDEV("div", { className: "ah-inner", children: [
//     /* @__PURE__ */ jsxDEV("div", { className: "ah-left", children: [
//       badge && /* @__PURE__ */ jsxDEV("div", { className: "ah-label", children: /* @__PURE__ */ jsxDEV("span", { className: "ah-label-text", children: badge }, void 0, false, {
//         fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//         lineNumber: 48,
//         columnNumber: 15
//       }, this) }, void 0, false, {
//         fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//         lineNumber: 47,
//         columnNumber: 11
//       }, this),
//       /* @__PURE__ */ jsxDEV("h1", { className: "ah-title", children: title }, void 0, false, {
//         fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//         lineNumber: 52,
//         columnNumber: 11
//       }, this),
//       subtitle && /* @__PURE__ */ jsxDEV("p", { className: "ah-sub", children: subtitle }, void 0, false, {
//         fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//         lineNumber: 54,
//         columnNumber: 24
//       }, this),
//       buttonLabel && /* @__PURE__ */ jsxDEV("div", { className: "ah-cta-row", children: /* @__PURE__ */ jsxDEV("button", { className: "ah-btn ah-btn-outline", onClick: onButtonClick, children: [
//         /* @__PURE__ */ jsxDEV("span", { children: buttonLabel }, void 0, false, {
//           fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//           lineNumber: 59,
//           columnNumber: 17
//         }, this),
//         /* @__PURE__ */ jsxDEV(
//           "svg",
//           {
//             className: "ah-btn-icon",
//             xmlns: "http://www.w3.org/2000/svg",
//             width: "16",
//             height: "16",
//             viewBox: "0 0 24 24",
//             fill: "none",
//             "aria-hidden": "true",
//             children: /* @__PURE__ */ jsxDEV(
//               "path",
//               {
//                 d: "M5 12h14M13 5l7 7-7 7",
//                 stroke: "#152B5A",
//                 strokeWidth: "1.5",
//                 strokeLinecap: "round",
//                 strokeLinejoin: "round"
//               },
//               void 0,
//               false,
//               {
//                 fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//                 lineNumber: 69,
//                 columnNumber: 19
//               },
//               this
//             )
//           },
//           void 0,
//           false,
//           {
//             fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//             lineNumber: 60,
//             columnNumber: 17
//           },
//           this
//         )
//       ] }, void 0, true, {
//         fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//         lineNumber: 58,
//         columnNumber: 15
//       }, this) }, void 0, false, {
//         fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//         lineNumber: 57,
//         columnNumber: 11
//       }, this)
//     ] }, void 0, true, {
//       fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//       lineNumber: 45,
//       columnNumber: 9
//     }, this),
//     /* @__PURE__ */ jsxDEV("div", { className: "ah-right", "aria-hidden": "true", children: image ? /* @__PURE__ */ jsxDEV("img", { src: image, alt: "", className: "ah-hero-image" }, void 0, false, {
//       fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//       lineNumber: 85,
//       columnNumber: 11
//     }, this) : /* @__PURE__ */ jsxDEV("div", { className: "ah-card", children: [
//       /* @__PURE__ */ jsxDEV("div", { className: "ah-card-art" }, void 0, false, {
//         fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//         lineNumber: 88,
//         columnNumber: 15
//       }, this),
//       /* @__PURE__ */ jsxDEV("div", { className: "ah-card-shadow" }, void 0, false, {
//         fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//         lineNumber: 89,
//         columnNumber: 15
//       }, this)
//     ] }, void 0, true, {
//       fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//       lineNumber: 87,
//       columnNumber: 11
//     }, this) }, void 0, false, {
//       fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//       lineNumber: 83,
//       columnNumber: 9
//     }, this)
//   ] }, void 0, true, {
//     fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//     lineNumber: 43,
//     columnNumber: 7
//   }, this) }, void 0, false, {
//     fileName: "C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx",
//     lineNumber: 42,
//     columnNumber: 5
//   }, this);
// }
// _c = AdaptableHeader;
// AdaptableHeader.propTypes = {
//   badge: PropTypes.string,
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   buttonLabel: PropTypes.string,
//   onButtonClick: PropTypes.func,
//   image: PropTypes.string
// };
// var _c;
// $RefreshReg$(_c, "AdaptableHeader");
// if (import.meta.hot && !inWebWorker) {
//   window.$RefreshReg$ = prevRefreshReg;
//   window.$RefreshSig$ = prevRefreshSig;
// }
// if (import.meta.hot && !inWebWorker) {
//   RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
//     RefreshRuntime.registerExportsForReactRefresh("C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx", currentExports);
//     import.meta.hot.accept((nextExports) => {
//       if (!nextExports) return;
//       const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/rohan/OneDrive/Desktop/Emireq_Final_Website/landing page/src/homepage/AdaptableHeader.jsx", currentExports, nextExports);
//       if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
//     });
//   });
// }

// //# sourceMappingURL=data:application/json;base64,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b3BUeXBlcyIsIkFkYXB0YWJsZUhlYWRlciIsImJhZGdlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImJ1dHRvbkxhYmVsIiwib25CdXR0b25DbGljayIsImltYWdlIiwiX2MiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFkYXB0YWJsZUhlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBcIi4vQWRhcHRhYmxlSGVhZGVyLmNzc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFkYXB0YWJsZUhlYWRlclxyXG4gKiBBIHJlc3BvbnNpdmUsIHByb3AtZHJpdmVuIGhlcm8gaGVhZGVyIGNvbXBvbmVudCB0aGF0IHN1cHBvcnRzOlxyXG4gKiAtIEN1c3RvbSBiYWRnZSB0ZXh0XHJcbiAqIC0gQ3VzdG9tIG1haW4gdGl0bGUgYW5kIHN1YnRpdGxlXHJcbiAqIC0gQ3VzdG9tIGJ1dHRvbiBsYWJlbCBhbmQgY2xpY2sgaGFuZGxlclxyXG4gKiAtIE9wdGlvbmFsIHJpZ2h0LXNpZGUgaGVybyBpbWFnZSAoZmFsbGJhY2sgZGVjb3JhdGl2ZSBjYXJkIGlmIG5vdCBwcm92aWRlZClcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkYXB0YWJsZUhlYWRlcih7XHJcbiAgYmFkZ2UgPSBcIkJ1c2luZXNzIExpc3RpbmdcIixcclxuICB0aXRsZSA9IFwiUHJvZml0YWJsZSBidXNpbmVzc2VzIHJlYWR5IGZvciBhY3F1aXNpdGlvblwiLFxyXG4gIHN1YnRpdGxlID1cclxuICAgIFwiQ29tbW9kbyBuZWMgbWkgaWQgdWxsYW1jb3JwZXIgdml0YWUgYXVndWUgbmVxdWUgZGlzLiBOdW5jIGxhY2luaWEgdml2ZXJyYSBvcmNpIGRpYW0uIE5pYmggZXN0IHZpdGFlIHN1c3BlbmRpc3NlIHBhcnR1cmllbnQgc2VkIGxvcmVtIGV1LlwiLFxyXG4gIGJ1dHRvbkxhYmVsID0gXCJWaWV3IGFsbCBsaXN0aW5nXCIsXHJcbiAgb25CdXR0b25DbGljayA9ICgpID0+IHt9LFxyXG4gIGltYWdlID0gbnVsbCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImFoLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFoLWlubmVyXCI+XHJcbiAgICAgICAgey8qIExlZnQgY29udGVudCBjb2x1bW4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhaC1sZWZ0XCI+XHJcbiAgICAgICAgICB7YmFkZ2UgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFoLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWgtbGFiZWwtdGV4dFwiPntiYWRnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWgtdGl0bGVcIj57dGl0bGV9PC9oMT5cclxuXHJcbiAgICAgICAgICB7c3VidGl0bGUgJiYgPHAgY2xhc3NOYW1lPVwiYWgtc3ViXCI+e3N1YnRpdGxlfTwvcD59XHJcblxyXG4gICAgICAgICAge2J1dHRvbkxhYmVsICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhaC1jdGEtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhaC1idG4gYWgtYnRuLW91dGxpbmVcIiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntidXR0b25MYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFoLWJ0bi1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk01IDEyaDE0TTEzIDVsNyA3LTcgN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzE1MkI1QVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogUmlnaHQgdmlzdWFsIGNvbHVtbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFoLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiYWgtaGVyby1pbWFnZVwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFoLWNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFoLWNhcmQtYXJ0XCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFoLWNhcmQtc2hhZG93XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbkFkYXB0YWJsZUhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgYmFkZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYnV0dG9uTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25CdXR0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvcm9oYW4vT25lRHJpdmUvRGVza3RvcC9FbWlyZXFfRmluYWxfV2Vic2l0ZS9sYW5kaW5nIHBhZ2Uvc3JjL2hvbWVwYWdlL0FkYXB0YWJsZUhlYWRlci5qc3gifQ==