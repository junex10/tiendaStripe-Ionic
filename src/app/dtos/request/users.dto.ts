export class GetUserDTO{
    id: string;
    email: string;
    password: string;
    profile: ProfileDTO;
    cards?: CardsDTO[];
    person?: PersonDTO;
    permits: PermitsDTO;
    cart?: CartDTO[];
    client?: string
}
export class ProfileDTO{
    role: string;
    access: AccessDTO[]
}
export class AccessDTO{
    view: string;
}
export class CardsDTO{
    creditCardNumber: string;
    cvc: number;
    expirationDate: string;
}
export interface PersonDTO{
    name: string;
    lastname: string;
    phone?: string;
    areaCode?: string;
    active?: boolean;
}
export interface PermitsDTO{
    name: string,
    keys?: PermitsKeysDTO[]
}
export interface PermitsKeysDTO{
    name: string,
    control: ControlKeysDTO
}
export interface ControlKeysDTO{
    [index: number]: string;
}
export interface CartDTO{
    product: string,
    price: number,
    many: number
}
export class GetUserListDTO{
    id: string;
    email: string;
    role: string;
}