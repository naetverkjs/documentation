---
id: introduction
title: NaetverkJs Introduction
sidebar_label: Introduction
slug: /
---

NaetverkJs is a modular framework for visual programming. NaetverkJs allows you to create node-based editor directly in the browser.
You can define nodes and workers that allow users to create instructions for data processing or simulation of sequential jobs in your editor without the need of showing the user code.

The Project is a fork of the fantastic [rete.js](https://rete.js.org/) framework. We developed some changes on the source library that we decided to share.

# Getting started

## Installation

### Angular

To use the library in angular you need to install the base library, the Angular Renderer (you can also write your own) and the connections plugin

```shell
npm install @naetverkjs/naetverk @naetverkjs/angular-renderer @naetverkjs/connections
```

in your app.module.ts you need to import the `NaetverkModule`

```typescript
import { NaetverkModule } from "@naetverkjs/angular-renderer";

@NgModule({
  imports: [NaetverkModule],
})
export class AppModule {}
```

### Create an editor

We can recommend to check out our [sample implementation](https://github.com/naetverkjs/naetverk/tree/master/samples/angular).
