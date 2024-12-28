chartelia/
├── src/
│   ├── core/
│   │   ├── plugin/
│   │   │   ├── PluginManager.ts
│   │   │   ├── PluginRegistry.ts
│   │   │   └── CompatibilityChecker.ts
│   │   ├── renderer/
│   │   │   ├── Renderer2D.ts
│   │   │   ├── Renderer3D.ts
│   │   │   ├── RendererAR.ts
│   │   │   ├── RendererVR.ts
│   │   │   └── RendererFactory.ts
│   │   ├── event/
│   │   │   ├── EventEmitter.ts
│   │   │   ├── EventTypes.ts
│   │   │   └── EventBus.ts
│   │   ├── data/
│   │   │   ├── DataManager.ts
│   │   │   ├── DataTransform.ts
│   │   │   ├── DataSources/
│   │   │   │   ├── APIDataSource.ts
│   │   │   │   ├── LocalDataSource.ts
│   │   │   │   └── StreamDataSource.ts
│   │   ├── config/
│   │   │   ├── ConfigManager.ts
│   │   │   └── DefaultConfig.ts
│   │   ├── theming/
│   │   │   ├── ThemeManager.ts
│   │   │   ├── DefaultTheme.ts
│   │   │   └── ThemeTypes.ts
│   │   ├── interaction/
│   │   │   ├── InteractionManager.ts
│   │   │   ├── ZoomHandler.ts
│   │   │   ├── DragHandler.ts
│   │   │   └── CustomEvents.ts
│   │   └── utils/
│   │       ├── MathHelpers.ts
│   │       ├── DOMUtils.ts
│   │       ├── Tooltip.ts
│   │       ├── Legend.ts
│   │       └── Logger.ts
│   ├── charts/
│   │   ├── line/
│   │   │   ├── LineChart.ts
│   │   │   ├── LineChartConfig.ts
│   │   │   └── LineChartStyles.ts
│   │   ├── bar/
│   │   │   ├── BarChart.ts
│   │   │   ├── BarChartConfig.ts
│   │   │   └── BarChartStyles.ts
│   │   └── pie/
│   │       ├── PieChart.ts
│   │       ├── PieChartConfig.ts
│   │       └── PieChartStyles.ts
│   ├── plugins/
│   │   ├── example-plugin/
│   │   │   ├── ExamplePlugin.ts
│   │   │   ├── ExamplePluginConfig.ts
│   │   │   └── README.md
│   ├── index.ts
│   ├── App.ts
│   └── global.d.ts
├── public/
│   ├── index.html
│   ├── styles.css
│   └── assets/
│       ├── images/
│       └── fonts/
├── tests/
│   ├── core/
│   │   ├── PluginManager.test.ts
│   │   ├── Renderer2D.test.ts
│   │   └── DataManager.test.ts
│   ├── charts/
│   │   ├── LineChart.test.ts
│   │   ├── BarChart.test.ts
│   │   └── PieChart.test.ts
│   └── utils/
│       ├── MathHelpers.test.ts
│       └── DOMUtils.test.ts
├── scripts/
│   ├── build.js
│   ├── start.js
│   └── test.js
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── release.yml
├── docs/
│   ├── README.md
│   ├── CONTRIBUTING.md
│   ├── API.md
│   ├── THEMING.md
│   └── PLUGINS.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .eslintrc.js
