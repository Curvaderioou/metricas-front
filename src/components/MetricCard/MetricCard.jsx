import { MetricCardStyled } from "./MetricCardStyled";

/* eslint-disable react/prop-types */
export function MetricCard(props) {
  return (
    <>
      <MetricCardStyled>
        <span id="minus">-</span>
        <p>{props.name}</p>
        <span id="plus">+</span>
      </MetricCardStyled>
    </>
  );
}
