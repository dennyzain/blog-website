import { Post, User } from '../PostSection';

export type Project=Post;

export interface ProjectProps {
    data: Array<Project>;
}

export interface MainProjectProps extends ProjectProps{
    user:User;
}

export interface ProjectDetailProps{
    data:Project;
    user:User;
}
