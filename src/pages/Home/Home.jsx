/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { MetricCard } from "../../components/MetricCard/MetricCard";
import { addActionService, getAllMetrics } from "../../services/metricService";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  const [metrics, setMetrics] = useState([]);

  async function getMetrics() {
    var data = new Date();
    var diaSemana = data.getDay();
    var diaMes = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var c = 0;
    if (diaSemana > 1) {
      while (c < diaSemana - 1) {
        c++;
      }
    }
    data = `${ano}-${mes + 1}-${diaMes - c}`;
    const response = await getAllMetrics(data);
    setMetrics(response.data.results);
  }

  function getData() {
    var data = new Date();
    var diaSemana = data.getDay();
    var diaMes = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var c = 0;
    if (diaSemana > 1) {
      while (c < diaSemana - 1) {
        c++;
      }
    }
    data = `${ano}-${mes + 1}-${diaMes - c}`;
    return data;
  }

  async function addAction(id) {
    await addActionService(id, getData());
    getMetrics();
  }

  useEffect(() => {
    getMetrics();
  }, []);

  return (
    <HomeBody>
      {metrics &&
        metrics.map((metric, index) => (
          <MetricCard
            key={index}
            name={metric.name}
            actions={metric.monthWeek[0].week.actions}
            add={() => addAction(metric.id)}
          />
        ))}
    </HomeBody>
  );
}
