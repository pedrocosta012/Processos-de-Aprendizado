import { mongoHelper } from '../../../../../tests/infra/db/mongodb/helper/mongoHelper';
import { AddAccountRepository } from '../../../../data/protocols/addAccountRepository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/useCases/addAccount';

export class AccountMongoRepository implements AddAccountRepository {
    async add(accountData: AddAccountModel): Promise<AccountModel> {
        const accountCollection = mongoHelper.getCollection('accounts');
        const { insertedId } = await accountCollection.insertOne(accountData);
        const account = await accountCollection.findOne({ _id: insertedId });
        const { _id, ...accountWithoutId } = account;
        return Object.assign({}, accountWithoutId, { id: _id }) as unknown as AccountModel;
    }
}
