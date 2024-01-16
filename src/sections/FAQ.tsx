import styled from 'styled-components';
import Question from '../components/Question';

const FAQContainer = styled.div`
  background-color: var(--red);
`;

const Category = styled.div`
  padding: 1rem;
  margin-top: 24px;
  max-width: 1000px;
`;

const CategoryTitle = styled.h3`
  margin: 16px 0;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 3px;
  opacity: 0.75;
`;

const FAQTitle = styled.h3`
  text-align: center;
  margin: 16px 0;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 3px;
  opacity: 0.75;
`;

const Boundary = styled.div<{ top: boolean }>`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: ${(props) => props.top && 'rotate(180deg)'};

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 107px;
    transform: rotateY(180deg);
  }

  .shape-fill {
    fill: var(--darkgreen);
  }
`;

export default function FAQ() {
  return (
    <div id="faq">
      <FAQContainer>
        <Boundary top>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </Boundary>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <Category>
          <CategoryTitle>GENERAL</CategoryTitle>
          <Question q="What is WildHacks?">
            WildHacks is a <span>weekend-long event</span> where students work
            together to create cool software projects! You can expect{' '}
            <span>workshops</span>,
            <span>free food from Evanston restaurants</span>,{' '}
            <span>fun social and de-stress events</span>, <span>free swag</span>,
            and more!
          </Question>
          <Question q="What if I've never coded before?">
            WildHacks is open to students of <span>all experience levels</span>!
            We'll send out resources with beginner-friendly tutorials and will
            have a Discord server on which you can ask questions.
          </Question>
          <Question q="Is this hackathon purely coding-based?">
            The hackathon will be <span>software-focused</span>, but don't worry
            if you don't have prior coding experience. We'll send out resources
            and have workshops to help you learn how to code.
          </Question>
          <Question q="Where can I find an event-based schedule for the entirety of this hackathon?">
            The full schedule will be released closer to the event, but check-in
            will begin at <span>9:00 AM on Saturday, April 15, 2023</span> with
            the opening ceremony starting at <span>11:00 AM</span>, and the
            closing ceremony will end at{' '}
            <span>5:00 PM on Sunday, April 16, 2023</span>.
          </Question>
          <Question q="What will I submit?">
            At the end of the hackathon, you'll submit your{' '}
            <span>project's source code</span>, a{' '}
            <span>2-minute video pitch</span>, and any other relevant resources to
            the WildHacks Dashboard. A more detailed rubric will be released
            during kickoff.
          </Question>
        </Category>
        <Category>
          <CategoryTitle>REGISTRATION / TEAMS</CategoryTitle>
          <Question q="Who is eligible to participate?">
            All <span>university students</span> are eligible to participate in
            WildHacks! High school students are unfortunately not eligible to
            participate in WildHacks.
          </Question>
          <Question q="How will teams work?">
            Teams can consist of up to <span>4 members</span>! We strongly
            encourage you to work with others!
          </Question>
          <Question q="Are you required to have a team to register?">
            <span>No, you are not required to register with a team</span>. At the
            start of the event, if you don't already have a team in mind, you can
            choose find a team to join or be randomly assigned to one. There will
            be time during the event to find team members, but you can also find
            members on the Discord server.
          </Question>
        </Category>
        <Category>
          <CategoryTitle>LOGISTICS</CategoryTitle>
          <Question q="Where will WildHacks take place?">
            WildHacks will take place primarily in Northwestern University's{' '}
            <span>Seeley G. Mudd Library</span>. The building will be open
            overnight. More details about the logistics of check-in will be
            released closer to the event.
          </Question>
          <Question q="Will there be sleeping / showering accommodations?">
            There will a room reserved overnight dedicated to sleeping. However,
            we recommend bringing pillows and blankets. There are two showers at
            Mudd Library, and we'll provide toiletries (shower gel, shampoo, and
            conditioner), but we recommend bringing your own towel.
          </Question>
          <Question q="Will transportation be reimbursed?">
            Transportation will not be reimbursed.
          </Question>
          <Question q="Do we have to stay for the full 36 hours?">
            No, you are free to leave the event before the hackathon ends!
            However, in order to claim prizes, you must be present at the closing
            ceremony on Sunday, April 15 at 4:00 PM.
          </Question>
          <Question q="What are the tentative COVID protocols?">
            We strongly recommend masking during the event. If you're more
            comfortable eating food outdoors, there will be an outdoor courtyard
            right next to the venue with tables and chairs.
          </Question>
        </Category>
        <Category>
          <CategoryTitle>SUPPORT</CategoryTitle>
          <Question q="How can I get in touch?">
            Send us an email at <span>
              <a href="mailto:wildhacks@northwestern.edu">
                wildhacks@northwestern.edu
              </a>
            </span>! We'd be
            happy to answer any questions about the event or steps to get
            involved.
          </Question>
          <Question q="I'm interested in sponsoring WildHacks. Who should I contact?">
            Send us an email at{' '}
            <span>
              <a href="mailto:wildhacks@northwestern.edu">
                wildhacks@northwestern.edu
              </a>
            </span>
            ! We'd be happy to talk.
          </Question>
        </Category>
        <Boundary top={false}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </Boundary>
      </FAQContainer>
    </div>
  );
}
