import { mongoHelper } from '../../helper/mongoHelper';
import { AddAccountRepository } from '../../../../data/protocols/addAccountRepository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/useCases/addAccount';

export class AccountMongoRepository implements AddAccountRepository {
    async add(accountData: AddAccountModel): Promise<AccountModel> {
        const accountCollection = await mongoHelper.getCollection('accounts');
        const { insertedId } = await accountCollection.insertOne(accountData);
        const account = await accountCollection.findOne({ _id: insertedId });
        return mongoHelper.map(account);
    }
}
