import styled from "styled-components/macro"
import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <ChallengeBox />
      </Section>
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
