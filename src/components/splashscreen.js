import React from "react";
import ActivityIndicator from "react-activity-indicator";

const SplashScreen = () => {
  return (
    <div className="splash">
      <div className="we">
        <h1>WE</h1>
        <h1 className="connect">CONNECT</h1>
      </div>
      <div className="indicator">
        <ActivityIndicator
          number={3}
          diameter={20}
          borderWidth={1}
          duration={100}
          activeColor="#66D9EF"
          borderColor="white"
          borderWidth={2}
          borderRadius="10%"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
