# Vines.js

### 安装

```
yarn add vines.js
```

### 初始化

```typescript
import { VinesClient } from "vines.js";

const client = new VinesClient({
  apiKey: "YOUR_VINES_API_KEY",
});
```

### 使用示例

```typescript
import { VinesClient } from "vines.js";

const client = new VinesClient({
  apiKey: "YOUR_VINES_API_KEY",
});
const workflows = await client.getWorkflowDef({
  workflowId: "64dafc1a73d44c2d8b382e14",
});
```
