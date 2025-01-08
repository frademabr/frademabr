import packageJson from "../package.json";

// ----------------------------------------------------------------------

export const CONFIG = {
  appName: "Fradema Consultoria Tributária Web",
  appVersion: packageJson.version,
  assetsDir: process.env.NEXT_PUBLIC_ASSETS_DIR ?? "",
  googleMapApiKey: process.env.NEXT_PUBLIC_MAP_API ?? "",
};
