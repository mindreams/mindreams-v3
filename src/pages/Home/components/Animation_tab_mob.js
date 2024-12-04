import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function LoopingLayout() {
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
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.8rem;
        }

        .logo {
          width: 22px;
          height: 22px;
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
          width: 22px; /* Width of the menu icon */
          height: 18px; /* Height of the menu icon */
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
          width: 22px;
          height: 8px;
          background-color: #1a237e;
          border-radius: 4px;
        }

        .content {
          width: 80%;
          margin-bottom: 0.5rem;
          display: grid;
          gap: 1rem;
          transition: all 0.5s ease;
          grid-template-columns: 1fr; /* Single column layout for rows */
        }

        .content-block {
          display: flex;
          gap: 0.5rem;
          animation: fadeIn 0.5s ease-out;
        }

        .thumbnail {
          width: 54px;
          height: 54px;
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
          height: 10px;
          width: 30%;
          background-color: #e0e0e0;
          border-radius: 2px;
        }

        .description {
          height: 10px;
          width: 100%;
          background-color: #e0e0e0;
          border-radius: 2px;
        }

        .long-description {
          height: 18px;
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
          width: 180px;
        }

        .layout-1 {
          width: 360px;
        }
        
        .layout-2 {
          width: 500px;
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
            width: 90vw;
          }
        }

        @media (max-width: 550px) {
          .layout-1 {
            width: 70vw;
          }
        }

        @media (max-width: 350px) {
          .layout-0 {
            width: 50vw;
          }
        }
      `}</style>
    </div>
  );
}
