---
id: intro
title: Plugins
sidebar_label: Introduction
slug: /plugins/
---
Since Naetverk is modular, we provide Plugins to extend the functionality of the network. 

| Name                         | Description                                                                                                  | Extends              | Readme / Docs                                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------- | ------------------------------------------------------------------------------------------------- |
| @naetverkjs/naetverk         | Base library that allows the creation of node-based editors for visually programming or sequential scripting | -                    | [Readme](https://github.com/naetverkjs/naetverk/blob/master/packages/naetverk/README.md)          |
| @naetverkjs/connections      | Plugin to render the connections between nodes                                                               | @naetverkjs/naetverk | [Readme](https://github.com/naetverkjs/naetverk/blob/master/packages/area-plugin/README.md)       |
| @naetverkjs/area             | Plugin to draw the network on a configurable background with limited zoom and grid snapping                  | @naetverkjs/naetverk | [Readme](https://github.com/naetverkjs/naetverk/blob/master/packages/connection-plugin/README.md) |
| @naetverkjs/lifecycle        | Registers additional events that can be used while working with a component                                  | @naetverkjs/naetverk | [Readme](https://github.com/naetverkjs/naetverk/blob/master/packages/lifecycle/README.md)         |
| @naetverkjs/keyboard         | Registers keyboard input and maps them to events                                                                         | @naetverkjs/naetverk | [Readme](https://github.com/naetverkjs/naetverk/blob/master/packages/keyboard-plugin/README.md)   |
|                              |                                                                                                              |                      |                                                                                                   |
| **Angular**                  |                                                                                                              |                      |                                                                                                   |
| @naetverkjs/angular-renderer | Angular Module to render basic nodes                                                                         |                      | [Readme](https://github.com/naetverkjs/naetverk/blob/master/packages/angular-renderer/README.md)  |
