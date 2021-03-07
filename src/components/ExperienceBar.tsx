import styled, { css } from "styled-components/macro"

interface ExperienceBarProps {}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({ ...props }) => {
  return (
    <StyledExperienceBar {...props}>
      <span>0 xp</span>
      <Bar>
        <BarProgress />

        <CurrentExperience>300 xp</CurrentExperience>
      </Bar>
      <span>600 xp</span>
    </StyledExperienceBar>
  )
}

const StyledExperienceBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
`

const Bar = styled.div`
  ${({ theme }) => css`
    position: relative;

    flex: 1;

    margin: 0 1.5rem;
    height: 4px;

    border-radius: 4px;
    background: ${theme.grayLine};
  `}
`

const BarProgress = styled.div`
  ${({ theme }) => css`
    width: 50%;
    height: 4px;

    border-radius: 4px;
    background: ${theme.colors.green};
  `}
`

const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
`
