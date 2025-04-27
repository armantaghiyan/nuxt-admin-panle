export default interface Admin {
    id: number;
    name: string;
    username: string;
    image: string | null;
    last_login: Date;
    updated_at: Date;
}
