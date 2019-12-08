import { newE2EPage } from '@stencil/core/testing'

describe('Component: mq-paragraph', () => {
  it('Should render correctly', async () => {
    const paragraphContent = 'Just Paragraph'

    const page = await newE2EPage()
    await page.setContent(`<mq-paragraph>${paragraphContent}</mq-paragraph>`)
    const component = await page.find('mq-paragraph')
    await page.waitForChanges()

    expect(component).toBeTruthy()
    expect(component.innerHTML).toEqual(paragraphContent)
  })
})
