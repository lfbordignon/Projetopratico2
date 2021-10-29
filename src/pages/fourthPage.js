import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';
import { Table, Th, Td, P } from '../components/Table/Table';
import { Button } from '../components/Buttons/Button';
import { ChevronRight } from 'react-feather';

const FourthPage = ({ infosForms, setPage, reset }) => {
  return (
    <div style={{ position: 'relative', height: '600px' }}>
      <Table>
        <thead>
          <tr>
            <Th>Fields</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Full Name</Td>
            <Td>
            <P>aaaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Nickname</Td>
            <Td>
              <P>aaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Email</Td>
            <Td>
              <P>aaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Phone</Td>
            <Td>
              <P>aaaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Birthday</Td>
            <Td>
              <P>aaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Linkedin</Td>
            <Td>
              <P>aaaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Github</Td>
            <Td>
              <P>aaaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Cerficates</Td>
            <Td>
              <P>aaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Team Name</Td>
            <Td>
              <P>aaaaaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Institution</Td>
            <Td>
              <P>aaaaaaaa</P>
            </Td>
          </tr>
          <tr>
            <Td>Graduation</Td>
            <Td>
              <P>aaaaaaaaa</P>
            </Td>
          </tr>
        </tbody>
      </Table>
      <Button
        onClick={() => {
          reset();
          setPage(0);
        }}
      >
        OK
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({ infosForms: state.infosForms });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FourthPage);
