import {Component, Prop, h} from '@stencil/core'

export type TypographySizes = 'small' | 'base' | 'large' | 'xlarge'

@Component({
  tag: 'mqi-paragraph',
  styleUrl: 'mqi-paragraph.scss',
  scoped: true
})
export class MqParagraph {
  /**
   * Paragraph Size
   */
  @Prop() size: TypographySizes = 'base';

  render() {
    return (
      <p>
        <slot />
      </p>
    )
  }
}
