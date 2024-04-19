---
sidebar_position: 3
---

# 自定义配置

在`build`构建时，根据`loadEncodeBundleConfig`获取配置

```typescript
const config =
  _options.config === false
    ? {}
    : await loadEncodeBundleConfig(
        process.cwd(),
        _options.config === true ? undefined : _options.config,
      );
```

```typescript
export async function loadEncodeBundleConfig(
  cwd: string,
  configFile?: string,
): Promise<{ path?: string; data?: ReturnType<typeof defineConfig> }> {
  const configJoycon = new JoyCon();
  const configPath = await configJoycon.resolve({
    files: configFile
      ? [configFile]
      : [
          'wj-fe-bundle.config.ts',
          'wj-fe-bundle.config.js',
          'wj-fe-bundle.config.cjs',
          'wj-fe-bundle.config.mjs',
          'wj-fe-bundle.config.json',
          'package.json',
        ],
    cwd,
    stopDir: path.parse(cwd).root,
    packageKey: 'wj-fe-bundle',
  });

  if (configPath) {
    if (configPath.endsWith('.json')) {
      let data = await loadJson(configPath);
      if (configPath.endsWith('package.json')) {
        data = data['wj-fe-bundle'];
      }
      if (data) {
        return { path: configPath, data };
      }
      return {};
    }

    const config = await bundleRequire({
      filepath: configPath,
    });
    return {
      path: configPath,
      data: config.mod['wj-fe-bundle'] || config.mod.default || config.mod,
    };
  }

  return {};
}
```

使用`JoyCon`识别指定文件或 package.json 中的`wj-fe-bundle`，作为相对用户配置项的返回。
