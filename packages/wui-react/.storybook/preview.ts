import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        contentsSelector: ".sbdocs-content",
        disable: false,
      },
    },
    options: {
      storySort: {
        order: ["Documentation", "UI", "*"],
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Project design theme to use",
      defaultValue: "theme-1",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "theme-1", title: "Theme 1" },
          { value: "theme-2", title: "Theme 2" },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
    background: {
      description: "Global background for components",
      defaultValue: "light",
      toolbar: {
        icon: "sun",
        items: [
          { value: "light", icon: "sun", title: "Light Mode" },
          { value: "dark", icon: "moon", title: "Dark Mode" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme, background } = context.globals;

      // Dynamically load theme CSS
      if (typeof window !== "undefined") {
        // Remove existing theme stylesheets
        const existingThemes = document.querySelectorAll("link[data-theme]");
        existingThemes.forEach((link) => link.remove());

        // Add new theme stylesheet
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `/${theme}.css`; // Use static dir path
        link.setAttribute("data-theme", theme);

        // Apply background class immediately
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(background);

        // Wait for CSS to load before reading custom properties
        link.onload = () => {
          //console.log("✅ Theme CSS loaded successfully:", link.href);

          // Get background color from Tailwind CSS custom properties
          const getCanvasColor = () => {
            const computedStyle = getComputedStyle(document.documentElement);
            const bgValue = computedStyle
              .getPropertyValue("--wui-background")
              .trim();

            // Convert HSL values to proper CSS color (Tailwind format: "210 20% 99%")
            if (bgValue) {
              //console.log("Using CSS custom property:", `hsl(${bgValue})`);
              return `hsl(${bgValue})`;
            }

            // Fallback to hardcoded values if CSS variable not found
            const isDark = background === "dark";
            const fallbackColor = isDark ? "#0f172a" : "#ffffff";
            //console.log('Using fallback color:', fallbackColor)
            return fallbackColor;
          };

          const canvasColor = getCanvasColor();

          // Apply to story canvas areas in docs mode
          const storyCanvases = document.querySelectorAll(
            ".docs-story, .sbdocs .sb-story, .sb-story"
          );
          storyCanvases.forEach((canvas) => {
            (canvas as HTMLElement).style.backgroundColor = canvasColor;
          });

          // Add custom styling for docs canvas areas
          const existingDocsStyle =
            document.querySelector("#custom-docs-style");
          if (existingDocsStyle) {
            existingDocsStyle.remove();
          }

          const docsStyle = document.createElement("style");
          docsStyle.id = "custom-docs-style";
          docsStyle.textContent = `
            .docs-story, 
            .sbdocs .sb-story, 
            .sb-story {
              background-color: ${canvasColor} !important;
            }
            .docs-story .sb-story,
            .sbdocs .sb-story .sb-story {
              background-color: ${canvasColor} !important;
            }
          `;
          document.head.appendChild(docsStyle);
        };

        // link.onerror = () => {
        //   console.error("❌ Failed to load theme CSS:", link.href);
        // };

        document.head.appendChild(link);

        // Custom TOC styles
        const tocStyle = document.createElement("style");
        tocStyle.id = "custom-toc-style";
        tocStyle.textContent = `
          .toc-link.is-active-link {
            color: #37D5D3 !important;
            font-weight: 600;
          }
          .toc-link:hover {
            color: #37D5D3 !important;
          }
          .toc-list-item.is-active-li .toc-link {
            color: #37D5D3 !important;
            font-weight: 600;
          }
          .toc-list-item.is-active-li::before {
            border: 1px solid #37D5D3 !important;
          }
        `;
        document.head.appendChild(tocStyle);
      }

      return Story();
    },
  ],
};

export default preview;
