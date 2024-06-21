import Form from '../components/form/Form';
import DefaultCard from '../components/default-card/DefaultCard';
import DefaultPage from '../config/layout/DefaultPage';
import Container from '../components/container/Container';

function Contact() {
  return (
    <>
      <DefaultPage>

        <Container ordem={false} cor={false}>
          {' '}
          <h1>Frequently Asked Questions (FAQs)</h1>
          <p>
            <h3>1. What prerequisites do I need to enroll in a data analysis course?</h3>
            Most data analysis courses require basic knowledge of statistics and familiarity with spreadsheet software
            like Microsoft Excel or Google Sheets. Some advanced courses may also require knowledge of programming
            languages such as Python or R.
          </p>
          <p>
            <h3>2. How long does it take to complete a data analysis course?</h3>
            The duration of a data analysis course can vary. Introductory courses may take a few weeks to complete,
            while more comprehensive programs, such as professional certificates or specializations, can take several
            months.
          </p>
          <p>
            <h3>3. What career opportunities can I pursue after completing a data analysis course?</h3>
            Completing a data analysis course can open up various career opportunities, including roles such as data
            analyst, business analyst, data scientist, and market research analyst. These positions are in demand across
            many industries, including finance, healthcare, marketing, and technology.
          </p>
        </Container>
        <DefaultCard children={<Form />}></DefaultCard>
      </DefaultPage>
    </>
  );
}

export default Contact;
