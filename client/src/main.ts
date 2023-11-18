import "./app.css"
import App from "./App.svelte"
// importing manually from dist
// importing manually from src

// import materialDynamicColors from "material-dynamic-colors/src/cdn/material-dynamic-colors.js";
const app = new App({
	target: document.getElementsByTagName("csur-client")[0],
})

export default app
