import React, { useState, useEffect } from 'react';

// REDUX //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';

import { Button } from '../components/Buttons/Button';

import { Form } from '../components/Base';
import { DefaultInput } from '../components/Input';
import { ChevronRight } from 'react-feather';

const SecondPage = ({ infosForms, setInfosForms, setPage }) => {
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');


  useEffect(() => {
    if (infosForms !== undefined) {
      setLinkedin(infosForms.linkedin);
      setGithub(infosForms.github);
    }
  }, []);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setPage(2);
        setInfosForms({ ...infosForms, linkedin, github });
      }}
    >
      <DefaultInput
        id="Linkedin"
        setValue={setLinkedin}
        placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        value={linkedin}
        text="Linkedin"
        required={false}
      />
      <DefaultInput
        id="Github"
        setValue={setGithub}
        placeholder="https://github.com/foobar"
        value={github}
        text="Github *"
        required={true}
      />
      <Button>
        <p>Next</p>
        <ChevronRight size={20} />
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({ infosForms: state.infosForms });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
