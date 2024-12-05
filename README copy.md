# React Native Weather App

## This is a simple weather application built with React Native. It fetches and displays weather data based on the user's location or a searched city.

## Prerequisites

1. **React Native Development Environment**

   - Install Node.js: [Download here](https://nodejs.org)
   - Install React Native CLI:
     ```bash
     npm install -g react-native-cli
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

2. **Platform-specific Requirements**
   - **iOS**:
     - Install Xcode (macOS only): [Download here](https://developer.apple.com/xcode/)
     - Install CocoaPods:
       ```bash
       sudo gem install cocoapods
       ```
     - Set up iOS development tools in Xcode.
   - **Android**:
     - Install Android Studio: [Download here](https://developer.android.com/studio)
     - Install Android SDKs and set up an emulator or use a physical device.

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

```bash
npm install
```

---

## Running the App

### On Android

1. Start the Metro bundler:
   ```bash
   npm start
   ```
2. Launch the app on an emulator or device:
   ```bash
   npm run android
   ```

### On iOS

1. Start the Metro bundler:
   ```bash
   npm start
   ```
2. Install CocoaPods dependencies (if not already installed):
   ```bash
   cd ios
   pod install
   cd ..
   ```
3. Launch the app:
   ```bash
   npm run ios
   ```

---

## Troubleshooting

### Common Issues

- **Metro Bundler not starting**: Ensure no other processes are using port 8081. Use the following to reset the cache:

  ```bash
  npm start --reset-cache
  ```

- **iOS build fails**: Make sure all dependencies are installed correctly by running:

  ```bash
  cd ios
  pod install
  cd ..
  ```

- **Android build fails**: Check that your Android SDK and emulator are properly set up in Android Studio.

---

## Dependencies

- React Native
- Axios (for API requests)
- react-navigation (for navigation)
- react-native-dotenv (for environment variables)

---
