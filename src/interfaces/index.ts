export type Client = {
    id: string;
    name: string;
    email: string;
    cpf: string;
    birthDate: Date;
    naturality: string;
    nacionality: string;
    gender: string;
    address: string;
    createdAt: string;
    userId: string | null;
    updatedAt: string;
};

export type ClientRequest = Omit<Client, "id" | "createdAt" | "updatedAt">;

export type ClientUpdate = Omit<Client, "createdAt" | "cpf" | "birthDate" | "userId" | "updatedAt">;


export type UserRequest = {
    email : string
    password: string
}