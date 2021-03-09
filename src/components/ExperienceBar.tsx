import { useContext } from "react"
import styled, { css } from "styled-components/macro"
import { ChallengesContext } from "../contexts/ChallengesContext"

interface ExperienceBarProps {}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({ ...props }) => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <StyledExperienceBar {...props}>
      <span>0 xp</span>
      <Bar>
        <BarProgress
          style={{
            width: `${percentToNextLevel}%`,
          }}
        />

        <CurrentExperience
          style={{
            left: `${percentToNextLevel}%`,
          }}
        >
          {currentExperience} xp
        </CurrentExperience>
      </Bar>
      <span>{experienceToNextLevel} xp</span>
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
    height: 4px;

    border-radius: 4px;
    background: ${theme.colors.green};
  `}
`

const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`
