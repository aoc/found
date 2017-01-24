import React from 'react';

export default function makeRouteConfig(node) {
  return React.Children.toArray(node)
    .filter(React.isValidElement)
    .map(({ type: Type, props: { children, ...props } }) => {
      const route = new Type(props);

      if (children) {
        route.children = makeRouteConfig(children);
      }

      return route;
    });
}
