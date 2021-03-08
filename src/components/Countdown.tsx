import styled, { css } from "styled-components/macro"

interface CountdownProps {}

export const Countdown: React.FC<CountdownProps> = ({ ...props }) => {
  return (
    <StyledCountdown {...props}>
      <TimeWrapper>
        <TimeDigit>2</TimeDigit>
        <TimeDigit>5</TimeDigit>
      </TimeWrapper>

      <TimeSeparator>:</TimeSeparator>

      <TimeWrapper>
        <TimeDigit>0</TimeDigit>
        <TimeDigit>0</TimeDigit>
      </TimeWrapper>
    </StyledCountdown>
  )
}

const StyledCountdown = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.title};
    font-family: ${theme.fonts.rajdhani};
    font-weight: 600;
  `}
`

const TimeWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    background: ${theme.colors.white};

    font-size: 8.5rem;
    text-align: center;

    ${TimeDigit} {
      &:first-child {
        border-right: 1px solid #f0f1f3;
      }
      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  `}
`

const TimeSeparator = styled.span`
  margin: 0 0.25rem;

  font-size: 6.25rem;
`

const TimeDigit = styled.span`
  flex: 1;
`
