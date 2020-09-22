---
id: components
title: Components
---

Components allow a simplified development process by combining the closely related functions of building and processing nodes.

A Component contain a builder and a worker method

```typescript
class MyComponent extends Naetverk.Component {
  constructor() {
    super('My Component'); // name
  }

  builder(node) {
    /// modify the node
  }

  worker(node, inputs, outputs) {
    /// process data
  }
}
```

The `builder` runs once creating a node, the `worker` with each processing step.
They are executed independent of each other.

### Component registration:

```typescript
var comp = new MyComponent();

editor.register(comp);
engine.register(comp);
```

## Node builders

The builders purpose is to modify the Node instance and is needed by the editor to restore the nodes JSON data.
Since JSON data should only store static information, not the logic of the nodes.

Each builder must be in the appropriate component:

```typescript
class NumberComponent extends Naetverk.Component {
  constructor() {
    super('Number');
  }

  builder(node) {
    // modify the node
    node.data.num = 3;
    node.addInput(new Rete.Input('key1', 'Number', numSocket));
    node.addOutput(new Rete.Output('key2', 'Number', numSocket));
  }
}
```

## Node workers

A worker is a function for processing node data.
They get node parameters, inputs, outputs, and arguments passed during processing (optional).
Node data (not an instance of a node), inputs and outputs correspond to the definitions in the builders (see above).

```typescript
class NumberComponent extends Naetverk.Component {
  constructor() {
    super('Number');
  }

  async worker(node, inputs, outputs) {
    // inputs['key1']
    outputs['key2'] = node.data.num;
  }
}
```

As you noticed, you can use asynchronous functions (or Promise for previous versions of ES). This is necessary to perform complex calculations without blocking the main thread (for example, in WebWorker).
