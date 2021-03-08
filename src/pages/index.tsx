import styled from "styled-components/macro"
import { CompletedChallenges } from "../components/CompletedChallenges"
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
        </div>
        <div></div>
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
