export default {
  "title": "Personalization of Generalized Activity Recognition Models",
  "tagline": "EE382V-ASR :  Activity Sensing and Recognition Project",
  "url": "https://ub31.github.io",
  "baseUrl": "/ASR/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/logohead.png",
  "organizationName": "ub31",
  "projectName": "ASR",
  "themeConfig": {
    "navbar": {
      "title": "Home",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.jpeg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Description",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/uma/Documents/ActivitySensing/project/asr/ASR/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/uma/Documents/ActivitySensing/project/asr/ASR/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};