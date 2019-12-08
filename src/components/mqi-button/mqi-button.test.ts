import { newE2EPage } from '@stencil/core/testing'

describe('Component: mq-button', () => {
  it('Should render correctly', async () => {
    const page = await newE2EPage()
    await page.setContent('<mq-button>Mamam</mq-button>')
    const component = await page.find('mq-button')

    expect(component).toBeTruthy()
  })
})
