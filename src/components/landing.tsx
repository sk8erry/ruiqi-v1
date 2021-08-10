import * as React from 'react'
import styled from 'styled-components'
import { theme, mixins, media } from '../styles'
import { Circle, Triangle, Square } from './icons'
import { useIsMounted, useScroll } from '../hooks'
import { Fadedown, HeroTextFadeup, LargeFadeUp } from './animations'

const { colors, fonts, fontSizes } = theme

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justfiy-content: center;
  min-height: 100vh;
  a {
    ${mixins.inlineLink};
  }
`

const LandingPageItemContainer = styled.div`
  in-height: 100vh;
  display: flex;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
`

const LandingPageItemInnerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  align-items: center;
`

const LandingPageLink = styled.a`
  cursor: pointer;
`

const LangingPageItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const TransitionInner = styled.div`
  ${mixins.largeFadeupReady};
`

const BigText = styled.h1`
  color: ${colors.slate};
  font-size: 26rem;
  line-height: 26rem;
  letter-spacing: 1rem;
  font-family: ${fonts.Calibre};
  width: 100%;
  margin: 0;
  pointer-events: none;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 50%;
  ${media.bigDesktop`font-size: 10rem;line-height: 10rem;`};
  ${media.phablet`font-size: 4.5rem;line-height: 4.5rem;`};
`

const NameContainer = styled.div`
  position: absolute;
  left: 0;
  padding: 1rem;
  font-size: ${fontSizes.large};
  span {
    color: ${colors.green};
  }
`

const IconWrapper = styled.div`
  display: block;
  ${media.thone`display: none`};
`

const IconWrapperMobile = styled.div`
  display: none;
  ${media.thone`display: block`};
`

export const Landing: React.FC<{ handleScroll: (sectionName: string) => void }> = ({ handleScroll }) => {
  const isMounted = useIsMounted()

  const [navItems, setNavItems] = React.useState([
    {
      id: 0,
      title: 'About',
      icon: (size: number) => <Triangle size={size}></Triangle>,
      active: false
    },
    {
      id: 1,
      title: 'Work',
      icon: (size: number) => <Square size={size}></Square>,
      active: false
    },
    {
      id: 2,
      title: 'Contact',
      icon: (size: number) => <Circle size={size}></Circle>,
      active: false
    }
  ])

  const [scrolling] = useScroll()

  const onMouseEnter = ({ target }) => {
    const newNavItems = [...navItems]
    newNavItems.find((item) => item.id === target.id).active = true
    setNavItems(newNavItems)
  }

  const onMouseLeave = ({ target }) => {
    const newNavItems = [...navItems]
    newNavItems.find((item) => item.id === target.id).active = false
    setNavItems(newNavItems)
  }

  return (
    <PageContainer>
      <Fadedown in={isMounted}>
        <NameContainer>
          <span>Ruiqi Yang</span> - Frontend Developer
        </NameContainer>
      </Fadedown>
      <LandingPageItemContainer>
        <LandingPageItemInnerContainer>
          {navItems.map((navItem) => (
            <LangingPageItem key={navItem.id}>
              <LargeFadeUp in={isMounted}>
                <TransitionInner style={{ transitionDelay: `${navItem.id * 100}ms` }}>
                  <LandingPageLink
                    onMouseEnter={() => onMouseEnter({ target: navItem })}
                    onMouseLeave={() => onMouseLeave({ target: navItem })}
                    onClick={() => {
                      handleScroll(navItem.title)
                      setTimeout(() => onMouseLeave({ target: navItem }), 500)
                    }}
                  >
                    <IconWrapper>{navItem.icon(200)}</IconWrapper>
                    <IconWrapperMobile>{navItem.icon(120)}</IconWrapperMobile>
                  </LandingPageLink>
                </TransitionInner>
              </LargeFadeUp>
            </LangingPageItem>
          ))}
        </LandingPageItemInnerContainer>
      </LandingPageItemContainer>
      {navItems.map((navItem) => (
        <HeroTextFadeup in={navItem?.active && !scrolling} key={navItem.id}>
          <BigText>{navItem.title}</BigText>
        </HeroTextFadeup>
      ))}
    </PageContainer>
  )
}
