module.exports = {
  icon: true,
  prettierConfig: {
    semi: false,
    singleQuote: true,
    printWidth: 128
  },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })
    const name = `${componentName.name.replace('Svg', '')}: React.FC<SVGProps<SVGSVGElement>>`
    return typeScriptTpl.ast`
      import React, { SVGProps } from 'react';
      export const ${name} = props => ${jsx};
    `
  }
}
