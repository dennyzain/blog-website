import { Project, ProjectProps } from '../../../interfaces/ProjectSection';
import Card from '../../molecules/Card';

export default function Projects({ data }:ProjectProps) {
  return (
    <>
      {data.map((item:Project) => (
        <Card key={item.id} data={item} model="project" />
      ))}
    </>
  );
}
