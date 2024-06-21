import ButtonDefault from '../components/button-default/ButtonDefault';
import Container from '../components/container/Container';
import DefaultCard from '../components/default-card/DefaultCard';
import DefaultPage from '../config/layout/DefaultPage';
import Form from '../components/form/Form';

function Home() {
    function handleClick() {
      alert('I am sorry, we are currently fully booked.');
    }

  return (
    <>
      <DefaultPage>
        <Container ordem={false} cor={false}>
          {' '}
          <h1>Data Insights Pro</h1>
          <p>
            The Data Insights Pro course provides hands-on experience in data analysis. Students will learn practical
            skills to collect, process, and interpret large volumes of data. By using advanced tools and techniques,
            participants will gain the ability to handle real-world data challenges effectively.
          </p>
          <p>
            Throughout the Data Insights Pro course, students will delve into various analytical techniques. From basic
            data cleaning to sophisticated data modeling, the curriculum covers a wide range of methods. This
            comprehensive approach ensures that participants are well-equipped to derive meaningful insights from data.
          </p>
          <p>
            Data Insights Pro focuses on applying data analysis in real-world scenarios. Students will work on projects
            that mimic industry challenges, allowing them to apply their skills in a practical context. By the end of
            the course, participants will be capable of turning raw data into actionable insights that can influence
            strategic decisions in any field.
          </p>
        </Container>
        <Container ordem={false} cor={false}>
          <h2>Advantages of our training:</h2>
        </Container>
        <Container ordem={false} cor={false}>
          <DefaultCard
            children={
              <>
                <h2>1. Comprehensive Curriculum:</h2>
                <p>
                  Our Data Insights Pro course offers a thorough curriculum that covers all aspects of data analysis.
                  From the basics of data collection and cleaning to advanced modeling and visualization techniques, our
                  program ensures that students gain a deep and holistic understanding of data analysis, making them
                  proficient and confident in their abilities.
                </p>
              </>
            }
          ></DefaultCard>
          <DefaultCard
            children={
              <>
                <h2>2. Expert Instructors:</h2>
                <p>
                  Our course is taught by industry experts with years of experience in data science and analytics. These
                  professionals bring real-world knowledge and insights to the classroom, providing students with
                  valuable perspectives and practical advice. This ensures that our students learn not just the theory
                  but also the practical application of data analysis skills.
                </p>
              </>
            }
          ></DefaultCard>
          <DefaultCard
            children={
              <>
                <h2>3. Real-World Projects:</h2>
                <p>
                  The Data Insights Pro course includes numerous hands-on projects that simulate real-world data
                  challenges. These projects allow students to apply what they've learned in a practical context, giving
                  them the experience and confidence to tackle similar problems in their professional careers. By the
                  end of the course, students will have a portfolio of projects that demonstrate their capabilities to
                  potential employers.
                </p>
              </>
            }
          ></DefaultCard>
        </Container>
        <Container ordem={true} cor={true}>
          <h2>Average salary</h2>
          <h3>Junior: $3000 - $5000</h3>
          <h3>Middle: $5000 - $8000 </h3>
          <h3>Senior: $8000 - $11000</h3>
        </Container>
        <Container ordem={false} cor={false}>
          <div style={{ textAlign: 'center' }}>
            <ButtonDefault label="Press the button to join us!" action={handleClick} />
          </div>
        </Container>
        <Container ordem={false} cor={false}>
        <DefaultCard
            children={
              
              <Form/>
            }
          ></DefaultCard>
        </Container>
      </DefaultPage>
    </>
  );
}

export default Home;
