import Head from "next/head"
import { useEffect, useState } from "react"
import styled, { css } from "styled-components/macro"

interface CountdownProps {}

export const Countdown: React.FC<CountdownProps> = ({ ...props }) => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

  const startCountdown = () => setActive(true)

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

  return (
    <div>
      <StyledCountdown {...props}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <TimeWrapper>
          <TimeDigit>{minuteLeft}</TimeDigit>
          <TimeDigit>{minuteRight}</TimeDigit>
        </TimeWrapper>

        <TimeSeparator>:</TimeSeparator>

        <TimeWrapper>
          <TimeDigit>{secondLeft}</TimeDigit>
          <TimeDigit>{secondRight}</TimeDigit>
        </TimeWrapper>
      </StyledCountdown>

      <CountdownButton onClick={startCountdown}>
        Iniciar um ciclo
      </CountdownButton>
    </div>
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

const CountdownButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    margin-top: 2rem;
    width: 100%;
    height: 5rem;

    border: none;
    border-radius: 5px;
    background: ${theme.colors.blue};

    color: ${theme.colors.white};
    font-size: 1.25rem;
    font-weight: 600;

    &:hover {
      background: ${theme.colors.blueDark};
    }
  `}
`
