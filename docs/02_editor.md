---
id: editor
title: Editor
---

The editor is an area in with nodes can be placed and connected with connections between their sockets.
The base editor allows the following functionalities :

- Interaction with the workspace (move, scale) and control nodes (move, add, delete)
- Display of connections, nodes, their inputs/outputs and controls
- Event handling editor
- Import/export schema in JSON format
- Expansion of functionality with plugins
- Customization of the workspace, nodes and connections
- Create an instance of NodeEditor

> To extend the functionality check out the plugins section

### Create an instance of NodeEditor

```typescript
const editor = new Rete.NodeEditor("demo@0.1.0", container);
```

The parameter `demo@0.1.0` is the identifier of your application/editor. The container is the html element you want to attach your editor to.

### Identifier

The identifier consists of the application name and version. The version is necessary to control the import of data into your editor, since the data from previous versions may not be compatible with the current version of your editor (not to be confused with the version of the framework).
The same rule exists for the Engine, which allows you to prevent unexpected results due to incompatibility of data with the implementation of Workers in the nodes.
