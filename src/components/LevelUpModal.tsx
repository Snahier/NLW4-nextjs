import { useContext } from "react"
import styled, { css } from "styled-components/macro"
import { ChallengesContext } from "../contexts/ChallengesContext"

interface LevelUpModalProps {}

export const LevelUpModal: React.FC<LevelUpModalProps> = ({ ...props }) => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <StyledLevelUpModal {...props}>
        <Header>{level}</Header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <CloseButton onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Fechar modal" />
        </CloseButton>
      </StyledLevelUpModal>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(242, 243, 245, 0.8);
`

const StyledLevelUpModal = styled.div`
  ${({ theme }) => css`
    position: relative;

    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    background-color: ${theme.colors.white};

    text-align: center;

    strong {
      color: ${theme.title};
      font-size: 2.25rem;
    }

    p {
      margin-top: 0.25rem;

      color: ${theme.text};
      font-size: 1.25rem;
    }
  `}
`

const Header = styled.header`
  ${({ theme }) => css`
    background: url("icons/levelup.svg") no-repeat center;
    background-size: contain;

    color: ${theme.colors.blue};
    font-size: 8.75rem;
    font-weight: 600;
  `}
`

const CloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  border: none;
  background: transparent;

  font-size: 0;
`
