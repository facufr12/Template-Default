import React from "react";

const Footer = () => {
  // Variables para el footer
  const footer = {
    prepagatitle: "prepagatitle",
    footercalle: "calle x",
    footerdireccion: "piso x",
    footertelefono: "telefono x",
    footeremail: "emailx@hotmail.com",
    textfooter: "text footer",
    paginawebfooter: " htts://paginaweb.com.ar"
  };
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-49b719d3 elementor-section-height-min-height elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
        data-id="49b719d3"
        data-element_type="section"
        data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
        style={{
          padding: "40px",
          width: "100%",
          left: "0px",
          backgroundColor: "#1f2531"
        }}
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d876cc8"
            data-id="d876cc8"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-bbc9e8f elementor-widget elementor-widget-text-editor"
                data-id="bbc9e8f"
                data-element_type="widget"
                data-widget_type="text-editor.default"
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  width: "100%"
                }}
              >
                <div className="elementor-widget-container">
                  © {footer.prepagatitle} {currentYear} – Todos los derechos
                  reservados –{footer.footercalle} – {footer.footerdireccion} –
                  (011) {footer.footertelefono} –{" "}
                  <a
                    href="mailto:info@medicals.ar"
                    style={{ color: "#e82e8a" }}
                  >
                    <br></br>
                    {footer.footeremail}
                  </a>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-616df7e5 elementor-widget elementor-widget-text-editor"
                data-id="616df7e5"
                data-element_type="widget"
                data-widget_type="text-editor.default"
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  width: "100%",
                  padding: "10px"
                }}
              >
                <div className="elementor-widget-container">
                  <p>
                    {footer.textfooter} <br></br>
                    <a
                      style={{ color: "#e82e8a" }}
                      href="https://www.argentina.gob.ar/sssalud"
                      target="_blank"
                      rel="noopener"
                    >
                      {footer.paginawebfooter}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
