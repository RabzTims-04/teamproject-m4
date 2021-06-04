import { Navbar } from "react-bootstrap";

const Footer = () => {
  
  const style = { fontSize: "10px" };
  

  return (
    <Navbar>
      <div className="container footer d-flex text-white supermargin justify-content-center">
        <div className="row px-3 fontrob">
          <div className="col-6 col-md-3 no-gutter">
            <ul className="list-unstyled">
              <li className="underlined text-muted" style={style}>
                Audio and Subtitles
              </li>
              <li className="underlined text-muted" style={style}>
                Media Center
              </li>
              <li className="underlined text-muted" style={style}>
                Privacy
              </li>
              <li className="underlined text-muted" style={style}>
                Contact us
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 no-gutter">
            <ul className="list-unstyled">
              <li className="underlined text-muted" style={style}>
                Audio Description
              </li>
              <li className="underlined text-muted" style={style}>
                Investor Relations
              </li>
              <li className="underlined text-muted" style={style}>
                Legal Notices
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 no-gutter">
            <ul className="list-unstyled">
              <li className="underlined text-muted" style={style}>
                Help Center
              </li>
              <li className="underlined text-muted" style={style}>
                Jobs
              </li>
              <li className="underlined text-muted" style={style}>
                Cookie Preferences
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 no-gutter">
            <ul className="list-unstyled">
              <li className="underlined text-muted" style={style}>
                Gift Cards
              </li>
              <li className="underlined text-muted" style={style}>
                Terms of Use
              </li>
              <li className="underlined text-muted" style={style}>
                Corporate Information
              </li>
            </ul>
          </div>
          <ul className="col-12 no-pad">
            <div className=" button-footer my-2 text-muted" style={style}>
              Service Code
            </div>
          </ul>
          <div className=" button-footer mb-5 text-muted" style={style}>
            &copy; 1997-2021 Netflix, Inc.
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Footer;
