const ICON_PLUS = `<svg width='24' height='24' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M46 27C46 24.7909 47.7909 23 50 23C52.2091 23 54 24.7909 54 27V73C54 75.2091 52.2091 77 50 77C47.7909 77 46 75.2091 46 73V27Z' fill='#8E6AF3'/><path d='M23 50C23 47.7909 24.7909 46 27 46H73C75.2091 46 77 47.7909 77 50C77 52.2091 75.2091 54 73 54H27C24.7909 54 23 52.2091 23 50Z' fill='#8E6AF3'/></svg>`;
const ICON_LOOP = `<svg width='28' height='28' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M43.75 16.6666C28.7923 16.6666 16.6667 28.7923 16.6667 43.75C16.6667 58.7077 28.7923 70.8333 43.75 70.8333C58.7078 70.8333 70.8334 58.7077 70.8334 43.75C70.8334 28.7923 58.7078 16.6666 43.75 16.6666ZM8.33337 43.75C8.33337 24.1899 24.19 8.33331 43.75 8.33331C63.3101 8.33331 79.1667 24.1899 79.1667 43.75C79.1667 63.3101 63.3101 79.1666 43.75 79.1666C24.19 79.1666 8.33337 63.3101 8.33337 43.75Z' fill='#8E6AF3'/><path fill-rule='evenodd' clip-rule='evenodd' d='M62.8863 62.887C64.5135 61.2598 67.1517 61.2598 68.7788 62.887L90.4455 84.5537C92.0727 86.1809 92.0727 88.8191 90.4455 90.4462C88.8183 92.0734 86.1801 92.0734 84.553 90.4462L62.8863 68.7796C61.2591 67.1524 61.2591 64.5142 62.8863 62.887Z' fill='#8E6AF3'/></svg>`;
const ICON_REPLACE = `<svg width='24' height='24' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M23.7492 49.8545C23.7492 45.7941 25.3622 41.8999 28.2334 39.0287C31.1046 36.1576 34.9987 34.5445 39.0592 34.5445H55.1312L54.0192 35.3975L51.2634 38.1533C50.857 38.5597 50.5346 39.0422 50.3147 39.5732C50.0947 40.1042 49.9815 40.6734 49.9815 41.2481C49.9815 41.8229 50.0947 42.392 50.3147 42.923C50.5346 43.454 50.857 43.9365 51.2634 44.3429C51.6698 44.7494 52.1523 45.0717 52.6833 45.2917C53.2143 45.5116 53.7835 45.6249 54.3582 45.6249C54.933 45.6249 55.5021 45.5116 56.0331 45.2917C56.5641 45.0717 57.0466 44.7494 57.453 44.3429L68.3888 33.4072C68.7955 33.001 69.1181 32.5185 69.3382 31.9875C69.5584 31.4565 69.6717 30.8873 69.6717 30.3124C69.6717 29.7376 69.5584 29.1684 69.3382 28.6373C69.1181 28.1063 68.7955 27.6239 68.3888 27.2176L57.453 16.2819C56.6322 15.4611 55.519 15 54.3582 15C53.1975 15 52.0842 15.4611 51.2634 16.2819C50.4426 17.1027 49.9815 18.2159 49.9815 19.3767C49.9815 20.5375 50.4426 21.6507 51.2634 22.4715L53.8224 25.0305L55 25.796H39.0592C34.4206 25.7959 29.8809 27.1367 25.9868 29.657C22.0926 32.1772 19.0101 35.7695 17.1103 40.0012C15.2106 44.2329 14.5746 48.9235 15.2791 53.5083C15.9835 58.093 17.9983 62.3764 21.0809 65.8425C21.4629 66.2734 21.926 66.6247 22.4438 66.8766C22.9616 67.1284 23.5239 67.2758 24.0987 67.3104C24.6734 67.3449 25.2494 67.2659 25.7936 67.0778C26.3378 66.8898 26.8397 66.5964 27.2705 66.2144C27.7013 65.8324 28.0527 65.3692 28.3045 64.8514C28.5564 64.3336 28.7038 63.7713 28.7383 63.1966C28.7728 62.6218 28.6938 62.0459 28.5058 61.5017C28.3177 60.9574 28.0243 60.4556 27.6423 60.0247C25.142 57.2264 23.7566 53.6072 23.7492 49.8545Z' fill='#8E6AF3'/><path d='M78.8214 33.7572C78.0441 32.8871 76.953 32.3614 75.7881 32.2958C74.6232 32.2301 73.48 32.63 72.6099 33.4072C71.7398 34.1845 71.2141 35.2756 71.1485 36.4405C71.0828 37.6054 71.4826 38.7486 72.2599 39.6187C74.235 41.8155 75.5323 44.5368 75.9954 47.4543C76.4586 50.3718 76.0678 53.3611 74.8702 56.0615C73.6725 58.7619 71.7192 61.0582 69.2459 62.6734C66.7725 64.2886 63.8846 65.1538 60.9305 65.1645H45L46.1454 64.2459L48.6825 61.7089C49.5033 60.8881 49.9644 59.7748 49.9644 58.6141C49.9644 57.4533 49.5033 56.34 48.6825 55.5192C47.8617 54.6985 46.7485 54.2373 45.5877 54.2373C44.4269 54.2373 43.3137 54.6985 42.4929 55.5192L31.5572 66.455C31.1505 66.8612 30.8279 67.3436 30.6077 67.8747C30.3876 68.4057 30.2743 68.9749 30.2743 69.5498C30.2743 70.1246 30.3876 70.6938 30.6077 71.2249C30.8279 71.7559 31.1505 72.2383 31.5572 72.6446L42.4929 83.5803C43.3137 84.4011 44.4269 84.8622 45.5877 84.8622C46.7485 84.8622 47.8617 84.4011 48.6825 83.5803C49.5033 82.7595 49.9644 81.6462 49.9644 80.4855C49.9644 79.3247 49.5033 78.2115 48.6825 77.3907L46.0142 74.7224L45 73.9131H60.9305C65.5825 73.9152 70.1352 72.5686 74.0376 70.0364C77.9399 67.5042 81.0244 63.8949 82.9176 59.6456C84.8108 55.3964 85.4315 50.6894 84.7044 46.0946C83.9774 41.4999 81.9339 37.2144 78.8214 33.7572Z' fill='#8E6AF3'/></svg>`;

