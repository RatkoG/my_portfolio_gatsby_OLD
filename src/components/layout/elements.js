import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* TODO: Fix this here */
  min-height: ${({ fullHeight }) =>
    fullHeight
      ? "100vh"
      : "auto"}; /* Fallback for browsers that do not support Custom Properties */
  min-height: ${({ fullHeight }) =>
    fullHeight ? "calc(var(--vh, 1vh) * 100)" : "auto"};
`
export const Contained = styled.div`
  max-width: 124rem;
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
`
export const Wrapper = styled.div`
  padding: 4rem 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`
export const StyledSectionSkew = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* min-height: 100vh; */
  transform: skewY(-7deg);
`
export const ContainedSkew = styled.div`
  max-width: 124rem;
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
  transform: skewY(7deg);
`
