import { devto, github, linkedin, upwork } from "../svg/paths";

export default function Footer() {
  return (
    <div className="w95 flex-box-row sp-between mauto align-center">
      <div className="flex-box-row sp-between w10">
        <a
          href="https://www.linkedin.com/in/abdul-ahad-dar-0561ab34b/"
          target="_blank"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={linkedin}
              fill="white"
            />
          </svg>
        </a>
        <a
          href="https://github.com/Programmer-Dev125?tab=repositories"
          target="_blank"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 42 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={github} fill="white" />
          </svg>
        </a>
        <a href="https://dev.to/programmerdev125" target="_blank">
          <svg
            width="25"
            height="25"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={devto} fill="#ffffff" />
          </svg>
        </a>
        <a href="https://www.upwork.com/" target="_blank">
          <svg
            width="25"
            height="25"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={upwork} fill="#ffffff" />
          </svg>
        </a>
      </div>

      <div>
        <p className="footer-text">Copywrite: Abdul Ahad Dar</p>
      </div>
    </div>
  );
}
