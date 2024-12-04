import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function LoopingLayout1() {
  const [layoutIndex, setLayoutIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setLayoutIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className={`responsive-container layout-${layoutIndex}`}>
        <header className="header">
          <div className="logo" />
          {layoutIndex === 0 ? (
            // <div className="menu-icon">
            //   <span></span>
            //   <span></span>
            //   <span></span>
            // </div>
            <Menu className="menu-icon" />
          ) : (
            <div className="menu-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </header>
        <main className="content" style={{ gridTemplateColumns: layoutIndex === 2 && "1fr 1fr" }}>
          {[1, 2, 3].map((item) => (
            <div key={item} className="content-block">
              <div className="thumbnail" />
              <div className="text">
                <div className="title" />
                <div className="description" />
                <div className="long-description" />
              </div>
            </div>
          ))}
          {layoutIndex === 2 && (
          [1, 2, 3].map((item) => (
            <div key={item} className="content-block">
              <div className="thumbnail" />
              <div className="text">
                <div className="title" />
                <div className="description" />
                <div className="long-description" />
              </div>
            </div>
          ))
          )}
        </main>
      </div>
      <style jsx>{`
        .responsive-container {
          max-width: 100%;
          border: 2.5px solid #1a237e;
          border-radius: 10px;
          padding: 1rem;
          background: white;
          transition: all 0.5s ease;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          // box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.1);
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .logo {
          width: 32px;
          height: 32px;
          background-color: #1a237e;
          border-radius: 50%;
        }

        .menu-icon {
          color: #1a237e;
        }

        .menu-icon {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 32px; /* Width of the menu icon */
          height: 24px; /* Height of the menu icon */
          cursor: pointer;
        }

        .menu-icon span {
          display: block;
          width: 100%; /* Full width of the menu icon */
          height: 4px; /* Thickness of each line */
          background-color: #1a237e; /* Color of the menu icon */
          border-radius: 2px; /* Rounded corners for the lines */
        }

        .menu-dots {
          display: flex;
          gap: 8px;
        }

        .menu-dots span {
          width: 32px;
          height: 8px;
          background-color: #1a237e;
          border-radius: 4px;
        }

        .content {
          margin-bottom: 1rem;
          display: grid;
          gap: 1.5rem;
          transition: all 0.5s ease;
          grid-template-columns: 1fr; /* Single column layout for rows */
        }

        .content-block {
          display: flex;
          gap: 1rem;
          animation: fadeIn 0.5s ease-out;
        }

        .thumbnail {
          width: 74px;
          height: 74px;
          background-color: #e0e0e0;
          flex-shrink: 0;
        }

        .text {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .title {
          height: 14px;
          width: 30%;
          background-color: #e0e0e0;
          border-radius: 2px;
        }

        .description {
          height: 14px;
          width: 100%;
          background-color: #e0e0e0;
          border-radius: 2px;
        }

        .long-description {
          height: 30px;
          width: 100%;
          background-color: #e0e0e0;
          border-radius: 2px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Adjusted Layout Widths */
        .layout-0 {
          width: 230px;
        }

        .layout-1 {
          width: 400px;
        }

        .layout-2 {
          width: 550px;
        }

        .layout-1 .content {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }

        .layout-1 .header {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }

        .layout-2 .content {
          width: 97%;
          margin-left: auto;
          margin-right: auto;
        }
        .layout-2 .header {
          width: 97%;
          margin-left: auto;
          margin-right: auto;
        }
        .layout-0 .header {
          width:100%;
        }
        .layout-0 .content {
          width: 100%;
        }

        /* Responsive Width Adjustments */
        @media (max-width: 850px) {
          .layout-2 {
            width: 80vw;
          }
        }

        @media (max-width: 550px) {
          .layout-1 {
            width: 80vw;
          }
        }

        @media (max-width: 350px) {
          .layout-0 {
            width: 85vw;
          }
        }
      `}</style>
    </div>
  );
}
