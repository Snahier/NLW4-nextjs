import { createContext, ReactNode, useEffect, useState } from "react"
import challenges from "../../challenges.json"

interface Challenge {
  type: "body" | "eye"
  description: string
  amount: number
}
interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: Challenge
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export const ChallengesProvider = ({ children }) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(3)

  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceFactor = 4
  const experienceToNextLevel = ((level + 1) * experienceFactor) ** 2

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    if (Notification.permission === "granted") {
      new Notification("Novo desafio!", {
        body: `Valendo ${challenge.amount} xp`,
      })
    }
  }

  const resetChallenge = () => setActiveChallenge(null)

  const completeChallenge = () => {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        activeChallenge,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
