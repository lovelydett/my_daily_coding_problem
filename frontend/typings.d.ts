/**
 * @description Declare global types for the application, such as modules and CSS classes
 * @author Yuting Xie
 * @date Oct 15, 2024
 */

// Declare CSS modules
declare module "*.module.css" {
    const classes: { [key: string]: string }; // An object with keys of type string and values of type string
    export default classes;
}
