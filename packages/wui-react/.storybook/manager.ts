import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";
import { changelog } from "../src/data/changelog";

const getLatestVersion = () => {
  const latestVersion = changelog[0]?.version || "unknown";
  return `wui-react-${latestVersion}`;
};

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: getLatestVersion(),
    brandUrl:
      "https://github.com/webbiffy/wui-design/blob/main/packages/wui-react/README.md",
    brandTarget: "_blank",

    //
    colorSecondary: "#37D5D3", //#a3a3a3

    // Toolbar default and active colors
    barSelectedColor: "#37D5D3", //37D5D3
    barHoverColor: "#37D5D3", //37D5D3
  },
});
