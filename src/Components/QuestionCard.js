import React, { useEffect } from "react";
import {
  CardTitle,
  TitleTexts,
  DisplayFlex,
  RemainingCounter,
  Options,
  Option,
  CardBody,
  Question,
  Wrapper,
  Layout,
  Remainder,
  Timer,
  PrimaryButton
} from "./styles";

export const QuestionCard = props => {
  // console.log(props,"PROPS")
  return (
    <Wrapper color="black">
      <Layout>
        <CardHeader {...props.content} />
        <CardContent
          each={props.content.questions[props.content.current]}
          handleNext={props.handleNext}
          handleSelection={props.handleSelection}
          handleSubmit={props.handleSubmit}
          currentOptions={props.currentOptions}
          reason={props.reason}
          next={props.next}
          remainder={props.content.remainder}
        />
      </Layout>
    </Wrapper>
  );
};

const CardHeader = ({ skills, remainder, timer }) => {
  return (
    <CardTitle>
      <DisplayFlex>
        <TitleTexts>Skills: &nbsp;</TitleTexts>
        {skills &&
          skills.map((skill, index) => (
            <TitleTexts bold>
              {`${skill} ${index !== skills.length - 1 ? "," : ""}`}&nbsp;
            </TitleTexts>
          ))}
      </DisplayFlex>
      <DisplayFlex center>
        <Timer> {timer}s</Timer>
      </DisplayFlex>
      <RemainingCounter>
        <Remainder color>
          <b>{remainder}</b>
        </Remainder>
        <TitleTexts>Questions remaining.</TitleTexts>
      </RemainingCounter>
    </CardTitle>
  );
};

const CardContent = ({
  each,
  handleNext,
  handleSelection,
  currentOptions,
  next,
  remainder,
  handleSubmit
}) => {
  const question = each && each.question,
    options = each && each.options;

  const OptionComponent = () => {
    return (
      <Options>
        {options &&
          Object.keys(options).map((option, index) => {
            return (
              <>
                <Option
                  key={option}
                  color={currentOptions[index]}
                  onClick={e => {
                    handleSelection(index, option);
                  }}
                >{`${option} : ${options[option]}`}</Option>
              </>
            );
          })}
      </Options>
    );
  };

  return (
    <>
      {question && (
        <CardBody>
          <Question>{question}</Question>
          {OptionComponent()}
          <DisplayFlex right>
            {remainder ? (
              <PrimaryButton
                enable={next}
                onClick={() => {
                  handleNext();
                }}
              >
                Next question
              </PrimaryButton>
            ) : (
              <PrimaryButton
                enable={next}
                onClick={() => {
                  handleSubmit();
                }}
              >
                View results
              </PrimaryButton>
            )}
          </DisplayFlex>
        </CardBody>
      )}
    </>
  );
};
