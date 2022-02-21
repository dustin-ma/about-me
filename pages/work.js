import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import Layout from '../components/layouts/article'
import {Meta, MenuButtonBox} from '../components/work'
// import tempImg from '../public/images/logo.png'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Work = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={6}>
                Work History
            </Heading>
            <SimpleGrid columns={[1,1,1]} gap={0} mb={6}>
                <Section>
                    <WorkGridItem id="rockstar" title="Software Engineer • Rockstar Music">
                        <Meta color="green">Internship</Meta> <Meta color="purple"> Full-stack </Meta> <Meta color="red"> Completed</Meta>
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="mytownhome" title="Project Manager • MyTownhome.ca">
                        <Meta color="green">Internship</Meta> <Meta color="purple"> Project Management </Meta> <Meta color="red"> Completed</Meta>
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Heading as="h3" fontSize={20} mb={6}>
                Projects
            </Heading>
            <SimpleGrid columns={[1,1,1]} gap={0} mb={6}>
                <Section>
                    <WorkGridItem id="twitter" title="Twitter Backend Clone">
                        <Meta color="green">Personal Project</Meta> <Meta color="purple"> Backend </Meta> <Meta color="red"> Completed</Meta>
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="speer" title="Interactive Landing Page">
                        <Meta color="green">Personal Project</Meta> <Meta color="purple"> Frontend </Meta> <Meta color="red"> Completed</Meta>
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="slack" title="Slack Chat Bot">
                        <Meta color="green">Personal Project</Meta> <Meta color="purple"> Backend </Meta> <Meta color="red"> Work in progress</Meta>
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>

        <MenuButtonBox/>
        </Layout>
    )
}

export default Work