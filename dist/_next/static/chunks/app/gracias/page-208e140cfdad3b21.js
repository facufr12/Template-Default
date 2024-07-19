(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [295],
  {
    4403: function (A, e, t) {
      Promise.resolve().then(t.bind(t, 3985)),
        Promise.resolve().then(t.t.bind(t, 8173, 23)),
        Promise.resolve().then(t.bind(t, 8729));
    },
    3985: function (A, e, t) {
      "use strict";
      t.d(e, {
        default: function () {
          return d;
        },
        A: function () {
          return c;
        },
      });
      var s = t(7437),
        i = t(7138),
        l = t(2265),
        a = t(6648),
        n = {
          src: "/Medicals-Template-Facundo/Dist/_next/static/media/logomedicals.f6e9f892.png",
          height: 52,
          width: 236,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQElEQVR4nGN8Yd+6kIGB4T8QXwBiNSDjBOPff7r/RLhuM379rQxSEAqU+AzEHED8ieE/EDAysjD+/sfKwMzIDADzYBY2SVEfewAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        },
        r = t(1942);
      t(7050);
      let c = () => {
          let A = document.getElementById("formid");
          A && A.scrollIntoView({ behavior: "smooth", block: "start" });
        },
        o = (A) => {
          let { href: e, children: t, onClick: l } = A;
          return (0, s.jsx)("li", {
            className: "relative",
            children: (0, s.jsx)(i.default, {
              href: e,
              legacyBehavior: !0,
              children: (0, s.jsx)("a", { onClick: l, children: t }),
            }),
          });
        };
      var d = () => {
        let [A, e] = (0, l.useState)(!1),
          t = () => {
            e(!1);
          };
        return (0, s.jsxs)("nav", {
          className: "w-full  bg-white shadow-lg fixed top-0 z-50",
          children: [
            (0, s.jsx)("div", { className: "bg-[#E82E8A] h-3 w-full" }),
            " ",
            (0, s.jsxs)("div", {
              className:
                "max-w-screen-lg mx-auto px-4 py-2 md:py-4 flex items-center justify-between relative",
              children: [
                (0, s.jsx)("div", {
                  className: "flex-shrink-0",
                  children: (0, s.jsx)("div", {
                    className: "p-4 sm:p-0",
                    children: (0, s.jsx)(a.default, {
                      src: n,
                      alt: "Logo",
                      width: 150,
                      height: 100,
                    }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex-grow text-black text-center md:text-right uppercase",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "flex justify-center items-center md:hidden absolute right-4 top-0 bottom-0",
                      children: (0, s.jsx)("button", {
                        onClick: () => {
                          e(!A);
                        },
                        className:
                          "text-gray-900 focus:outline-none text-2xl md:text-base hidden md:block",
                        children: A
                          ? (0, s.jsx)(r.aHS, {})
                          : (0, s.jsx)(r.Fm7, {}),
                      }),
                    }),
                    (0, s.jsxs)("ul", {
                      className: "hidden",
                      children: [
                        (0, s.jsx)(o, {
                          href: "#",
                          onClick: t,
                          children: "Sucursales",
                        }),
                        (0, s.jsx)(o, {
                          href: "#",
                          onClick: t,
                          children: "Quienes Somos",
                        }),
                        (0, s.jsx)(o, {
                          href: "#",
                          onClick: t,
                          children: "Cartilla",
                        }),
                      ],
                    }),
                  ],
                }),
                " Ver Mas",
                (0, s.jsx)("button", {
                  onClick: c,
                  className:
                    "px-6 ml-1 py-4 md:py-3 hidden md:block rounded-full bg-[#E82E8A] text-white text-xs font-bold tracking-widest uppercase transform hover:scale-105 hover:bg-gray-700 transition-colors duration-200",
                  children: "Solicit\xe1 Asesor",
                }),
              ],
            }),
          ],
        });
      };
    },
    7050: function () {},
    8729: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/Medicals-Template-Facundo/Dist/_next/static/media/familia4.a1701ee8.jpg",
          height: 2267,
          width: 3400,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAmAAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAADI//EAB0QAAMAAAcAAAAAAAAAAAAAAAECAwAEEhUhIkH/2gAIAQEAAT8AzsNvnaMq1ENC9A5BLMOSze4//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEv/aAAgBAgEBPwC4aZ//xAAWEQADAAAAAAAAAAAAAAAAAAAAAjH/2gAIAQMBAT8AWH//2Q==",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
  },
  function (A) {
    A.O(0, [431, 699, 615, 971, 23, 744], function () {
      return A((A.s = 4403));
    }),
      (_N_E = A.O());
  },
]);
