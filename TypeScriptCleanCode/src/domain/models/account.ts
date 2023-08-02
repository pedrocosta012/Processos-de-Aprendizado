import { AddAccountModel } from '../useCases/addAccount';

export interface AccountModel extends AddAccountModel{
    id: string
}
