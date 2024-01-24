// index.jsx
import React from "react";
import styles from "./styles.module.css";

const WelcomePage = () => {
  const handleLogout = () => {
    window.location.reload();
  };

  const getUsername = () => {
    return "Avinash";
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <title>Welcome Page</title>
      </head>
      <body>
        <nav className={styles.navbar}>
          <h1>LTTS</h1>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <div className={styles.welcome_container}>
          <div className={styles.welcome_message}>
            <h2>Welcome, {getUsername()}!</h2>
          </div>
        </div>

        <script>
          {`
            function handleLogout() {
              // Add logic to handle logout (e.g., clear localStorage)
              window.location.reload();
            }
          `}
        </script>
      </body>
    </html>
  );
};

export default WelcomePage;
