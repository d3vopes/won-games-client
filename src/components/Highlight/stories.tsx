import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HiglightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.png',
    buttonLabel: 'Comprar',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: Story<HiglightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HiglightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}