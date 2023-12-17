// components/StatusChecker.js

import { useState, useEffect } from "react";

const StatusChecker = ({ children }) => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    function updateStatus() {
      // ... (the existing logic for updating status)

      // Update the status state based on the checks
      if (isWeekday && isBusinessHours) {
        setStatus("online");
      } else {
        setStatus("offline");
      }
    }

    updateStatus();

    // Check every minute
    const interval = setInterval(updateStatus, 60 * 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  // Pass the status as a prop to the children
  return children(status);
};

export default StatusChecker;
