---
id: engine
title: Engine
---

This class allows you to process data based on streams in nodes and transfer them from the output data of one node to the input of another.
The engine does not depend on other components of the editor. All it needs is an identifier, component workers and JSON data.

```typescript
var engine = new Rete.Engine('demo@0.1.0');

engine.register(myComponent);
await engine.process(data);
```

You can also pass additional arguments inside the workers

```typescript
engine.process(data, null, arg1, arg2);
```

Arguments will be passed to each worker processed by this process

```typescript
worker(node, inputs, outputs, arg1, arg2) {
  outputs['num'] = node.data.num;
}
```

If an error occurs during processing (recursion detected, wrong startId, incorrect data), you can get its message and data

```typescript
engine.on('error', ({ message, data }) => {});
```

## Events

### Process

If you need to immediately receive the results of changes you can subscribe to the process event

```typescript
editor.on('process', async () => {
  await engine.abort();
  await engine.process(editor.toJSON());
});
```

In general, for each change in the schema (nodes, connections, node data), it is necessary to perform processing.
Due to the fact that workers can be asynchronous, the 'process' method is also asynchronous.
Since the actions provoking the processing can be performed without waiting for the completion of the previous processing,
we need the `abort` method, which waits for the completion of the previous processing and guarantees data integrity.

Usually there is some kind of primary node from which processing should start.

```typescript
engine.process(data, node.id);
```

This can be important in situations where a node requests data simultaneously from multiple nodes.

You can also pass additional arguments inside the workers
