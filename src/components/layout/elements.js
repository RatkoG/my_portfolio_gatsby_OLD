import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${({ fullHeight }) => (fullHeight ? "100vh" : "auto")};
`
export const Contained = styled.div`
  max-width: 124rem;
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
  @media ${props => props.theme.mediaQueries.small} {
    padding: 0 3rem;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 0 2rem;
  }
`
export const Wrapper = styled.div`
  padding: 4rem 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 3rem 1rem;
  }
`
export const StyledSectionSkew = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  transform: skewY(-7deg);
  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 6rem;
    padding: 4rem 0rem;
  }
  @media ${({ theme }) => theme.mediaQueries.smaller} {
    padding: 3rem 0rem;
  }
`
export const ContainedSkew = styled.div`
  max-width: 124rem;
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
  transform: skewY(7deg);
`
