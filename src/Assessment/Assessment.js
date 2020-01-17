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
      score: {}
    };
  }

  keyMapper = key => {
    const Keys = {
      A: 0,
      B: 1,
      C: 2,
      D: 3
    };
    return Keys[key];
  };

  componentDidMount() {
    let questions = mockData;
    this.setState({ ...questions });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timer !== prevState.timer) {
      if (this.state.timer <= 30 && this.state.timer > 0) {
        this.tick();
      } else this.setState({ timer: 0 });
    }

    if (this.state.timer === null) {
      this.setState({ timer: 30 });
    }

    if(this.state.timer === 0 && this.state.currentOptions.length === 0){
      this.setState({currentOptions:[true,null,null,null,null]})
    }
  }

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
    this.setState({
      current: this.state.current + 1,
      timer: null,
      remainder: this.state.remainder && this.state.remainder - 1,
      currentOptions: []
    });
  };

  findAnswer = answer => {
    let question = { ...this.state.questions[this.state.current] };
    if (question.answer === answer) {
      return { question, reason: true };
    } else return { question, reason: false };
  };

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

  render() {
    return (
      <>
        {/* <>Basic Assessment Tier</> */}
        <QuestionCard
          content={this.state}
          handleNext={this.handleNext}
          handleSelection={this.handleSelection}
          reason={this.state.score[this.state.current + 1]}
          currentOptions={this.state.currentOptions}
        ></QuestionCard>
      </>
    );
  }
}

export default Assessment;
