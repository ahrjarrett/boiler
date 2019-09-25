import styled, { css } from 'styled-components/macro'
import { invertColor } from 'utils'

export const Outermost = styled.div`
  display: flex;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h3`
  font-size: 32px;
`

export const Recurse = styled.div`
  font-family: monospace;
  font-size: 20px;
  margin-left: 80px;
  section {
    margin-left: 20px;
  }
  section > section {
    padding-left: 20px;
  }
`

export const Key = styled.span`
  font-weight: 700;
  font-style: italic;
`

const unkeyedStyles = css`
  position: absolute;
  left: 50px;
`
export const Value = styled.span`
  margin-left: 8px;
`

export const Scalar = styled.p`
  display: ${({ display }) => (display ? 'block' : 'none')};
  &::after {
    content: ',';
  }
  &:last-child::after {
    content: '';
  }
`

const collectionTypeStyling = css`
  display: block;
  position: relative;
  &::before {
    position: absolute;
    top: 17.5px;
    left: -60px;
  }
`

export const CollectionItem = styled.li`
display: flex;
align-items: flex-start;
margin-left: 25px;
  ${({ hasKey }) => !hasKey && unkeyedStyles}
  list-style-type: none;
  &::before {
    content: '${({ order }) => order}:';
    margin-top: 10px;
  }
`

export const List = styled.ol`
  ${collectionTypeStyling}
  background: ${({ color }) => color};
  color: ${({ color }) => invertColor(color)};

  margin-bottom: 20px;
  padding-bottom: 20px;
  border: 4px dashed #fff;

  display: flex;
  & > div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    &::before {
      content: '[';
      position: absolute;
      left: 10px;
    }
    &::after {
      content: '],';
      position: absolute;
      bottom: -5px;
      left: 10px;
    }
  }
  & p {
    margin: 10px;
  }
  & li {
    padding-left: 25px;
    &:first-child {
      margin-top: 25px;
    }
    &:last-child {
      margin-bottom: 25px;
    }
  }
`

export const Hash = styled.section`
  ${collectionTypeStyling}
  color: ${({ color }) => invertColor(color)};
  background: ${({ color }) => color};

  padding: 20px 0 20px 20px;
  margin-left: 10px;
  margin-bottom: 20px;

  border: 2px solid white;
  &::before {
    position: absolute;
    left: 0px;
    top: 7.5px;
    content: '{';
  }
  &::after {
    content: '},';
    position: absolute;
    bottom: -0;
    left: 10px;
  }
`
