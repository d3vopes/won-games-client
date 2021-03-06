import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    // Faz a verificação se o ID da logo é passado corretamente
    const { container } = renderWithTheme(<Logo id="myId" />)

    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  it('should render a white label by default', () => {
    /*
      ETAPAS DOS TESTES
        1 - renderizar o componente `render`
        2 - selecionar o elemento a ser testado `screen` (queries) - getByLabel
        3 - expect - assertion - asserção - comparação - analise (espero que renderize a logo branca)
    */

    renderWithTheme(<Logo />)
    // Seleciona o elemento pai
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      // Quero que tenha esse valor
      'width',
      '5.8rem',
      // Quando a media query for desse tamanho
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
