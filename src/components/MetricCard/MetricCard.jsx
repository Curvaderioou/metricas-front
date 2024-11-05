import { GuardaMetric, MetricCardStyled } from "./MetricCardStyled";

/* eslint-disable react/prop-types */
export function MetricCard(props) {
  return (
    <>
      <GuardaMetric>
        <MetricCardStyled>
          <span id="minus">-</span>
          <p>{props.actions}</p>
          <span id="plus" onClick={props.add}>
            +
          </span>
        </MetricCardStyled>
        <h2>{props.name}</h2>
      </GuardaMetric>
    </>
  );
}
