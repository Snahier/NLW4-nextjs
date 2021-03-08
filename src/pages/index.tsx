import styled from "styled-components/macro"
import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { CountdownProvider } from "../contexts/CountdownContext"

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <CountdownProvider>
        <Section>
          <div>
            <Profile />
            <CompletedChallenges />

            <Countdown />
          </div>

          <ChallengeBox />
        </Section>
      </CountdownProvider>
    </div>
  )
}

const Section = styled.section`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-items: center;
`
