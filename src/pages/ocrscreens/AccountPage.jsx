import React from 'react';
import Subscription from '../accountpages/Subscription';
import UserAccount from '../accountpages/UserAccount';
import PaymentBilling from '../accountpages/PaymentBilling';
import Settings from '../accountpages/Settings';

const AccountPage = () => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-50 py-8 flex flex-col gap-12">
            <Subscription />
            <UserAccount />
            <PaymentBilling />
            <Settings />
        </div>
    );
}

export default AccountPage;
