# Vines.js

### 安装

安装前需要配置 `.npmrc`，请联系其他研发同学。

```sh
npm install @inf-monkeys/vines
```

### 初始化

```typescript
import { VinesClient } from "@inf-monkeys/vines";

const client = new VinesClient({
  apiKey: "YOUR_VINES_API_KEY",
});
```

### 使用示例

```typescript
import { VinesClient } from "@inf-monkeys/vines";

const client = new VinesClient({
  apiKey: "YOUR_VINES_API_KEY",
});
const workflows = await client.getWorkflowDef({
  workflowId: "64dafc1a73d44c2d8b382e14",
});
```
