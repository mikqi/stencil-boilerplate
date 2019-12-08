import {Component, Prop, h} from '@stencil/core'

export type ButtonSizes = 'small' | 'base' | 'large'

@Component({
  tag: 'mqi-button',
  styleUrl: 'mqi-button.scss',
  shadow: true
})

export class MqButton {
  /**
   * Button Size
   */
  @Prop() size: ButtonSizes = 'base'

  render() {
    return (
      <button class="btn">
        <slot />
      </button>
    )
  }
}
