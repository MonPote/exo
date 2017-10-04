import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false
    }
  }

  render() {
    let questions = [];
    for (let i = 0; i < 7; ++i) {
      questions = [...questions, `Question ${i}`];
    }

    let answers = [];
    for (let i = 0; i < 7; ++i) {
      answers = [...answers, `Answer of question ${i}`];
    }

    return (
      <div>
        <Button bsStyle='primary'>Primary</Button>
        <Grid>
          <Questions questions={questions} answers={answers} />
        </Grid>
      </div>
    );
  }
}


function Questions(props) {
  return (
    <Row>
      {props.questions.map((question, index) => {
        return (
          <Col
            key={question}
            sm={12}
            md={6}
            lg={3}
          >
            <Row>
              {question}
            </Row>
            <Row>
              {props.answers[index]}
            </Row>
          </Col>
        );
      })}
    </Row>
  );
}
