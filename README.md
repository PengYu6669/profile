# 蔡鹏宇 · 个人作品集主页

一个基于 React + Vite 的暗色极简个人主页，包含：

- 中英文悬停逐字切换动效（Framer Motion）
- 个人信息、核心技能、实习经历
- 作品集展示（NexMind、fAIshion、理财通）
- 桌面/平板/手机多端响应式适配

## 预览与定位

- 适合：个人官网、求职作品集、技术名片
- 风格：暗黑、简约、科技感

## 技术栈

- React 19
- Vite 8
- TypeScript
- Framer Motion
- CSS（自定义响应式与动效）

## 本地启动

```bash
npm install
npm run dev
```

默认本地地址：

- `http://localhost:5173/`

## 构建与预览

```bash
npm run build
npm run preview
```

## 目录结构（核心）

```text
src/
  App.tsx
  App.css
  index.css
  components/
    DisperseText.tsx
public/
  projects/
    1.png
    2.png
    3.png
    4.jpg
    5.jpg
    6.jpg
    image.png
```

## 内容替换说明

- 主页文案：编辑 `src/App.tsx`
- 样式与响应式：编辑 `src/App.css`
- 作品图片：替换 `public/projects/` 中同名文件即可

## 已实现特性

- 保留悬停中英切换动效与暗黑风格
- 手机端支持轻量性能优化（减少高开销视觉效果）
- 作品集图片区避免拉伸失真（按比例展示）

## License

仅用于个人展示与学习参考。

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
