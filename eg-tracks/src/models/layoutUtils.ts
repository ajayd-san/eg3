import React from "react";
import _ from "lodash";
import { Model, Actions } from "flexlayout-react"; // Use named imports based on what's available
import { v4 as uuidv4 } from "uuid";

/**
 * utilities to deal with layouts
 * @autor Daofeng Li
 */

export const global0 = {
  tabSetHeaderHeight: 0,
  tabSetTabStripHeight: 0,
  splitterSize: 0,
};
export const global25 = {
  tabSetHeaderHeight: 25,
  tabSetTabStripHeight: 25,
  splitterSize: 8,
};

export const initialLayout = {
  global: global0,
  layout: {
    type: "row",
    children: [
      {
        type: "tabset",
        children: [
          {
            type: "tab",
            enableClose: false,
            name: "Browser",
            component: "app",
            id: "app",
          },
        ],
      },
    ],
  },
};

export function addTabSetToLayout(newTabset, exisingLayout) {
  let children;
  const initial = _.isEmpty(exisingLayout) ? initialLayout : exisingLayout;
  if (initial.layout.children.length > 1) {
    // already have 2 panels, change direction to horizontal
    const lastChild = initial.layout.children.slice(-1)[0];
    if (lastChild.type === "row") {
      children = [...initial.layout.children, newTabset];
    } else {
      const child = [lastChild, newTabset];
      children = [
        ...initial.layout.children.slice(0, -1),
        { type: "row", children: child, id: uuidv4() },
      ];
    }
  } else {
    children = [...initial.layout.children, newTabset];
  }
  const layout = { ...initial.layout, children };
  return { ...initial, layout, global: global25 };
}

export function deleteTabByIdFromLayout(layout, tabId) {
  if (_.isEmpty(layout)) {
    return;
  }
  const model = Model.fromJson(layout);
  model.doAction(Actions.deleteTab(tabId));
  return model.toJson();
}

export function deleteTabByIdFromModel(model, tabId) {
  model.doAction(Actions.deleteTab(tabId));
  return model.toJson();
}

export function tabIdExistInLayout(layout, tabId) {
  if (_.isEmpty(layout)) {
    return false;
  }
  const model = Model.fromJson(layout);
  const tab = model.getNodeById(tabId);
  return tab === undefined ? false : true;
}

export function ensureLayoutHeader(json) {
  // console.log(json);
  if (json.layout.children.length > 1) {
    return json; // always keep the layout
  } else if (json.layout.children[0].children.length > 1) {
    return json;
  } else {
    return { ...json, global: global0 };
  }
}
