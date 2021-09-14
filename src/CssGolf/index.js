import React from "react";
import styled from "styled-components";
import Topic from "./Topic";

import {
    BrowserRouter as Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

const Element = ({ CssGolf }) => {
    let match = useRouteMatch();

    return (
        <div className="h-100 w-100">
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
};

const StyledElement = styled(Element)``;

export default StyledElement;
