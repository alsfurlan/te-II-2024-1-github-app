export type Profile = {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
};

export type Repository = {
    name: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    svn_url: string;
}