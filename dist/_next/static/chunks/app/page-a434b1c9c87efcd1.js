(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    2541: function (e, a, s) {
      Promise.resolve().then(s.t.bind(s, 7050, 23)),
        Promise.resolve().then(s.bind(s, 2559)),
        Promise.resolve().then(s.bind(s, 3985)),
        Promise.resolve().then(s.bind(s, 4471)),
        Promise.resolve().then(s.t.bind(s, 8173, 23)),
        Promise.resolve().then(s.t.bind(s, 231, 23));
    },
    2559: function (e, a, s) {
      "use strict";
      s.d(a, {
        SignupFormDemo: function () {
          return h;
        },
      });
      var n = s(7437),
        o = s(2265),
        l = s(5815),
        t = s(7880);
      let i = o.forwardRef((e, a) => {
        let { className: s, ...o } = e;
        return (0, n.jsx)(l.f, {
          ref: a,
          className: (0, t.cn)(
            "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            s
          ),
          ...o,
        });
      });
      i.displayName = l.f.displayName;
      var r = s(8646),
        c = s(5282),
        d = s(6550),
        x = s(4924);
      function u() {
        let e = (0, r._)([
          "\n        radial-gradient(\n          ",
          " circle at ",
          "px ",
          "px,\n          var(--pink-500),\n          transparent 80%\n        )\n      ",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      let p = o.forwardRef((e, a) => {
        let { className: s, type: l, ...i } = e,
          [r, p] = o.useState(!1),
          m = (0, c.c)(0),
          h = (0, c.c)(0);
        return (0, n.jsx)(d.E.div, {
          style: { background: (0, x.Y)(u(), r ? "100px" : "0px", m, h) },
          onMouseMove: function (e) {
            let { currentTarget: a, clientX: s, clientY: n } = e,
              { left: o, top: l } = a.getBoundingClientRect();
            m.set(s - o), h.set(n - l);
          },
          onMouseEnter: () => p(!0),
          onMouseLeave: () => p(!1),
          className: "p-[2px] rounded-lg transition duration-300 group/input",
          children: (0, n.jsx)("input", {
            type: l,
            className: (0, t.cn)(
              "flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent \n          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600\n           disabled:cursor-not-allowed disabled:opacity-50\n           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n           group-hover/input:shadow-none transition duration-400\n           ",
              s
            ),
            ref: a,
            ...i,
          }),
        });
      });
      p.displayName = "Input";
      var m = s(6463);
      function h() {
        let e = (0, o.useRef)(null),
          [a, s] = (0, o.useState)(!1),
          [l, t] = (0, o.useState)(null),
          r = (0, m.useRouter)(),
          c = async (a) => {
            a.preventDefault(), s(!0);
            try {
              let a = new FormData(e.current),
                s = await fetch(
                  "https://script.google.com/macros/s/AKfycbxI-4huVNr9h3Tb1i4vD2X9n4MYeCc1nEAY-Fdh-wz1iwV1iJfrif0f5yLRxxQg9Vs82g/exec",
                  { method: "POST", body: a }
                );
              if ((console.log("Response received"), s.ok))
                alert("El formulario se envi\xf3 correctamente"),
                  setTimeout(() => {
                    r.push("/gracias");
                  }, 1e3);
              else throw Error("Ocurri\xf3 un error al enviar el formulario.");
            } catch (e) {
              t(e.message);
            } finally {
              s(!1);
            }
          };
        return (0, n.jsxs)("div", {
          id: "formid",
          className:
            "max-w-md mt-10 mb-8  w-full mx-auto md:rounded-lg rounded-none md:rounded-3xl p-2 md:p-8 shadow-input bg-white dark:bg-black",
          children: [
            (0, n.jsx)("h2", {
              className:
                "font-bold text-xl lg:text-white-900 text-neutral-800 dark:text-neutral-200",
              children: "Solicit\xe1 Asesor",
            }),
            (0, n.jsx)("p", {
              className:
                "text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300",
              children: "Nos pondremos en contacto a la brevedad",
            }),
            (0, n.jsxs)("form", {
              ref: e,
              action: "#",
              method: "POST",
              className: "my-10",
              onSubmit: c,
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4",
                  children: [
                    (0, n.jsxs)(g, {
                      children: [
                        (0, n.jsx)(i, {
                          htmlFor: "name",
                          children: "Nombre y Apellido",
                        }),
                        (0, n.jsx)(p, {
                          type: "text",
                          id: "name",
                          name: "name",
                          placeholder: "Jose Gonzalez",
                          required: !0,
                        }),
                      ],
                    }),
                    (0, n.jsxs)(g, {
                      children: [
                        (0, n.jsx)(i, {
                          htmlFor: "phone",
                          children: "Whatsapp",
                        }),
                        (0, n.jsx)(p, {
                          type: "tel",
                          id: "phone",
                          name: "phone",
                          placeholder: "11-5555-4444",
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)(g, {
                  className: "mb-4",
                  children: [
                    (0, n.jsx)(i, { htmlFor: "email", children: "Email " }),
                    (0, n.jsx)(p, {
                      type: "email",
                      id: "email",
                      name: "email",
                      className: "mobile-form-input",
                      placeholder: "Usuario@hotmail.com",
                      required: !0,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4",
                  children: [
                    (0, n.jsxs)(g, {
                      className: "mb-4",
                      children: [
                        (0, n.jsx)(i, {
                          htmlFor: "edad-titular",
                          className:
                            "block text-gray-700 text-sm font-medium mb-2",
                          children: "Localidad",
                        }),
                        (0, n.jsx)(i, {
                          children: (0, n.jsxs)("select", {
                            id: "localidad",
                            name: "localidad",
                            className:
                              "block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",
                            style: { height: "2.5rem" },
                            children: [
                              (0, n.jsx)("option", {
                                value: "consulta",
                                children: "Seleccione Localidad",
                              }),
                              (0, n.jsx)("option", {
                                value: "CABA",
                                children: "CABA",
                              }),
                              (0, n.jsx)("option", {
                                value: "Almirante Brown",
                                children: "ALMIRANTE BROWN",
                              }),
                              (0, n.jsx)("option", {
                                value: "Avellaneda",
                                children: "AVELLANEDA",
                              }),
                              (0, n.jsx)("option", {
                                value: "Berazategui",
                                children: "BERAZATEGUI",
                              }),
                              (0, n.jsx)("option", {
                                value: "Esteban Echeverr\xeda",
                                children: "ESTEBAN ECHEVERR\xcdA",
                              }),
                              (0, n.jsx)("option", {
                                value: "Ezeiza",
                                children: "EZEIZA",
                              }),
                              (0, n.jsx)("option", {
                                value: "Florencio Varela",
                                children: "FLORENCIO VARELA",
                              }),
                              (0, n.jsx)("option", {
                                value: "General San Mart\xedn",
                                children: "GENERAL SAN MARTIN",
                              }),
                              (0, n.jsx)("option", {
                                value: "General Rodriguez",
                                children: "GENERAL RODRIGUEZ",
                              }),
                              (0, n.jsx)("option", {
                                value: "Hurlingham",
                                children: "HURLINGHAM",
                              }),
                              (0, n.jsx)("option", {
                                value: "Ituzaing\xf3",
                                children: "ITUZAING\xd3",
                              }),
                              (0, n.jsx)("option", {
                                value: "Jos\xe9 C. Paz",
                                children: "JOS\xc9 C. PAZ",
                              }),
                              (0, n.jsx)("option", {
                                value: "La Matanza",
                                children: "LA MATANZA",
                              }),
                              (0, n.jsx)("option", {
                                value: "Lan\xfas",
                                children: "LAN\xdaS",
                              }),
                              (0, n.jsx)("option", {
                                value: "Lomas de Zamora",
                                children: "LOMAS DE ZAMORA",
                              }),
                              (0, n.jsx)("option", {
                                value: "Malvinas Argentinas",
                                children: "MALVINAS ARGENTINAS",
                              }),
                              (0, n.jsx)("option", {
                                value: "Marcos Paz",
                                children: "MARCOS PAZ",
                              }),
                              (0, n.jsx)("option", {
                                value: "Merlo",
                                children: "MERLO",
                              }),
                              (0, n.jsx)("option", {
                                value: "Moreno",
                                children: "MORENO",
                              }),
                              (0, n.jsx)("option", {
                                value: "Mor\xf3n",
                                children: "MOR\xd3N",
                              }),
                              (0, n.jsx)("option", {
                                value: "Pilar",
                                children: "PILAR",
                              }),
                              (0, n.jsx)("option", {
                                value: "Quilmes",
                                children: "QUILMES",
                              }),
                              (0, n.jsx)("option", {
                                value: "San Fernando",
                                children: "SAN FERNANDO",
                              }),
                              (0, n.jsx)("option", {
                                value: "San Isidro",
                                children: "SAN ISIDRO",
                              }),
                              (0, n.jsx)("option", {
                                value: "San Miguel",
                                children: "SAN MIGUEL",
                              }),
                              (0, n.jsx)("option", {
                                value: "Tigre",
                                children: "TIGRE",
                              }),
                              (0, n.jsx)("option", {
                                value: "Tres de Febrero",
                                children: "TRES DE FEBRERO",
                              }),
                              (0, n.jsx)("option", {
                                value: "Vicente L\xf3pez",
                                children: "VICENTE L\xd3PEZ",
                              }),
                              (0, n.jsx)("option", {
                                value: "Otra",
                                children: "OTRA",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)(g, {
                      className: "mb-4 relative",
                      children: [
                        (0, n.jsx)(i, {
                          htmlFor: "edad-titular",
                          className:
                            "block text-gray-700 text-sm font-medium mb-2",
                          children: "Edad Del Titular",
                        }),
                        (0, n.jsxs)("select", {
                          id: "edad-titular",
                          name: "edad-titular",
                          className:
                            "block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",
                          children: [
                            (0, n.jsx)("option", {
                              value: "edad-titular",
                              children: "Seleccione Edad",
                            }),
                            (0, n.jsx)("option", {
                              value: "18 a\xf1os",
                              children: "18 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "19 a\xf1os",
                              children: "19 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "20 a\xf1os",
                              children: "20 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "21 a\xf1os",
                              children: "21 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "22 a\xf1os",
                              children: "22 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "23 a\xf1os",
                              children: "23 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "24 a\xf1os",
                              children: "24 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "25 a\xf1os",
                              children: "25 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "26 a\xf1os",
                              children: "26 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "27 a\xf1os",
                              children: "27 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "28 a\xf1os",
                              children: "28 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "29 a\xf1os",
                              children: "29 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "30 a\xf1os",
                              children: "30 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "31 a\xf1os",
                              children: "31 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "32 a\xf1os",
                              children: "32 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "33 a\xf1os",
                              children: "33 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "34 a\xf1os",
                              children: "34 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "35 a\xf1os",
                              children: "35 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "36 a\xf1os",
                              children: "36 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "37 a\xf1os",
                              children: "37 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "38 a\xf1os",
                              children: "38 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "39 a\xf1os",
                              children: "39 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "40 a\xf1os",
                              children: "40 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "41 a\xf1os",
                              children: "41 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "42 a\xf1os",
                              children: "42 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "43 a\xf1os",
                              children: "43 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "44 a\xf1os",
                              children: "44 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "45 a\xf1os",
                              children: "45 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "46 a\xf1os",
                              children: "46 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "47 a\xf1os",
                              children: "47 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "48 a\xf1os",
                              children: "48 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "49 a\xf1os",
                              children: "49 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "50 a\xf1os",
                              children: "50 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "51 a\xf1os",
                              children: "51 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "52 a\xf1os",
                              children: "52 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "53 a\xf1os",
                              children: "53 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "54 a\xf1os",
                              children: "54 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "55 a\xf1os",
                              children: "55 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "56 a\xf1os",
                              children: "56 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "57 a\xf1os",
                              children: "57 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "58 a\xf1os",
                              children: "58 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "59 a\xf1os",
                              children: "59 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "60 a\xf1os",
                              children: "60 a\xf1os",
                            }),
                            (0, n.jsx)("option", {
                              value: "61 a 65 a\xf1os",
                              children: "61 a 65 a\xf1os",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4",
                  children: [
                    (0, n.jsxs)(g, {
                      className: "mb-4",
                      children: [
                        (0, n.jsx)(i, {
                          htmlFor: "tipo-afiliacion",
                          className:
                            "block text-gray-700 text-sm font-medium mb-2",
                          children: "Tipo De Afiliaci\xf3n",
                        }),
                        (0, n.jsxs)("select", {
                          id: "tipo-afiliacion",
                          name: "tipo-afiliacion",
                          className:
                            "block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",
                          children: [
                            (0, n.jsx)("option", {
                              value: "tipo-afiliacion",
                              children: "Seleccione Afiliaci\xf3n",
                            }),
                            (0, n.jsx)("option", {
                              value: "particular-autonomo",
                              children: "PARTICULAR / AUT\xd3NOMO",
                            }),
                            (0, n.jsx)("option", {
                              value: "con-recibo-sueldo",
                              children: "CON RECIBO DE SUELDO",
                            }),
                            (0, n.jsx)("option", {
                              value: "monotributista",
                              children: "MONOTRIBUTISTA",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(g, {
                      className: "mb-12",
                      children: [
                        (0, n.jsx)(i, {
                          htmlFor: "grupo-familiar",
                          className:
                            "block text-gray-700 text-sm font-medium mb-2",
                          children: "Grupo Familiar",
                        }),
                        (0, n.jsxs)("select", {
                          id: "grupo-familiar",
                          name: "grupo-familiar",
                          className:
                            "block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",
                          children: [
                            (0, n.jsx)("option", {
                              value: "grupo-familiar",
                              children: "Seleccione Grupo ",
                            }),
                            (0, n.jsx)("option", {
                              value: "individual",
                              children: "INDIVIDUAL",
                            }),
                            (0, n.jsx)("option", {
                              value: "matrimonio",
                              children: "MATRIMONIO",
                            }),
                            (0, n.jsx)("option", {
                              value: "matrimonio-1-hijo",
                              children: "MATRIMONIO + 1 HIJO",
                            }),
                            (0, n.jsx)("option", {
                              value: "matrimonio-2-hijos",
                              children: "MATRIMONIO + 2 HIJOS",
                            }),
                            (0, n.jsx)("option", {
                              value: "matrimonio-3-hijos",
                              children: "MATRIMONIO + 3 HIJOS",
                            }),
                            (0, n.jsx)("option", {
                              value: "individual-1-hijo",
                              children: "INDIVIDUAL + 1 HIJO",
                            }),
                            (0, n.jsx)("option", {
                              value: "individual-2-hijos",
                              children: "INDIVIDUAL + 2 HIJOS",
                            }),
                            (0, n.jsx)("option", {
                              value: "individual-3-hijos",
                              children: "INDIVIDUAL + 3 HIJOS",
                            }),
                            (0, n.jsx)("option", {
                              value: "otro",
                              children: "OTRO",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                l &&
                  (0, n.jsxs)("div", {
                    className: "text-red-500 text-sm mt-2 mb-4",
                    children: [
                      "Ocurri\xf3 un error al enviar el formulario: ",
                      l,
                    ],
                  }),
                (0, n.jsxs)("button", {
                  className:
                    "bg-[#E82E8A]  relative group/btn w-full text-white rounded-full h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--pink-600)_inset,0px_-1px_0px_0px_var(--pink-400)_inset] ".concat(
                      a ? "opacity-50 cursor-not-allowed" : ""
                    ),
                  type: "submit",
                  disabled: a,
                  children: [
                    a ? "Enviando..." : "Solicit\xe1 un Asesor →",
                    (0, n.jsx)(f, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let f = () =>
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("span", {
                className:
                  "group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent",
              }),
              (0, n.jsx)("span", {
                className:
                  "group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent",
              }),
            ],
          }),
        g = (e) => {
          let { children: a, className: s } = e;
          return (0, n.jsx)("div", {
            className: (0, t.cn)("flex flex-col space-y-2 w-full", s),
            children: a,
          });
        };
    },
    3985: function (e, a, s) {
      "use strict";
      s.d(a, {
        default: function () {
          return x;
        },
        A: function () {
          return c;
        },
      });
      var n = s(7437),
        o = s(7138),
        l = s(2265),
        t = s(6648),
        i = {
          src: "/_next/static/media/logomedicals.f6e9f892.png",
          height: 52,
          width: 236,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQElEQVR4nGN8Yd+6kIGB4T8QXwBiNSDjBOPff7r/RLhuM379rQxSEAqU+AzEHED8ieE/EDAysjD+/sfKwMzIDADzYBY2SVEfewAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        },
        r = s(1942);
      s(7050);
      let c = () => {
          let e = document.getElementById("formid");
          e && e.scrollIntoView({ behavior: "smooth", block: "start" });
        },
        d = (e) => {
          let { href: a, children: s, onClick: l } = e;
          return (0, n.jsx)("li", {
            className: "relative",
            children: (0, n.jsx)(o.default, {
              href: a,
              legacyBehavior: !0,
              children: (0, n.jsx)("a", { onClick: l, children: s }),
            }),
          });
        };
      var x = () => {
        let [e, a] = (0, l.useState)(!1),
          s = () => {
            a(!1);
          };
        return (0, n.jsxs)("nav", {
          className: "w-full  bg-white shadow-lg fixed top-0 z-50",
          children: [
            (0, n.jsx)("div", { className: "bg-[#E82E8A] h-3 w-full" }),
            " ",
            (0, n.jsxs)("div", {
              className:
                "max-w-screen-lg mx-auto px-4 py-2 md:py-4 flex items-center justify-between relative",
              children: [
                (0, n.jsx)("div", {
                  className: "flex-shrink-0",
                  children: (0, n.jsx)("div", {
                    className: "p-4 sm:p-0",
                    children: (0, n.jsx)(t.default, {
                      src: i,
                      alt: "Logo",
                      width: 150,
                      height: 100,
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex-grow text-black text-center md:text-right uppercase",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "flex justify-center items-center md:hidden absolute right-4 top-0 bottom-0",
                      children: (0, n.jsx)("button", {
                        onClick: () => {
                          a(!e);
                        },
                        className:
                          "text-gray-900 focus:outline-none text-2xl md:text-base hidden md:block",
                        children: e
                          ? (0, n.jsx)(r.aHS, {})
                          : (0, n.jsx)(r.Fm7, {}),
                      }),
                    }),
                    (0, n.jsxs)("ul", {
                      className: "hidden",
                      children: [
                        (0, n.jsx)(d, {
                          href: "#",
                          onClick: s,
                          children: "Sucursales",
                        }),
                        (0, n.jsx)(d, {
                          href: "#",
                          onClick: s,
                          children: "Quienes Somos",
                        }),
                        (0, n.jsx)(d, {
                          href: "#",
                          onClick: s,
                          children: "Cartilla",
                        }),
                      ],
                    }),
                  ],
                }),
                " Ver Mas",
                (0, n.jsx)("button", {
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
    4471: function (e, a, s) {
      "use strict";
      s.d(a, {
        WobbleCardDemo: function () {
          return h;
        },
      });
      var n = s(7437),
        o = s(2265),
        l = s(6550),
        t = s(7880);
      let i = (e) => {
        let {
            children: a,
            containerClassName: s,
            className: i,
            NoiseComponent: r,
          } = e,
          [c, d] = (0, o.useState)({ x: 0, y: 0 }),
          [x, u] = (0, o.useState)(!1);
        return (0, n.jsx)(l.E.section, {
          onMouseMove: (e) => {
            let { clientX: a, clientY: s } = e,
              n = e.currentTarget.getBoundingClientRect();
            d({
              x: (a - (n.left + n.width / 2)) / 20,
              y: (s - (n.top + n.height / 2)) / 20,
            });
          },
          onMouseEnter: () => u(!0),
          onMouseLeave: () => {
            u(!1), d({ x: 0, y: 0 });
          },
          style: {
            transform: x
              ? "translate3d("
                  .concat(c.x, "px, ")
                  .concat(c.y, "px, 0) scale3d(1, 1, 1)")
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          },
          className: (0, t.cn)(
            "mx-auto w-full bg-indigo-800  relative rounded-2xl overflow-hidden",
            s
          ),
          children: (0, n.jsx)("div", {
            className:
              "relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden",
            style: {
              boxShadow:
                "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
            },
            children: (0, n.jsxs)(l.E.div, {
              style: {
                transform: x
                  ? "translate3d("
                      .concat(-c.x, "px, ")
                      .concat(-c.y, "px, 0) scale3d(1.03, 1.03, 1)")
                  : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                transition: "transform 0.1s ease-out",
              },
              className: (0, t.cn)("h-full px-4 py-20 sm:px-10", i),
              children: [(0, n.jsx)(r, {}), a],
            }),
          }),
        });
      };
      var r = s(1942),
        c = s(3985);
      let d = () =>
          (0, n.jsx)("div", {
            className:
              "absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]",
            style: {
              backgroundImage: "url(/MD150.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            },
          }),
        x = () =>
          (0, n.jsx)("div", {
            className:
              "absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]",
            style: {
              backgroundImage: "url(/MD250.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            },
          }),
        u = () =>
          (0, n.jsx)("div", {
            className:
              "absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]",
            style: {
              backgroundImage: "url(/MD350.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            },
          }),
        p = () =>
          (0, n.jsx)("div", {
            className:
              "absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]",
            style: {
              backgroundImage: "url(/MD450.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            },
          }),
        m = () =>
          (0, n.jsx)("div", {
            className:
              "absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]",
            style: {
              backgroundImage: "url(/noise.webp)",
              backgroundSize: "30%",
            },
          });
      function h() {
        return (0, n.jsxs)("div", {
          className: "grid grid-cols-12 gap-4 mt-4 max-w-7xl mx-auto",
          children: [
            (0, n.jsx)(i, {
              NoiseComponent: m,
              containerClassName:
                "col-span-12 lg:col-span-6 bg-pink-800 min-h-[500px] lg:min-h-[400px]",
              children: (0, n.jsxs)("div", {
                className: "max-w-xs mx-auto lg:max-w-full",
                children: [
                  (0, n.jsx)("h2", {
                    className:
                      "text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white",
                    children: "Medical’s Medicina Prepaga",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "mt-4 text-left text-sm lg:text-base text-neutral-200 space-y-2",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)(r.l_A, { className: "mr-2" }),
                          " Planes de Salud 100% accesibles.",
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)(r.l_A, { className: "mr-2" }),
                          " Profesionales de primer nivel.",
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)(r.l_A, { className: "mr-2" }),
                          " Centros m\xe9dicos de avanzada.",
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)(r.l_A, { className: "mr-2" }),
                          " M\xe9dicos a domicilio las 24 hs. los 365 d\xedas del a\xf1o.",
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)(r.l_A, { className: "mr-2" }),
                          " Descuentos en medicamentos.",
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)(r.l_A, { className: "mr-2" }),
                          " Recupero de aportes de Obra Social para empleados.",
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, n.jsx)(r.l_A, { className: "mr-2" }),
                          " Atenci\xf3n en los m\xe1s modernos sanatorios y cl\xednicas C.A.B.A. y G.B.A.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsxs)(i, {
              NoiseComponent: m,
              containerClassName: "col-span-12 lg:col-span-6",
              children: [
                (0, n.jsx)("h2", {
                  className:
                    "text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white",
                  children:
                    "Medical’s es una empresa de salud fundada hace m\xe1s de 35 a\xf1os por profesionales de la medicina.",
                }),
                (0, n.jsx)("p", {
                  className:
                    "mt-4 text-left text-sm lg:text-base text-neutral-200",
                  children:
                    "Esto nos ha permitido tener un perfil m\xe9dico antes que comercial d\xe1ndole fuerza y sustento a nuestra filosof\xeda \xabMEDICINA PARA TODOS\xbb.",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className:
                "col-span-12 flex flex-col lg:flex-row justify-center  gap-4 mt-4 mr",
              children: [
                (0, n.jsx)("a", {
                  className: "flex-1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, n.jsxs)(i, {
                    NoiseComponent: d,
                    containerClassName: "bg-gray-400 h-[420px] lg:w-[320px]",
                    children: [
                      (0, n.jsx)("h2", {
                        onClick: c.A,
                        className:
                          "px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200",
                        style: { fontSize: "18px", fontWeight: "bold" },
                        children: "Plan MD150",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col justify-center items-center h-full",
                        children: [
                          (0, n.jsx)("p", {
                            className: "text-sm text-center",
                            children:
                              "Permite un acceso integral a todos los servicios de nuestra Red de Prestadores, logrando un equilibrio perfecto entre precio y calidad de servicio.",
                          }),
                          (0, n.jsx)("button", {
                            onClick: () =>
                              (window.location.href =
                                "https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD150"),
                            className:
                              "px-12 py-4 mt-6 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-gray-200 transition-colors duration-200",
                            children: "Ver Mas",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("a", {
                  className: "flex-1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, n.jsxs)(i, {
                    NoiseComponent: x,
                    containerClassName: "bg-blue-400 h-[420px] lg:w-[320px]",
                    children: [
                      (0, n.jsx)("h2", {
                        onClick: c.A,
                        className:
                          "px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200",
                        style: { fontSize: "18px", fontWeight: "bold" },
                        children: "Plan MD250",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col justify-center items-center h-full",
                        children: [
                          (0, n.jsx)("p", {
                            className: "text-sm text-center",
                            children:
                              "Ofrece una combinaci\xf3n equilibrada de costos asequibles y coberturas, que te permite acceder a una amplia gama de profesionales y servicios m\xe9dicos ajustados a tu necesidad.",
                          }),
                          (0, n.jsx)("button", {
                            onClick: () =>
                              (window.location.href =
                                "https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD250"),
                            className:
                              " mt-6 px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-400 transition-colors duration-200",
                            children: "Ver Mas",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("a", {
                  className: "flex-1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, n.jsxs)(i, {
                    NoiseComponent: u,
                    containerClassName: "bg-blue-900 h-[420px] lg:w-[320px]",
                    children: [
                      (0, n.jsx)("h2", {
                        onClick: c.A,
                        className:
                          "px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200",
                        style: { fontSize: "18px", fontWeight: "bold" },
                        children: "Plan MD350",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col justify-center items-center h-full",
                        children: [
                          (0, n.jsx)("p", {
                            className: "text-sm text-center",
                            children:
                              "Amplia cartilla con especialistas, sanatorios, cl\xednicas y centros m\xe9dicos a tu disposici\xf3n.",
                          }),
                          (0, n.jsx)("button", {
                            onClick: () =>
                              (window.location.href =
                                "https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD350"),
                            className:
                              " mt-6 px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-blue-800  transition-colors duration-200",
                            children: "Ver Mas",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("a", {
                  className: "flex-1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, n.jsxs)(i, {
                    NoiseComponent: p,
                    containerClassName: "bg-gray-900 h-[420px] lg:w-[320px]",
                    children: [
                      (0, n.jsx)("h2", {
                        onClick: c.A,
                        className:
                          "px-12 py-4 rounded-full bg-[transparent] font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200",
                        style: { fontSize: "18px", fontWeight: "bold" },
                        children: "Plan MD450",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col justify-center items-center h-full",
                        children: [
                          (0, n.jsx)("p", {
                            className: "text-sm text-center",
                            children:
                              "Cartilla m\xe9dica premium, atenci\xf3n personalizada y la m\xe1s amplia cobertura prestacional geogr\xe1fica con los mejores est\xe1ndares de Calidad.",
                          }),
                          (0, n.jsx)("button", {
                            onClick: () =>
                              (window.location.href =
                                "https://medicals.ar/planes-medicina-prepaga/cotizar/index.html#plan-MD450"),
                            className:
                              " mt-6 px-12 py-4 rounded-full bg-[#E82E8A] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-gray-800 transition-colors duration-200",
                            children: "Ver Mas",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    7880: function (e, a, s) {
      "use strict";
      s.d(a, {
        cn: function () {
          return l;
        },
      });
      var n = s(4839),
        o = s(6164);
      function l() {
        for (var e = arguments.length, a = Array(e), s = 0; s < e; s++)
          a[s] = arguments[s];
        return (0, o.m6)((0, n.W)(a));
      }
    },
    7050: function () {},
  },
  function (e) {
    e.O(0, [431, 699, 615, 186, 971, 23, 744], function () {
      return e((e.s = 2541));
    }),
      (_N_E = e.O());
  },
]);
