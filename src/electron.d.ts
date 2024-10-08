// Define the types for Electron's API
interface ElectronAPI {
    readAllMetadata: () => Promise<any>; // Adjust the return type if you have specific data (like Cardset[])
  }
  
  // Extend the Window interface to include the ElectronAPI
  interface Window {
    electron: ElectronAPI;
  }
  