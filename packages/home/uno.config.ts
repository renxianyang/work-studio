import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    [
      /^([mp])([atrbl])-(-?)(\d+)$/,
      (match, context) => {
        let edge = ''
        switch (match[2]) {
          case 'a':
            edge = ''
            break
          case 't':
            edge = 'top'
            break
          case 'r':
            edge = 'right'
            break
          case 'b':
            edge = 'bottom'
            break
          case 'l':
            edge = 'left'
            break
        }

        return {
          [`${match[1] === 'm' ? 'margin' : 'padding'}${edge ? '-' + edge : ''}`]: `${
            match[3] + match[4]
          }px`,
        }
      },
    ],
    [
      /^fz-([\.\d]+)$/,
      (match, context) => {
        return {
          'font-size': `${match[1]}px`,
        }
      },
    ],
  ],
})
