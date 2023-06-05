import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-4">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <div>
        <Card.Title as="h3" href={href} > {title}
        </Card.Title>
      </div>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Resume() {
  return (
    <>
      <Head>
        <title>Florian Pfahler | Resume</title>
        <meta name="description" content="Resume" />
      </Head>

      <SimpleLayout title="Resume"
      // intro="Lorem Ipsum"
      >
        <div className="space-y-8">
          <ToolsSection title="Education">
            <Tool title="Industrial Engineering - National University of San Juan">
              Coursework completed, Professional Internship pending.
              GPA: 7.57/10
            </Tool>
          </ToolsSection>
          <ToolsSection title="Experience">
            <Tool title="Angular Developer & UX/UI Designer - Voces Vitales ">
              {/* (Jun 2022 - Dec 2022) */}
              - Designed the user interface of a web app using Figma, focusing on usability and user experience<br />
              - Developed an interactive and intuitive platform using Angular, implementing a responsive design<br />
              - Coordinated the development team, ensuring the achievement of project objectives and deadlines
            </Tool>
            <Tool title="Web Designer Tutor - Folcademy ">
              {/* (Sep 2022 - Dec 2022) */}
              - Supervised and consistently motivated 30 students, seeking to enhance the development of their skills<br />
              - Provided classes with constructive and specific feedback so that students could improve their projects
            </Tool>
            <Tool title="Mathematics Teacher - Freelance ">
              {/* (Jun 2019 - Present) */}
              - Taught classes to over 200 students of varying ages and backgrounds, focusing on their individual needs and utilizing various resources for both in-person and virtual instruction
            </Tool>
            <Tool title="Guitar Instructor - Freelance ">
              {/* (Jan 2016 - Jun 2019) */}
              - Provided personalized guitar lessons to 20 teenagers, focusing on their skills and motivations
            </Tool>
          </ToolsSection>

          <ToolsSection title="Courses">
            <p className=" text-sm text-zinc-600 dark:text-zinc-400">
              English for Software Development (Advanced) <br />
              UX/UI Design Specialization <br />
              Full Stack Developer (Javascript/Node.js)<br />
              UX Design Professional
            </p>
          </ToolsSection>

          <ToolsSection title="Skills">
            <Tool title="Software Development">
              HTML, CSS, Javascript, TypeScript, RESTful API, Angular, React, Next.js, Bitbucket, Postman, Firebase, Heroku
            </Tool>
            <Tool title="UX/UI Design">
              Figma, Adobe XD, Adobe Illustrator, InVision, Marvel
            </Tool>
            <Tool title="Data Analysis">
              SQL, Python, PowerBI, Tableau
            </Tool>
            <Tool title="Project Managment">
              Jira, Trello, Asana, Notion, Google Workspace, MS Office, Agile Methodologies
            </Tool>
          </ToolsSection>

          <ToolsSection title="Languages">
            <Tool title="English">
              Fluent in verbal and written communication (CEFR C1)
            </Tool>
            <Tool title="German">
              Elementary conversational skills and understanding (CEFR A2)
            </Tool>
          </ToolsSection>

        </div>
      </SimpleLayout >
    </>
  )
}
