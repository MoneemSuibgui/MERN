import React from 'react';

const Results = (props) => {
    
    const { allTabs, currentTabIndex } = props;

    return (
        // display all content of tables 
        <div className="results">
        { allTabs[currentTabIndex].content }
        </div>
    )
    }

export default Results;