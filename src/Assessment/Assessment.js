import React, { Component } from "react";
import mockData from "./mockData.json";
import { QuestionCard } from "../Components/QuestionCard";

class Assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: ["JavaScript", "React", "NodeJs"],
      remainder: 5,
      questions: [],
      current: 0,
      currentOptions: [],
      timer: null,
      reason: true,
      score: {},
      next: false
    };
  }

  //@type : Option Mapper
  keyMapper = key => {
    const Keys = {
      A: 0,
      B: 1,
      C: 2,
      D: 3
    };
    return Keys[key];
  };

   //@type : Points & Timer Mapper
  decisionTree = {
    accessTimers: {
      Easy: 30,
      Moderate: 60,
      Hard: 90
    },
    accessPoints: {
      Easy: 5,
      Moderate: 10,
      Hard: 15
    }
  };

  getCurrentQuestion = () => {
    let question = { ...this.state.questions[this.state.current] }
    return question;
  }

  getCurrentTimer = () => {
    let timer = this.decisionTree.accessTimers[this.getCurrentQuestion().difficulty]
    console.log(timer);
    return timer;
  }

  getCurrentPoints = () => {
    let points = this.decisionTree.accessTimers[this.getCurrentQuestion().difficulty]
    console(points);
    return points;
  }

  //Counter Time Out
  timeOut = () => {
    let question = { ...this.state.questions[this.state.current] },
      currentOptions = [null, null, null, null];
    currentOptions[this.keyMapper(question.answer)] = "correct";
    this.setState({ currentOptions });
  };

  //Counter TIck
  tick = () => {
    setTimeout(() => {
      if (this.state.timer > 0) {
        this.setState({ timer: this.state.timer - 1 });
      } else {
        this.setState({ timer: 0 });
      }
    }, 1000);
  };

  handleNext = () => {
    if (this.state.timer === 0 || this.state.currentOptions.length > 0) {
      this.setState({
        current: this.state.current + 1,
        timer: null,
        remainder: this.state.remainder && this.state.remainder - 1,
        currentOptions: [],
        next: false
      });
    } else return null;
  };

  enableNext = () => {
    this.setState({ next: true });
  };

  //Find Answer after CTA
  findAnswer = answer => {
    let question = { ...this.state.questions[this.state.current] };
    if (question.answer === answer) {
      return { question, reason: true };
    } else return { question, reason: false };
  };

  //Handle Choice
  handleSelection = (index, answer) => {
    const { question, reason } = this.findAnswer(answer);
    if (this.state.currentOptions.length < 1) {
      let currentOptions = [null, null, null, null];
      if (reason) {
        currentOptions[index] = "correct";
      } else {
        currentOptions[this.keyMapper(question.answer)] = "correct";
        currentOptions[index] = "wrong";
      }
      this.setState({
        score: { ...this.state.score, [this.state.current + 1]: reason },
        currentOptions
      });
    } else return null;
  };

  handleSubmit = () => {};

  componentDidMount() {
    let questions = mockData;
    this.setState({ ...questions });
  }

  componentDidUpdate(prevProps, prevState) {
    //Ticker
    if (this.state.timer !== prevState.timer) {
      if (this.state.timer <= this.getCurrentTimer()  && this.state.timer > 0) {
        this.tick();
      } else this.setState({ timer: 0 });
    }

    //Reset Counter On Next
    if (this.state.timer === null) {
      this.setState({ timer: this.getCurrentTimer() });
    }

    //Feedback on Reset Counter
    if (this.state.timer === 0 && this.state.currentOptions.length === 0) {
      this.timeOut();
    }

    //Disable Next CTA
    if (this.state.currentOptions.length === 0 && this.state.timer === 0) {
      this.enableNext();
    }

  }

  render() {
    return (
      <>
        {/* <>Basic Assessment Tier</> */}
        <QuestionCard
          content={this.state}
          handleNext={this.handleNext}
          handleSelection={this.handleSelection}
          handleSubmit={this.handleSubmit}
          reason={this.state.score[this.state.current + 1]}
          currentOptions={this.state.currentOptions}
          next={this.state.next}
        />
      </>
    );
  }
}

export default Assessment;
