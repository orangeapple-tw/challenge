import React from "react";
import styled from "styled-components";

import {
    BrowserRouter as Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

const Element = ({ CssGolfs }) => {
    let match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${match.path}`}>
                    <h3>List</h3>
                </Route>
            </Switch>
        </div>
    );
};

const StyledElement = styled(Element)`
  width: 100%;
  height: 40px;
  box-shadow: 0 0 5px 2px #ccc;
  .element__img {
  }
  .element__info {
    .element__title {
    }
    .element__description {
    }
  }
`;

export default StyledElement;
