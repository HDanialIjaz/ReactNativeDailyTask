// App.js
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#003f8a"); // Initial background color
  const [isMobilePressed, setIsMobilePressed] = useState(false); // Track if mobile button is pressed
  const [isFlashlightPressed, setIsFlashlightPressed] = useState(false); // Track if flashlight button is pressed
  const [hideIcons, setHideIcons] = useState(false); // Control visibility of icons except Power Button

  const handleMobilePress = () => {
    setIsMobilePressed(true); // Set mobile button as pressed
    setIsFlashlightPressed(false); // Reset flashlight button
  };
  const handleFlashlightPress = () => {
    setIsFlashlightPressed(true); // Set flashlight button as pressed
    setIsMobilePressed(false); // Reset mobile button
  };

  const handlePowerPress = () => {
    if (isMobilePressed) {
      // If the mobile icon was pressed first, change background to white and hide other icons
      setBackgroundColor("white");
      setHideIcons(true);
      setIsMobilePressed(false);

    } else if (isFlashlightPressed) {
      // If the flashlight icon was pressed first, change background to yellow and hide other icons
      setBackgroundColor("yellow");
      setHideIcons(true);
      setIsFlashlightPressed(false);
    } else {
      // If the mobile icon was not pressed, reset background to blue and show other icons
      setBackgroundColor("#003f8a");
      setHideIcons(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Power Button is always visible */}
      <View style={styles.middleSection}>
        <TouchableOpacity style={styles.powerButton} onPress={handlePowerPress}>
      <Text>Power</Text>
          {/* <MaterialIcons name="power-settings-new" size={50} color="white" /> */}
        </TouchableOpacity>
      </View>

      {/* Other buttons (flashlight and mobile-phone) are conditionally hidden */}
      {!hideIcons && (
        <View style={styles.bottomSection}>
          <TouchableOpacity onPress={handleFlashlightPress}
            style={[
              styles.iconButton,
              { backgroundColor: isFlashlightPressed ? "yellow" : "#005fb8" },
            ]}>
              <Icon name='mobile' size={40} color="white" />;

            {/* <Text>Flashlight</Text> */}
            {/* <Ionicons name="flashlight" size={40} color="white" /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleMobilePress}
            style={[
              styles.iconButton,
              { backgroundColor: isMobilePressed ? "yellow" : "#005fb8" },
            ]}
          >
          <Text>Mobile</Text>
            {/* <FontAwesome name="mobile-phone" size={40} color="white" /> */}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  middleSection: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  powerButton: {
    width: 80,
    height: 80,
    backgroundColor: "#005fb8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    shadowColor: "yellow",
    shadowOffset: { width: 10, height: 40 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 35,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  iconButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
});