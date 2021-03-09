import { GetServerSideProps } from "next"
import styled from "styled-components/macro"
import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import { CountdownProvider } from "../contexts/CountdownContext"

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

const Section = styled.section`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-items: center;
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  }
}
