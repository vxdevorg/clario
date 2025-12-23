import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Subscription from '../accountpages/Subscription';
import UserAccount from '../accountpages/UserAccount';
import Navbar from '../landingpages/Navbar';

const AccountPage = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-50 py-8 flex flex-col gap-12">
                <UserAccount />
                <Subscription />
            </div>

        </div>
    );
};

export default AccountPage;
