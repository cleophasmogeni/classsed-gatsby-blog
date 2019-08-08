import React from 'react';
import AssignmentSummary from './AssignmentSummary';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


const AssignmentList = ({assignments, userId, })=>{
    let Content;
  if (!assignments) {
    Content = (
       <div>No work to show</div>
    );
  } else if (!assignments[userId] || !assignments[userId].assignments) {
    Content = (
      <div>No work to show</div>
    );
  } else {
    Content = (
      <tbody>
            {assignments[userId].assignments
          .slice(0)
          .reverse()
          .map(assignment=>{
                    return(
                    
                        <AssignmentSummary assignment={assignment} key={assignment.id} />
                   
                    )
                })}						
            </tbody>
    );
  }
  return (
      Content
  )
}

const mapStateToProps = ({ firebase, firestore }) => ({  
    userId: firebase.auth.uid,
    assignments: firestore.data.assignments,
    requesting: firestore.status.requesting,
    requested: firestore.status.requested,
  });
  
  const mapDispatchToProps = {};
  
  export default compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    firestoreConnect(props => [`assignments/${props.userId}`])
  )(AssignmentList);
  