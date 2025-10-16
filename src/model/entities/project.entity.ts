import { nanoid } from 'nanoid';

export type ProjectEntityProps = {
  id: string;
  name: string;
  description: string | null;
};

export type ProjectEntityCreateInput = { name: string; description?: string };
export type ProjectEntityUpdateInput = { name?: string; description?: string };

export class ProjectEntity {
  private props: ProjectEntityProps;

  constructor(props: ProjectEntityProps) {
    this.props = props;
  }

  static create({
    name,
    description,
  }: ProjectEntityCreateInput): ProjectEntity {
    return new ProjectEntity({
      id: nanoid(),
      name,
      description: description ?? null,
    });
  }

  static rehydrate(props: ProjectEntityProps): ProjectEntity {
    return new ProjectEntity(props);
  }

  toObject(): ProjectEntityProps {
    return this.props;
  }

  update(input: ProjectEntityUpdateInput): void {
    this.props = { ...this.props, ...input };
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string | null {
    return this.props.description;
  }
}
