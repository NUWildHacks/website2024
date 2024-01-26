import styled from 'styled-components';
import Question from '../components/Question';
import { mobile } from '../styles';

const Section = styled.div`
  padding-top: 75px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Category = styled.div`
  padding: 1rem;
  margin: 48px 0;

  ${mobile} {
    width: 100%;
  }
`;

const CategoryTitle = styled.h3`
  margin: 16px 0;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 3px;
  font-family: GentiumBookPlus;
`;

const FAQTitle = styled.h2`
  text-align: center;
  margin: 16px 0;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 3px;
  font-family: GentiumBookPlus;
`;

export default function FAQ() {
  return (
    <Section id="faq">
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <Category>
        <CategoryTitle>GENERAL</CategoryTitle>
        <Question q="What is WildHacks?">
          WildHacks is a <span>weekend-long event</span> where students work
          together to create cool software projects! You can expect{' '}
          <span>workshops</span>,{' '}
          <span>free food from Evanston restaurants</span>,{' '}
          <span>fun social and de-stress events</span>, <span>free swag</span>,
          and more!
        </Question>
        <Question q="When is WildHacks?">
          WildHacks 2024 will take place from <span>Friday, April 5, 2024</span>{' '}
          to <span>Sunday, April 7, 2024</span>. However, hacking won't start
          until the tracks are released on <span>April 6</span> at{' '}
          <span>11:00 AM</span>, with check in for the event starting at{' '}
          <span>9:00 AM</span> that same day. Starting at <span>5:00 PM</span>{' '}
          on <span>April 5</span>, we'll have Workshop Night, which is an
          optional opportunity for you to learn some skills to help you with
          your hackathon project. You are welcome to skip that part of the event
          if you wish and check in on Saturday morning.
        </Question>
        <Question q="Where is WildHacks?">
          WildHacks will take place on the Northwestern University campus. More
          details will be released closer to the event.
        </Question>
        <Question q="Is this hackathon purely coding-based?">
          The hackathon will be <span>software-focused</span>, but don't worry
          if you don't have prior coding experience. We'll send out resources
          and have workshops to help you learn how to code.
        </Question>
        <Question q="Where can I find an event schedule?">
          The full schedule will be released closer to the event, but check-in
          will begin at <span>9:00 AM</span> on{' '}
          <span>Saturday, April 6, 2024</span> with the opening ceremony
          starting at <span>11:00 AM</span>, and the closing ceremony will end
          at <span>5:00 PM</span> on <span>Sunday, April 7, 2024</span>.
          Workshop Night will take place at <span>5:00 PM</span> on{' '}
          <span>Friday, April 5, 2024</span>.
        </Question>
        <Question q="What will I submit?">
          At the end of the hackathon, you'll submit your project's{' '}
          <span>source code</span>, a <span>2-minute video pitch</span>, and any
          other relevant resources to the WildHacks Dashboard. Top projects will
          be selected to <span>demo live on stage</span> to win prizes. A
          detailed rubric will be released during the event.
        </Question>
      </Category>
      <Category>
        <CategoryTitle>REGISTRATION / TEAMS</CategoryTitle>
        <Question q="Who is eligible to participate?">
          All <span>university students</span> are eligible to participate in
          WildHacks! High school students are unfortunately not eligible to
          participate in WildHacks.
        </Question>
        <Question q="What if I've never coded before?">
          WildHacks is open to students of <span>all experience levels</span>!
          We'll send out resources with beginner-friendly tutorials and
          workshops, and we'll will have a Discord server on which you can ask
          questions.
        </Question>
        <Question q="How will teams work?">
          Teams can consist of up to <span>4 members</span>! We strongly
          encourage you to work with others.
        </Question>
        <Question q="Are you required to have a team to register?">
          <span>No, you are not required to register with a team.</span> At the
          start of the event, if you don't already have a team in mind, you can
          choose find a team to join or be randomly assigned to one. There will
          be time during the event to find team members, but you can also find
          members on the Discord server.
        </Question>
      </Category>
      <Category>
        <CategoryTitle>LOGISTICS</CategoryTitle>
        <Question q="Will there be sleeping / showering accommodations?">
          There will be a room reserved overnight dedicated to sleeping.
          However, we recommend bringing pillows and blankets. There are showers
          at Mudd Library, and we'll provide toiletries (shower gel, shampoo,
          and conditioner), but we recommend bringing your own towel. However,
          you're welcome to come to and go from the event as you please.
        </Question>
        <Question q="Will transportation be reimbursed?">
          Unfortunately, transportation will not be reimbursed.
        </Question>
        <Question q="Do I have to come to Workshop Night?">
          <span>Workshop Night is optional!</span> The actual hacking portion of
          the hackathon will not start until the morning of April 6. However, if
          you're interested in learning some skills to help you with your
          hackathon project, we recommend coming to Workshop Night. We'll
          provide food!
        </Question>
        <Question q="Do I have to stay for the full event?">
          No, you are free to leave the event before the hackathon ends!
          However, in order to claim prizes, you must be present at the closing
          ceremony on Sunday, April 7 at 4:00 PM.
        </Question>
      </Category>
      <Category>
        <CategoryTitle>SUPPORT</CategoryTitle>
        <Question q="How can I get in touch?">
          Send us an email at <span>wildhacks@northwestern.edu</span>! We'd be
          happy to answer any questions about the event or steps to get
          involved.
        </Question>
        <Question q="I'm interested in sponsoring WildHacks. Who should I contact?">
          Send us an email at <span>wildhacks@northwestern.edu</span>! We'd be
          happy to talk.
        </Question>
      </Category>
    </Section>
  );
}