enum PluginActions {
  insert = "insert",
  replace = "replace",
  locate = "locate",
}

const ACTIONS_OPTIONS = [
  {
    name: "insert",
    data: PluginActions.insert,
    icon: ICON_PLUS,
  },
  {
    name: "replace",
    data: PluginActions.replace,
    icon: ICON_REPLACE,
  },
  {
    name: "locate",
    data: PluginActions.locate,
    icon: ICON_LOOP,
  },
];

const ContainerTypes = ["FRAME", "GROUP", "PAGE"];

let CURRENT_ACTION: PluginActions | null = null;

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-rectangles") {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};

figma.parameters.on("input", async ({ parameters, key, query, result }) => {
  if (key === "action") {
    result.setSuggestions(
      ACTIONS_OPTIONS.map((item) => ({
        name: item.name,
        data: item.data,
        icon: item.icon,
      })).filter((s) => s.name.includes(query))
    );
  } else if (key === "component") {
    const nodes = figma.root.findAll((node) => node.type === "COMPONENT");

    result.setSuggestions(
      nodes
        .map((item) => ({
          name: item.name,
          data: item.id,
        }))
        .filter((s) => s.name.includes(query))
    );
  }

  if (parameters.action) {
    CURRENT_ACTION = parameters.action;
  }
});

figma.on("run", (event) => {
  if (event.parameters) {
    runAction(event.parameters);
  } else {
    figma.showUI(__html__, { width: 400, height: 300 });
  }
});

function runAction(parameters: any) {
  if (parameters.component && parameters.action === PluginActions.insert) {
    const node = figma.getNodeById(parameters.component) as ComponentNode;

    if (node) {
      const instance = node.createInstance();

      figma.currentPage.appendChild(instance);
      figma.viewport.scrollAndZoomIntoView([instance]);

      figma.currentPage.selection = [instance];
    }
  } else if (
    parameters.component &&
    parameters.action === PluginActions.replace
  ) {
    const node = figma.getNodeById(parameters.component) as ComponentNode;

    if (node) {
      let instances: InstanceNode[] = [];
      const nodes = figma.currentPage.selection;

      nodes.forEach((item) => {
        const instance = node.createInstance();

        instance.x = item.x;
        instance.y = item.y;
        instance.resize(item.width, item.height);

        instances.push(instance);

        item.parent?.appendChild(instance);
        item.remove();
      });

      if (instances) {
        figma.viewport.scrollAndZoomIntoView(instances);
        figma.currentPage.selection = instances;
      }
    }
  } else if (
    parameters.component &&
    parameters.action === PluginActions.locate
  ) {
    const node = figma.getNodeById(parameters.component) as ComponentNode;
    const page = findComponentPageNode(node) as PageNode;

    if (node && page) {
      figma.currentPage = page;
      figma.viewport.scrollAndZoomIntoView([node]);
    }
  }

  figma.closePlugin();
}

function findComponentPageNode(node: any): PageNode | null {
  if (node.type === "PAGE") {
    return node;
  }

  if (node.parent) {
    return findComponentPageNode(node.parent);
  }

  return null;
}
