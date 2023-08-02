import { AddAccountModel } from '../usecases/addAccount';

export interface AccountModel extends AddAccountModel{
    id: string
}
