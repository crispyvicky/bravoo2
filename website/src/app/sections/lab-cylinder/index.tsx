import { Experiment } from "../../../lib/types";
import { Cyllinder } from "../../components/cyllinder";
import experimentsData from "../../../../data.json";

export const LabCylinder = async () => {
  const experiments = experimentsData as Experiment[];

  return <Cyllinder experiments={experiments} />;
};
