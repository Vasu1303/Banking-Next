import { secureHeapUsed } from "crypto";
import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Rightsidebar from "@/components/Rightsidebar";

const Home = () => {
  const loggedIn = { firstName: "Vasu", lastName: "Singh", email: "vasusingh1305@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your payments and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12809}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <Rightsidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1280}, {currentBalance: 5000}]}
      />
    </section>
  );
};

export default Home;
