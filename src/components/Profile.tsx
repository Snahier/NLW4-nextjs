import { useContext } from "react"
import styled, { css } from "styled-components/macro"
import { ChallengesContext } from "../contexts/ChallengesContext"

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({ ...props }) => {
  const { level } = useContext(ChallengesContext)

  return (
    <StyledProfile {...props}>
      <UserImage src="https://github.com/snahier.png" alt="Snahier" />
      <Details>
        <strong>Snahier</strong>
        <p>
          <LevelIcon src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </Details>
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
`

const UserImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`

const Details = styled.div`
  ${({ theme }) => css`
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${theme.title};
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  `}
`

const LevelIcon = styled.img`
  margin-right: 0.5rem;
`
