import styled from "styled-components/macro"

interface CompletedChallengesProps {}

export const CompletedChallenges: React.FC<CompletedChallengesProps> = ({
  ...props
}) => {
  return (
    <StyledCompletedChallenges {...props}>
      <Label>Desafios completos</Label>
      <Amount>5</Amount>
    </StyledCompletedChallenges>
  )
}

const StyledCompletedChallenges = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;

  border-bottom: 1px solid #d7d8da;

  font-weight: 500;
`

const Label = styled.span`
  font-size: 1.25rem;
`

const Amount = styled.span`
  font-size: 1.5rem;
`
