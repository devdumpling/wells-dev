import { Hero } from '../components/Hero'
import { Container } from '../components/Container'

import { DarkModeSwitch } from '../components/DarkModeSwitch'



const Index = () => (
  <Container minHeight="100vh">
    <Hero />

    <DarkModeSwitch />
  </Container>
)

export default Index
