// Declare module for PNG files
declare module '*.png' {
    const value: string; // Change the type according to your needs (string or other)
    export default value;
  }
  
  // Declare module for JPEG/JPG files
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.gif' {
    const value: string;
    export default value;
  }